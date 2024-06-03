<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;




class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::whereName('admin')->first();
        $teacherRole = Role::whereName('teacher')->first();
        $studentRole = Role::whereName('student')->first();

        $adminRole->givePermissionTo(Permission::all());

        $teacherRole->givePermissionTo([
            'manage assignments',
            'manage classes',
            'manage subjects',
            'view grades',
            'view profile',
            'edit profile',
            'view schedule',
            'create schedule',
        ]);

        $studentRole->givePermissionTo([
            'view grades',
            'view profile',
            'view schedule',
            'download materials',
        ]);
    }
}
