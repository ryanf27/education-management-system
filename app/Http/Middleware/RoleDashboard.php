<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;



class RoleDashboard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$guards): Response
    {
        // $user = Auth::user();

        // if ($user) {
        //     switch ($user->getRoleNames()->first()) {
        //         case 'teacher':
        //             return redirect('/dashboard/teacher');
        //         case 'student':
        //             return redirect('/dashboard/student');
        //         case 'parent':
        //             return redirect('/dashboard/parent');
        //         default:
        //             return redirect('/');
        //     }
        // }

        return $next($request);
    }
}
