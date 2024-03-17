<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enrollments extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'class_id',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function classes(): BelongsTo
    {
        return $this->belongsTo(Classes::class);
    }
}
