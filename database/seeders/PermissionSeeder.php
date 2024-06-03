<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;


class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'manage classes']);
        Permission::create(['name' => 'manage subjects']);
        Permission::create(['name' => 'manage assignments']);
        Permission::create(['name' => 'manage grades']);

        Permission::create(['name' => 'view grades']);
        Permission::create(['name' => 'view profile']);
        Permission::create(['name' => 'view schedule']);
        Permission::create(['name' => 'create schedule']);

        Permission::create(['name' => 'edit profile']);
        Permission::create(['name' => 'download materials']);
    }
}
