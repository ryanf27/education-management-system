<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;
use App\Models\Student;

class Parents extends Model
{
    use HasFactory, HasRoles;

    protected $fillable = [
        'name',
        'email',
        'phone_number',

    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
