<?php

use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\ParentsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\CourseController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// ['auth', 'verified']
Route::prefix('dashboard')->group(function () {
    // Dashboard Route
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Profile Routes
    Route::middleware('role:admin|student|teacher')->group(function () {
        Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    // Anouncment Route
    Route::prefix('announcement')->group(function () {
        Route::get('/', [AnnouncementController::class, 'index'])->name('announcement.index');
        Route::get('/create', [AnnouncementController::class, 'create'])->name('announcement.create');
        Route::post('/', [AnnouncementController::class, 'store'])->name('announcement.store');
        Route::get('/{id}', [AnnouncementController::class, 'show'])->name('announcement.show');
        Route::get('/{id}/edit', [AnnouncementController::class, 'edit'])->name('announcement.edit');
        Route::put('/{id}', [AnnouncementController::class, 'update'])->name('announcement.update');
        Route::delete('/{id}', [AnnouncementController::class, 'destroy'])->name('announcement.destroy');
    });

    // // Schedule Routes
    Route::prefix('schedules')->group(function () {
        Route::get('/', [SchedulesController::class, 'index'])->name('schedules.index');
        Route::get('/create', [SchedulesController::class, 'create'])->name('schedules.create');
        Route::post('/', [SchedulesController::class, 'store'])->name('schedules.store');
        Route::get('/{schedules}', [SchedulesController::class, 'show'])->name('schedules.show');
        Route::get('/{schedules}/edit', [SchedulesController::class, 'edit'])->name('schedules.edit');
        Route::put('/{id}', [SchedulesController::class, 'update'])->name('schedules.update');
        Route::delete('/{schedules}', [SchedulesController::class, 'destroy'])->name('schedules.destroy');
    });

    // Submissions Routes
    Route::prefix('submissions')->group(function () {
        Route::get('/', [SubmissionController::class, 'index'])->name('submissions.index');
        Route::get('/create', [SubmissionController::class, 'create'])->name('submissions.create');
        Route::post('/', [SubmissionController::class, 'store'])->name('submissions.store');
        Route::get('/{id}', [SubmissionController::class, 'show'])->name('submissions.show');
        Route::get('/{id}/edit', [SubmissionController::class, 'edit'])->name('submissions.edit');
        Route::put('/{id}', [SubmissionController::class, 'update'])->name('submissions.update');
        Route::delete('/{id}', [SubmissionController::class, 'destroy'])->name('submissions.destroy');
    });

    // Erollments Routes
    Route::prefix('enrollments')->group(function () {
        Route::get('/', [EnrollmentController::class, 'index'])->name('enrollments.index');
        Route::get('/create', [EnrollmentController::class, 'create'])->name('enrollments.create');
        Route::post('/', [EnrollmentController::class, 'store'])->name('enrollments.store');
        Route::get('/{enrollment}', [EnrollmentController::class, 'show'])->name('enrollments.show');
        Route::delete('/{enrollment}', [EnrollmentController::class, 'destroy'])->name('enrollments.destroy');
    })->middleware('role:admin|parent|student');

    // Course Routes
    Route::middleware('role:student|admin|teacher')->group(function () {
        Route::get('/course', [CourseController::class, 'index'])->name('courses.index');
        Route::get('/course/create', [CourseController::class, 'create'])->name('courses.create');
        Route::post('/course', [CourseController::class, 'store'])->name('courses.store');
        Route::get('/course/{id}', [CourseController::class, 'show'])->name('courses.show');
        Route::get('/course/{id}/edit', [CourseController::class, 'edit'])->name('courses.edit');
        Route::put('/course/{id}', [CourseController::class, 'update'])->name('courses.update');
        Route::delete('/course/{id}', [CourseController::class, 'destroy'])->name('courses.destroy');
    });

    // Teacher Routes
    Route::middleware('role:teacher|admin')->group(function () {
        Route::get('/teacher', [TeacherController::class, 'index'])->name('teachers.index');
        Route::get('/teacher/create', [TeacherController::class, 'create'])->name('teachers.create');
        Route::post('/teacher', [TeacherController::class, 'store'])->name('teachers.store');
        Route::get('/teacher/{id}', [TeacherController::class, 'show'])->name('teachers.show');
        Route::get('/teacher/{id}/edit', [TeacherController::class, 'edit'])->name('teachers.edit');
        Route::put('/teacher/{id}', [TeacherController::class, 'update'])->name('teachers.update');
        Route::delete('/teacher/{id}', [TeacherController::class, 'destroy'])->name('teachers.destroy');

        // assignments Routes 
        Route::prefix('assignments')->group(function () {
            Route::get('/', [AssignmentController::class, 'index'])->name('assignments.index');
            Route::get('/create', [AssignmentController::class, 'create'])->name('assignments.create');
            Route::post('/', [AssignmentController::class, 'store'])->name('assignments.store');
            Route::get('/{id}', [AssignmentController::class, 'show'])->name('assignments.show');
            Route::get('/{id}/edit', [AssignmentController::class, 'edit'])->name('assignments.edit');
            Route::put('/{id}', [AssignmentController::class, 'update'])->name('assignments.update');
            Route::delete('/{id}', [AssignmentController::class, 'destroy'])->name('assignments.destroy');
        });
    });

    // // Student Routes
    Route::middleware(['role:student|admin'])->group(function () {
        Route::get('/student', [StudentController::class, 'index'])->name('students.index');
        Route::get('/student/create', [StudentController::class, 'create'])->name('students.create');
        Route::get('/student/show', [StudentController::class, 'show'])->name('students.show');
        Route::get('/student/update', [StudentController::class, 'update'])->name('students.update');
        Route::get('/student/delete', [StudentController::class, 'delete'])->name('students.delete');
    });

    // // Parent Routes
    Route::middleware(['role:parent|admin'])->group(function () {
        Route::get('/parent', [ParentsController::class, 'index'])->name('parents.index');
        Route::get('/parent/create', [ParentsController::class, 'create'])->name('parents.create');
        Route::get('/parent/show', [ParentsController::class, 'show'])->name('parents.show');
        Route::get('/parent/update', [ParentsController::class, 'update'])->name('parents.update');
        Route::get('/parent/delete', [ParentsController::class, 'delete'])->name('parents.delete');
    });
})->middleware(['auth']);


require __DIR__ . '/auth.php';
