<?php

namespace Database\Seeders;

use App\Models\Assignment;
use App\Models\Enrollment;
use App\Models\Student;
use App\Models\Submission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;


class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $studentData = [
            [
                'name' => 'student1',
                'address' => 'Student 1 address',
                'date_of_birth' => '2022-01-01',
            ],
            [
                'name' => 'student2',
                'address' => 'Student 2 address',
                'date_of_birth' => '2022-02-02',
            ],
            [
                'name' => 'student3',
                'address' => 'Student 3 address',
                'date_of_birth' => '2022-03-03',
            ],
            [
                'name' => 'student4',
                'address' => 'Student 4 address',
                'date_of_birth' => '2022-04-04',
            ],
            [
                'name' => 'student5',
                'address' => 'Student 5 address',
                'date_of_birth' => '2022-05-05',
            ],
            [
                'name' => 'student6',
                'address' => 'Student 6 address',
                'date_of_birth' => '2022-06-06',
            ],
        ];

        foreach ($studentData as $data) {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['name'] . '@example.com',
                'password' => bcrypt('password'),
            ]);

            $user->assignRole('student');

            student::factory()
                ->has(Enrollment::factory()->count(6))
                ->has(Submission::factory()->count(6))
                ->create([
                    'name' => $data['name'],
                    'address' => $data['address'],
                    'date_of_birth' => $data['date_of_birth'],
                    'user_id' => $user->id,
                ]);
        }
    }
}
