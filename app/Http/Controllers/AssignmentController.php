<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Assignment;
use App\Models\Classes;
use App\Models\Subject;
use Illuminate\Support\Facades\Auth;

class AssignmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $assignments = Assignment::all()->toArray();
        return Inertia::render('Assignment/index', [
            'assignments' => $assignments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $subjects = Subject::all()->toArray();
        $teachers = Auth::user()->id;
        $classes = Classes::all()->toArray();
        return Inertia::render('Assignment/create', [
            'subjects' => $subjects,
            'teachers' => $teachers,
            'classes' => $classes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'deadline' => 'required|date',
            'subject_id' => 'required|exists:subjects,id',
        ]);

        Assignment::create($validatedData);

        return redirect()->route('assignments.index');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $assignment = Assignment::find($id);
        return Inertia::render('Assignment/show', [
            'assignment' => $assignment
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $assignment = Assignment::find($id);
        return Inertia::render('Assignment/edit', [
            'assignment' => $assignment
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'deadline' => 'required|date',

        ]);

        $assignment = Assignment::find($id);
        $assignment->update($validatedData);

        return redirect()->route('assignments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $assignment = Assignment::find($id);
        $assignment->delete();

        return redirect()->route('assignments.index');
    }
}
