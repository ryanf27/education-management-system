<?php

namespace Database\Factories;

use App\Models\Teacher;
use App\Models\Subject;
use App\Models\User;
use App\Models\Classes;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{

    protected $model = Teacher::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'address' => $this->faker->address,
            'user_id' => User::factory(),
            'class_id' => Classes::inRandomOrder()->first()->id ?? Classes::factory(),
        ];
    }
}
