<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classes = [
            ['name' => 'algebra', 'grade' => '9', 'subject_id' => 1],
            ['name' => 'geometry', 'grade' => '10', 'subject_id' => 1],
            ['name' => 'calculus', 'grade' => '11', 'subject_id' => 1],
            ['name' => 'english literature', 'grade' => '9', 'subject_id' => 2],
            ['name' => 'writing', 'grade' => '10', 'subject_id' => 2],
            ['name' => 'critical thinking', 'grade' => '11', 'subject_id' => 2],
            ['name' => 'biology', 'grade' => '9', 'subject_id' => 3],
            ['name' => 'chemistry', 'grade' => '10', 'subject_id' => 3],
            ['name' => 'physics', 'grade' => '11', 'subject_id' => 3],
            ['name' => 'history', 'grade' => '9', 'subject_id' => 4],
            ['name' => 'geography', 'grade' => '10', 'subject_id' => 4],
            ['name' => 'economics', 'grade' => '11', 'subject_id' => 4],
            ['name' => 'physical fitness', 'grade' => '9', 'subject_id' => 5],
            ['name' => 'sports', 'grade' => '10', 'subject_id' => 5],
            ['name' => 'health education', 'grade' => '11', 'subject_id' => 5],
            ['name' => 'visual arts', 'grade' => '9', 'subject_id' => 6],
            ['name' => 'performing arts', 'grade' => '10', 'subject_id' => 6],
            ['name' => 'music', 'grade' => '11', 'subject_id' => 7],
            ['name' => 'spanish', 'grade' => '9', 'subject_id' => 8],
            ['name' => 'french', 'grade' => '10', 'subject_id' => 8],
            ['name' => 'german', 'grade' => '11', 'subject_id' => 8],
            ['name' => 'information technology', 'grade' => '9', 'subject_id' => 9],
            ['name' => 'computer programming', 'grade' => '10', 'subject_id' => 9],
            ['name' => 'digital literacy', 'grade' => '11', 'subject_id' => 9],
            ['name' => 'environmental education', 'grade' => '9', 'subject_id' => 10],
            ['name' => 'conservation practices', 'grade' => '10', 'subject_id' => 10],
            ['name' => 'sustainability', 'grade' => '11', 'subject_id' => 10],
        ];

        DB::table('classes')->insert($classes);
    }
}
