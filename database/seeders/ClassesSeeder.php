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
            ['name' => 'algebra', 'grade' => '9',],
            ['name' => 'geometry', 'grade' => '10',],
            ['name' => 'calculus', 'grade' => '11',],
            ['name' => 'english literature', 'grade' => '9'],
            ['name' => 'writing', 'grade' => '10'],
            ['name' => 'critical thinking', 'grade' => '11'],
            ['name' => 'biology', 'grade' => '9'],
            ['name' => 'chemistry', 'grade' => '10'],
            ['name' => 'physics', 'grade' => '11'],
            ['name' => 'history', 'grade' => '9'],
            ['name' => 'geography', 'grade' => '10'],
            ['name' => 'economics', 'grade' => '11'],
            ['name' => 'physical fitness', 'grade' => '9'],
            ['name' => 'sports', 'grade' => '10'],
            ['name' => 'health education', 'grade' => '11'],
            ['name' => 'visual arts', 'grade' => '9'],
            ['name' => 'performing arts', 'grade' => '10'],
            ['name' => 'music', 'grade' => '11'],
            ['name' => 'spanish', 'grade' => '9'],
            ['name' => 'french', 'grade' => '10'],
            ['name' => 'german', 'grade' => '11'],
            ['name' => 'information technology', 'grade' => '9'],
            ['name' => 'computer programming', 'grade' => '10'],
            ['name' => 'digital literacy', 'grade' => '11'],
            ['name' => 'environmental education', 'grade' => '9'],
            ['name' => 'conservation practices', 'grade' => '10'],
            ['name' => 'sustainability', 'grade' => '11'],
        ];

        DB::table('classes')->insert($classes);
    }
}
