<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Schedules extends Model
{
    use HasFactory;

    protected $table = 'schedules';

    protected $fillable = [
        'class_id',
        'teacher_id',
        'day',
        'start_time',
        'end_time',
    ];

    public function classes(): BelongsTo
    {
        return $this->belongsTo(Classes::class);
    }

    public function teacher(): BelongsTo
    {
        return $this->classes->teacher();
    }
}
