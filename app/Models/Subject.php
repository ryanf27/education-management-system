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


    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(Classes::class);
    }


    public function assignments(): hasMany
    {
        return $this->hasMany(Assignment::class);
    }
}
