<?php

use App\Http\Controllers\ParentsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
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
// ['auth', 'verified']
Route::prefix('dashboard')->group(function () {
    // Dashboard Route
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Profile Routes
    Route::middleware('role:admin')->group(function () {
        Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    // Teacher Routes
    Route::middleware('role:teacher|admin')->group(function () {
        Route::get('/teacher', [TeacherController::class, 'index'])->name('teachers.index');
        Route::get('/teacher/create', [TeacherController::class, 'create'])->name('teachers.create');
        Route::post('/teacher', [TeacherController::class, 'store'])->name('teachers.store');
        Route::get('/teacher/{teacher}', [TeacherController::class, 'show'])->name('teachers.show');
        Route::get('/teacher/{teacher}/edit', [TeacherController::class, 'edit'])->name('teachers.edit');
        Route::put('/teacher/{teacher}', [TeacherController::class, 'update'])->name('teachers.update');
        Route::delete('/teacher/{teacher}', [TeacherController::class, 'destroy'])->name('teachers.destroy');
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
