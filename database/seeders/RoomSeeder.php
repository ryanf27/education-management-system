<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rooms')->insert([
            [
                'name' => 'Room 101',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 102',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 103',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 104',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 105',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 106',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 107',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 108',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 109',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 110',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 111',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 112',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 113',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 114',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 115',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 116',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 117',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 118',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 119',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Room 120',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
