<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Permission\Traits\HasRoles;

class Student extends Model
{
    use HasFactory, HasRoles;

    protected $fillable = [
        'name',
        'address',
        'date_of_birth',
        'user_id',
    ];

    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(Classes::class, 'enrollments');
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(Assignment::class, 'assignment_student');
    }

    public function submissions(): HasMany
    {
        return $this->hasMany(Submission::class);
    }

    public function reports(): HasMany
    {
        return $this->hasMany(Reports::class);
    }

    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }
}
