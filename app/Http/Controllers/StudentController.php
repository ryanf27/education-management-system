<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Student;
use App\Models\Assignment;
use App\Models\Classes;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $student = $user->student;

        $enrollments = Enrollment::where('student_id', $user->student->id)->pluck('class_id');

        $assignments = Assignment::with('submissions')
            ->whereIn('class_id', $enrollments)
            ->get();


        $chartData = [];

        foreach ($assignments as $assignment) {
            foreach ($assignment->submissions as $submission) {
                $chartData[] = [
                    'x-var' => Classes::where('id', $assignment->class_id)->first()->name,
                    'y-var' => $submission->score,
                ];
            }
        }

        $studentListInClass = collect();

        if ($student) {
            $classId = Enrollment::where('student_id', $user->student->id)->first('class_id');


            if ($classId) {
                $studentListInClass = DB::table('students')
                    ->join('enrollments', 'students.id', '=', 'enrollments.student_id')
                    ->select('students.name')
                    ->where('enrollments.class_id', '=', $classId->class_id)
                    ->get();
            }
        }




        return Inertia::render('Student/Index', [
            'classmates' => $studentListInClass,
            'assignments' => $assignments,
            'chartData' => $chartData,

        ]);
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Student/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate();
        Student::create($data);
        return redirect()->route('students.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::find($id);
        return Inertia::render('Student/show', [
            'student' => $student,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $student = Student::find($id);
        return Inertia::render('Student/edit', [
            'student' => $student,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student = Student::find($id);
        $data = $request->validate();
        $student->update($data);
        return redirect()->route('Students.index')->with('success', 'student updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Student::destroy($id);
        return redirect()->route('students.index')->with('success', 'student deleted successfully');
    }
}
