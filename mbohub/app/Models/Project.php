<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    use HasFactory;

    protected $fillable = [
        'naam',
        'image',
        'kermerk1',
        'kenmerk2',
        'kenmerk3',
        'datum',
        'locatie',
        'info'
    ];
}
