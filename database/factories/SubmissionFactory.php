<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Submission;
use App\Models\Assignment;
use App\Models\Student;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Submission>
 */
class SubmissionFactory extends Factory
{
    protected $model = Submission::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'file' => $this->faker->word . '.pdf',
            'score' => $this->faker->numberBetween(0, 100),
            'assignment_id' => function () {
                return Assignment::inRandomOrder()->first()->id;
            },
            'student_id' => function () {
                return Student::inRandomOrder()->first()->id;
            },
        ];
    }
}
