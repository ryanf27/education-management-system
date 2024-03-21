<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Submission;
use App\Models\Assignment;

class SubmissionController extends Controller
{
    public function index()
    {
        $submissions = Submission::with(['assignment', 'student'])->get();



        return Inertia::render('Submission/index', [
            'submissions' => $submissions,
            // 'filters' => $request->all('search', 'trashed'),
            // 'submissions' => Submission::with('assignment', 'student')
            //     ->orderBy('created_at', 'desc')
            //     ->filter($request->only('search', 'trashed'))
            //     ->paginate()
            //     ->withQueryString()
        ]);
    }



    public function create()
    {
        return Inertia::render('Submission/Create');
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

    public function show($id)
    {
        return Inertia::render('Submissions/Show', [
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
