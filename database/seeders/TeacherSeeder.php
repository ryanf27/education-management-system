<?php

namespace Database\Seeders;

use App\Models\Assignment;
use App\Models\Teacher;
use Illuminate\Database\Seeder;


class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Teacher::factory()->count(10)->has(Assignment::factory())->create();
    }
}
