<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

use App\Models\Teacher;
use App\Models\Student;



class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $classes = Classes::all();
        return Inertia::render('Auth/Register', ['classes' => $classes]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|in:admin,student,teacher,parent'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),

        ]);

        $roleInput = $request->input('role');
        $role = Role::where('name', $request->input('role'))->firstOrFail();

        switch ($roleInput) {
            case 'student':
                Student::create([
                    'user_id' => $user->id,
                    'name' => $request->name,
                ]);
                $user->assignRole($role);
                break;
            case 'teacher':
                Teacher::create([
                    'user_id' => $user->id,
                    'name' => $request->name,
                    'class_id' => $request->class_id ?? null,

                ]);
                $user->assignRole($role);
                break;
        }


        event(new Registered($user));

        Auth::login($user);

        switch ($roleInput) {
            case 'teacher':
                return redirect()->route('teachers.index');
            case 'student':
                return redirect()->route('students.index');

            default:
                return redirect()->route('/');
        }
    }
}
