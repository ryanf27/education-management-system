<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Assignment;
use App\Models\Teacher;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Assignment>
 */
class AssignmentFactory extends Factory
{
    protected $model = Assignment::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $teacher = Teacher::inRandomOrder()->first();
        if ($teacher) {
            return [
                'title' => $this->faker->sentence,
                'description' => $this->faker->paragraph,
                'deadline' => $this->faker->dateTimeBetween('now', '+1 month'),
                'teacher_id' => $teacher->id,
                'class_id' => $teacher->class_id,
            ];
        } else {

            return [];
        }
    }
}
