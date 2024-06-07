<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Schedule;
use App\Models\Assignment;
use Illuminate\Support\Facades\Auth;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $user = auth()->user();

            if (!$user || !$user->is_authenticated) {
                return redirect()->route('login');
            }

            $teacherId = $user->teacher->id;

            $scheduleClasspivot = [];

            $schedules = Schedule::with(['classes', 'room'])->where('teacher_id', $teacherId)->get();

            foreach ($schedules as $schedule) {
                $scheduleClasspivot[] = [
                    'class' => $schedule->classes->name,
                    'room' => $schedule->room->name,
                    'day' => $schedule->day,
                    'time' => $schedule->start_time,
                ];
            }

            $assignments = Assignment::with(['submissions.student'])
                ->where('teacher_id', $teacherId)
                ->get();

            $SubmissionAssignmentPivotData = [];

            foreach ($assignments as $assignment) {
                foreach ($assignment->submissions as $submission) {
                    $SubmissionAssignmentPivotData[] = [
                        'id' => $submission->id,
                        'student_name' => $submission->student ? $submission->student->name : 'No Student',
                        'assignment_title' => $assignment->title,
                        'submission_date' => $submission->created_at,
                        'score' => $submission->score ?? '-',
                    ];
                }
            }

            return Inertia::render('Teacher/Index', [
                'submissions' => $SubmissionAssignmentPivotData,
                'schedules' => $scheduleClasspivot
            ]);
        } catch (\Throwable $e) {
            return response()->error($e->getMessage(), 403);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Teacher/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate();
        Teacher::create($data);
        return redirect()->route('teachers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $teacher = Teacher::find($id);
        return Inertia::render('Teeacher/show', [
            'teacher' => $teacher,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $teacher = Teacher::find($id);
        return Inertia::render('Teacher/edit', [
            'teacher' => $teacher,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $teacher = Teacher::find($id);
        $data = $request->validate();
        $teacher->update($data);
        return redirect()->route('teachers.index')->with('success', 'teacher updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Teacher::destroy($id);
        return redirect()->route('teachers.index')->with('success', 'teacher deleted successfully');
    }
}
