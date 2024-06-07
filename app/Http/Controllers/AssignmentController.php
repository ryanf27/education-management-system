<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Assignment;
use App\Models\Classes;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Auth;


class AssignmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        try {
            $user = auth()->user();

            if (!$user) {
                return redirect()->route('login');
            }

            $assignments = collect([]);

            if ($user->hasRole('teacher')) {
                $assignments = Assignment::where('teacher_id', $user->teacher->id)->get();
            } elseif ($user->hasRole('student')) {
                $enrollments = Enrollment::where('student_id', $user->student->id)->pluck('class_id');
                $assignments = Assignment::whereIn('class_id', $enrollments)->get();
            }
            return Inertia::render('Assignment/Index', [
                'assignments' => $assignments
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
        $teachersId = Auth::user()->id;
        $classes = Classes::all()->toArray();
        return Inertia::render('Assignment/Create', [
            'teachersId' => $teachersId,
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
            'class_id' => 'required|exists:classes,id',
            'teacher_id' => 'required|exists:teachers,id',
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
        return Inertia::render('Assignment/Show', [
            'assignment' => $assignment
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $assignment = Assignment::find($id);
        return Inertia::render('Assignment/Edit', [
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
