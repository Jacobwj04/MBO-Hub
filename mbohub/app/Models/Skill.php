<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'naam',
        'info',
        'quote',
        'leerling',
        'leerlingFoto',
    ];
}
