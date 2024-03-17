<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Permission\Traits\HasRoles;

class Teacher extends Model
{
    use HasFactory, HasRoles;

    protected $fillable = [
        'name',
        'address',
        'subject_id',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function subject(): HasMany
    {
        return $this->hasMany(Subject::class);
    }
}
