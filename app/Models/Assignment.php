<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'deadline',
        'subject_id',
        'teacher_id',
    ];

    public function subject(): belongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function teacher(): belongsTo
    {
        return $this->belongsTo(Teacher::class);
    }

    public function students(): belongsToMany
    {
        return $this->belongsToMany(Student::class, 'assignment_student');
    }

    public function submissions(): hasMany
    {
        return $this->hasMany(Submission::class);
    }
}
