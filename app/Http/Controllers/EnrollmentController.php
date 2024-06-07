<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Models\Classes;
use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EnrollmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $student = Auth::user()->student->id;

        $enrollmentJoin = DB::table('enrollments')
            ->join('classes', 'classes.id', '=', 'enrollments.class_id')
            ->join('students', 'students.id', '=', 'enrollments.student_id')
            ->select('enrollments.id', 'enrollments.created_at', 'students.name as student_name', 'classes.name as class_name')
            ->where('students.id', $student)
            ->get();


        return Inertia::render('Enrollments/Index', [
            'enrollments' => $enrollmentJoin
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $classId = request('classId');
        $studentClass = Classes::where('id', $classId)->first();
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
    public function show(Enrollment $enrollment)
    {
        $enrollmentJoin = DB::table('enrollments')
            ->join('classes', 'classes.id', '=', 'enrollments.class_id')
            ->join('students', 'students.id', '=', 'enrollments.student_id')
            ->select('students.name as student_name', 'classes.name as class_name', 'classes.grade as class_grade', 'enrollments.id', 'enrollments.created_at')
            ->where('enrollments.id', $enrollment->id)
            ->first();

        return Inertia::render('Enrollments/Show', [
            'enrollment' => $enrollmentJoin,
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enrollment $enrollment)
    {
        $enrollment->delete();

        return redirect()->route('enrollments.index');
    }
}
