<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Teacher extends Model
{
    use HasFactory, HasRoles;

    protected $fillable = [
        'name',
        'subject'
    ];

    public function classes()
    {
        // return $this->hasMany(Class::class);
    }
    public function assignments()
    {
        // return $this->hasMany(Assignment::class);
    }
}