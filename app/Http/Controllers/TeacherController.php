<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $teacher = Teacher::paginate(10);
        return Inertia::render('Teacher/index', [
            'teachers' => $teacher, 'role' => $request->user()->role
        ]);
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
    public function show(Teacher $teacher)
    {
        $teacher = Teacher::paginate(10);
        return Inertia::render('Teeacher/show', [
            'teacher' => $teacher,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teacher $teacher)
    {
        return Inertia::render('Teacher/edit', [
            'teacher' => $teacher,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teacher $teacher)
    {
        $data = $request->validate();
        $teacher->update($data);
        return redirect()->route('teachers.index')->with('success', 'teacher updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return redirect()->route('teachers.index')->with('success', 'teacher deleted successfully');
    }
}
