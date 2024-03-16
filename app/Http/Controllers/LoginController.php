<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;


class LoginController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = Auth::user();
        dump($user);

        // $role = $user->role;


        // switch ($role) {
        //     case 'teacher':
        //         return redirect()->route('teachers.index');
        //     case 'student':
        //         return redirect()->route('student.index');
        //     case 'parent':
        //         return redirect()->route('parents.index');
        //     default:
        //         return redirect('/');
        // }

        // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        return redirect('/');

        // if (Auth::check()) {
        //     $role = Auth::user()->role;

        //     switch ($role) {
        //         case 'teacher':
        //             return redirect('/teachers/dashboard');
        //         case 'student':
        //             return redirect('/student/dashboard');
        //         case 'parent':
        //             return redirect('/parents/dashboard');
        //         default:
        //             return redirect('/');
        //     }
        // }
    }
}
