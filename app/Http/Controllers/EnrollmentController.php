<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Models\Classes;
use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class EnrollmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enrollments = Enrollment::all();
        return Inertia::render('Enrollments/Index', [
            'enrollments' => $enrollments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $classId = request('classId');
        $studentClass = Classes::with('subject')->find($classId);
        $student_id =  Auth::user()->id;

        return Inertia::render('Enrollments/Create', ['studentClass' => $studentClass, 'student_id' => $student_id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $classId = $request->class_id;
        $student_id = Student::where('user_id', $request->student_id)->first()->id;

        Enrollment::create([
            'student_id' => $student_id,
            'class_id' => $classId
        ]);

        return redirect()->route('enrollments.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
