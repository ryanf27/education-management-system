<?php

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

// Route::middleware('auth')->group(function () {
//     Route::group(['prefix' => 'student', 'middleware' => ['role:admin, teacher']], function () {
//     });
// });

Route::get('/teacher', [TeacherController::class, 'index'])->name('teachers.index');
Route::get('teacher/create', [TeacherController::class, 'create'])->name('teachers.create');
Route::get('teacher/show', [TeacherController::class, 'show'])->name('teachers.show');
Route::get('teacher/update', [TeacherController::class, 'update'])->name('teachers.update');
Route::get('teacher/delete', [TeacherController::class, 'delete'])->name('teachers.delete');

Route::get('/student', [StudentController::class, 'index'])->name('student.index');
Route::get('student/create', [StudentController::class, 'create'])->name('student.create');
Route::get('student/show', [StudentController::class, 'show'])->name('student.show');
Route::get('student/update', [StudentController::class, 'update'])->name('student.update');
Route::get('student/delete', [StudentController::class, 'delete'])->name('student.delete');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
