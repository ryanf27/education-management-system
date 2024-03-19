<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            ['name' => 'Mathematics', 'description' => 'The study of numbers, quantities, and shapes. Focuses on skills and understanding in math, including algebra, geometry, and calculus.'],
            ['name' => 'English Language Arts', 'description' => 'The study of English literature and writing. Enhances reading, writing, and critical thinking skills.'],
            ['name' => 'Science', 'description' => 'Covers various branches of science including biology, chemistry, physics, and earth science to understand the natural world.'],
            ['name' => 'Social Studies', 'description' => 'Encompasses history, geography, economics, and political science. Focuses on understanding human society, its structure, and its development.'],
            ['name' => 'Physical Education', 'description' => 'Promotes physical fitness and well-being. Includes sports, exercise routines, and health education.'],
            ['name' => 'Art', 'description' => 'Focuses on visual and performing arts including drawing, painting, sculpture, music, and drama. Encourages creativity and expression.'],
            ['name' => 'Music', 'description' => 'Teaches musical theory, instruments, performance, and history. Encourages students to appreciate and perform music.'],
            ['name' => 'World Languages', 'description' => 'Offers the study of foreign languages such as Spanish, French, German, or Mandarin. Enhances communication skills and cultural awareness.'],
            ['name' => 'Technology and Computer Science', 'description' => 'Covers the principles of information technology, computer programming, and digital literacy. Prepares students for the digital world.'],
            ['name' => 'Environmental Education', 'description' => 'Focuses on understanding the environment, conservation practices, and sustainability. Aims to foster an appreciation for the natural world.'],
        ];

        DB::table('subjects')->insert($subjects);
    }
}
