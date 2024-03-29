<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Permission\Traits\HasRoles;

class Student extends Model
{
    use HasFactory, HasRoles;

    protected $fillable = [
        'name',
        'address',
        'date_of_birth',
        'class_id',
        'user_id',
    ];

    public function classes(): HasMany
    {
        return $this->hasMany(Classes::class, 'enrollments');
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

    public function parents(): BelongsTo
    {
        return $this->belongsTo(Parents::class);
    }

    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }
}
