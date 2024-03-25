<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];


    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class);
    }


    public function classes(): HasMany
    {
        return $this->hasMany(Classes::class);
    }


    public function assignments(): HasMany
    {
        return $this->hasMany(Assignment::class);
    }
}
