<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    /**
     * Define relationship with the Teacher model.
     * A subject can be taught by many teachers.
     */
    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class);
    }


    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(Classes::class);
    }

    /**
     * Define relationship with the Assignment model.
     * A subject can have many assignments.
     */
    // public function assignments()
    // {
    //     return $this->hasMany(Assignment::class);
    // }
}
