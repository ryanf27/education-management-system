<?php

namespace App\Http\Controllers;

use App\Models\Classes;
use App\Models\Schedules;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use Inertia\Inertia;


class SchedulesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $schedules = collect([]);

        if ($user->hasRole('teacher')) {
            $schedules = Schedules::where('teacher_id', $user->teacher->id)->get();
        } elseif ($user->hasRole('student')) {
            $enrollments =  Enrollment::where('student_id', $user->student->id)->get();
            $schedules = Schedules::whereIn('class_id', $enrollments->pluck('class_id'))->get();
        }

        return Inertia::render('Schedules/Index', [
            'schedules' => $schedules,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = auth()->user();
        $teacherId = $user->teacher->id;
        $classes = Classes::all();

        return Inertia::render('Schedules/Create', [
            'classes' => $classes,
            'teacherId' => $teacherId,
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

        Schedules::create($validatedData);

        return redirect()->route('schedules.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedules $schedules)
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
    public function edit(Schedules $schedules)
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
    public function update(Request $request, Schedules $schedules)
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
    public function destroy(Schedules $schedules)
    {
        $schedules->delete();

        return redirect()->route('schedules.index');
    }
}
