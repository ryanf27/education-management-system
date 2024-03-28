<?php

namespace App\Http\Controllers;

use App\Models\Classes;
use App\Models\Schedules;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SchedulesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $schedules = Schedules::all();
        return Inertia::render('Schedules/Index', [
            'schedules' => $schedules,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classes::all();

        return Inertia::render('Schedules/Create', [
            'classes' => $classes,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
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
        $classes = Classes::where('id', $schedules->id)->firstOrFail();

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
