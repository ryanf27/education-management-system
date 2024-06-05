<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Classes;
use App\Models\Schedule;
use App\Models\Enrollment;
use App\Models\Teacher;
use App\Models\Room;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $classes = Classes::all();
        $teachers = Teacher::all();
        $schedules = Schedule::with('room')->get();
        $rooms = Room::all();
        $schedules = collect([]);

        if ($user->hasRole('teacher')) {
            $schedules = Schedule::where('teacher_id', $user->teacher->id)->get();
        } elseif ($user->hasRole('student')) {
            $enrollments =  Enrollment::where('student_id', $user->student->id)->get();
            $schedules = Schedule::whereIn('class_id', $enrollments->pluck('class_id'))->get();
        }

        return Inertia::render('Schedules/Index', [
            'schedules' => $schedules,  
            'classes' => $classes,
            'teachers' => $teachers,
            'rooms' => $rooms,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();

        if (!$user->can('create schedule')) {
            return response()->json(['error' => 'Unauthorized to create schedule'], 403);
        }

        $teacherClass = Teacher::where('user_id', $user->id)->first()->class_id;

        $classes = Classes::where('id', $teacherClass)->get();

        return Inertia::render('Schedules/Create', [
            'classes' => $classes,
            'teacherId' => $teacherClass,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'teacher_id' => 'required',
            'class_id' => 'required',
            'day' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);

        Schedule::create($validatedData);

        return redirect()->route('schedules.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedule $schedules)
    {

        $classes = Classes::where('id', $schedules->class_id)->get()->first();

        return Inertia::render('Schedules/Show', [
            'schedules' => $schedules,
            'classes' => $classes,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Schedule $schedules)
    {

        $classes = Classes::all();

        return Inertia::render('Schedules/Edit', [
            'schedules' => $schedules,
            'classes' => $classes,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Schedule $schedules)
    {

        $validatedData = $request->validate([
            'class_id' => 'required',
            'day' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'teacher_id' => 'required',
        ]);

        $schedules->update($validatedData);

        return redirect()->route('schedules.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedules)
    {
        $schedules->delete();

        return redirect()->route('schedules.index');
    }
}
