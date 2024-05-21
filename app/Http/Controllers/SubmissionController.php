<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Submission;
use App\Models\Assignment;
use App\Models\Enrollment;

class SubmissionController extends Controller
{
    public function index()
    {
        $submissions = Submission::with(['assignment', 'student'])->get();
        return Inertia::render('Submission/index', [
            'submissions' => $submissions,

        ]);
    }

    public function create()
    {
        $user = auth()->user();

        $enrollments = Enrollment::where('student_id', '=', $user->student->id)->pluck('class_id');

        $assignments = Assignment::whereIn('class_id', $enrollments)->get();

        return Inertia::render('Submission/Create', [
            'assignments' => $assignments,
            'student_id' => $user->student->id,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file',
            'assignment_id' => 'required|exists:assignments,id',
            'student_id' => 'required|exists:students,id'
        ]);

        Submission::create($request->all());

        return redirect()->route('submissions.index');
    }

    public function grade(Request $request, $id)
    {

        $request->validate([
            'grade' => 'required|numeric',
        ]);

        $submission =  Submission::findOrFail($id);
        $submission->update(['score' => $request->grade]);

        return redirect()->route('teachers.index');
    }

    public function show($id)
    {
        return Inertia::render('Submission/Show', [
            'submission' => Submission::with('assignment', 'student')->findOrFail($id)
        ]);
    }

    public function edit($id)
    {
        return Inertia::render('Submissions/Edit', [
            'submission' => Submission::with('assignment', 'student')->findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'file' => 'required|file',
            'assignment_id' => 'required|exists:assignments,id',
            'student_id' => 'required|exists:students,id'
        ]);

        $submission = Submission::findOrFail($id);
        $submission->update($request->all());

        return redirect()->route('submissions.index');
    }

    public function destroy($id)
    {
        Submission::findOrFail($id)->delete();

        return redirect()->route('submissions.index');
    }
}
