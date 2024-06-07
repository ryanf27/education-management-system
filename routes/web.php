<?php

use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\TeacherController;
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

// Route Group for Authenticated Users
Route::middleware('auth')->group(function () {
    Route::prefix('dashboard')->group(function () {
        // Dashboard Route
        Route::get('/', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

        // Profile Routes
        Route::middleware('role:admin|student|teacher')->group(function () {
            Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
            Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        });

        // Room Routes
        Route::resource('rooms', RoomController::class);

        // Announcement Routes
        Route::prefix('announcements')->group(function () {
            Route::get('/', [AnnouncementController::class, 'index'])->name('announcement.index');
            Route::get('/create', [AnnouncementController::class, 'create'])->name('announcement.create');
            Route::post('/', [AnnouncementController::class, 'store'])->name('announcement.store');
            Route::get('/{id}', [AnnouncementController::class, 'show'])->name('announcement.show');
            Route::get('/{id}/edit', [AnnouncementController::class, 'edit'])->name('announcement.edit');
            Route::put('/{id}', [AnnouncementController::class, 'update'])->name('announcement.update');
            Route::delete('/{id}', [AnnouncementController::class, 'destroy'])->name('announcement.destroy');
        });

        // Schedule Routes
        Route::prefix('schedules')->middleware('role:admin|teacher')->group(function () {
            Route::get('/', [ScheduleController::class, 'index'])->name('schedules.index');
            Route::get('/create', [ScheduleController::class, 'create'])->name('schedules.create');
            Route::post('/', [ScheduleController::class, 'store'])->name('schedules.store');
            Route::get('/{schedules}', [ScheduleController::class, 'show'])->name('schedules.show');
            Route::get('/{schedules}/edit', [ScheduleController::class, 'edit'])->name('schedules.edit');
            Route::put('/{schedules}', [ScheduleController::class, 'update'])->name('schedules.update');
            Route::delete('/{schedules}', [ScheduleController::class, 'destroy'])->name('schedules.destroy');
        });

        // Submission Routes
        Route::prefix('submissions')->middleware('role:admin|student|teacher')->group(function () {
            Route::get('/', [SubmissionController::class, 'index'])->name('submissions.index');
            Route::get('/create', [SubmissionController::class, 'create'])->name('submissions.create');
            Route::post('/', [SubmissionController::class, 'store'])->name('submissions.store');
            Route::put('/{id}/grade', [SubmissionController::class, 'grade'])->name('submissions.grade');
            Route::get('/{id}', [SubmissionController::class, 'show'])->name('submissions.show');
            Route::get('/{id}/edit', [SubmissionController::class, 'edit'])->name('submissions.edit');
            Route::put('/{id}', [SubmissionController::class, 'update'])->name('submissions.update');
            Route::delete('/{id}', [SubmissionController::class, 'destroy'])->name('submissions.destroy');
        });

        // Enrollment Routes
        Route::prefix('enrollments')->middleware('role:admin|parent|student')->group(function () {
            Route::get('/', [EnrollmentController::class, 'index'])->name('enrollments.index');
            Route::get('/create', [EnrollmentController::class, 'create'])->name('enrollments.create');
            Route::post('/', [EnrollmentController::class, 'store'])->name('enrollments.store');
            Route::get('/{enrollment}', [EnrollmentController::class, 'show'])->name('enrollments.show');
            Route::delete('/{enrollment}', [EnrollmentController::class, 'destroy'])->name('enrollments.destroy');
        });

        // Course Routes
        Route::middleware('role:student|admin|teacher')->group(function () {
            Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');
            Route::get('/courses/create', [CourseController::class, 'create'])->name('courses.create');
            Route::post('/courses', [CourseController::class, 'store'])->name('courses.store');
            Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');
            Route::get('/courses/{id}/edit', [CourseController::class, 'edit'])->name('courses.edit');
            Route::put('/courses/{id}', [CourseController::class, 'update'])->name('courses.update');
            Route::delete('/courses/{id}', [CourseController::class, 'destroy'])->name('courses.destroy');
        });

        // Assignment Routes
        Route::prefix('assignments')->middleware('role:admin|teacher')->group(function () {
            Route::get('/', [AssignmentController::class, 'index'])->name('assignments.index');
            Route::get('/create', [AssignmentController::class, 'create'])->name('assignments.create');
            Route::post('/', [AssignmentController::class, 'store'])->name('assignments.store');
            Route::get('/{id}', [AssignmentController::class, 'show'])->name('assignments.show');
            Route::get('/{id}/edit', [AssignmentController::class, 'edit'])->name('assignments.edit');
            Route::put('/{id}', [AssignmentController::class, 'update'])->name('assignments.update');
            Route::delete('/{id}', [AssignmentController::class, 'destroy'])->name('assignments.destroy');
        });

        // Teacher Routes
        Route::middleware('role:teacher|admin')->group(function () {
            Route::get('/teachers', [TeacherController::class, 'index'])->name('teachers.index');
            Route::get('/teachers/create', [TeacherController::class, 'create'])->name('teachers.create');
            Route::post('/teachers', [TeacherController::class, 'store'])->name('teachers.store');
            Route::get('/teachers/{id}', [TeacherController::class, 'show'])->name('teachers.show');
            Route::get('/teachers/{id}/edit', [TeacherController::class, 'edit'])->name('teachers.edit');
            Route::put('/teachers/{id}', [TeacherController::class, 'update'])->name('teachers.update');
            Route::delete('/teachers/{id}', [TeacherController::class, 'destroy'])->name('teachers.destroy');
        });

        // Student Routes
        Route::middleware(['role:student|admin'])->group(function () {
            Route::get('/students', [StudentController::class, 'index'])->name('students.index');
            Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');
            Route::get('/students/{id}', [StudentController::class, 'show'])->name('students.show');
            Route::get('/students/{id}/edit', [StudentController::class, 'edit'])->name('students.edit');
            Route::put('/students/{id}', [StudentController::class, 'update'])->name('students.update');
            Route::delete('/students/{id}', [StudentController::class, 'destroy'])->name('students.destroy');
        });
    });
});

require __DIR__ . '/auth.php';
