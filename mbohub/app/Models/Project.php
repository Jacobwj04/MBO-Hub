<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    use HasFactory;

    protected $generatedColumns = [
        'id',
        'created_at',
        'updated_at',
        ];

    protected $fillable = [
        'title',
        'summary',
        'location',
        'text',
        'highlight',
        'image',
    ];
}
