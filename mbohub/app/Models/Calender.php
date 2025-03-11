<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calender extends Model
{
    use HasFactory;

    /**
     * The columns that are auto-generated and should not be mass assignable.
     *
     * @var array
     */
    protected $generatedColumns = [
        'id',
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'summary',
        'location', // Added from migration
        'text',
        'highlights', // Corrected from 'highlight' to match migration
        'image_path', // Replaced 'image' with filesystem path
        'image_mime', // Added for MIME type
        'highlighted', // Added from migration
        'public', // Added from migration
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // Optionally hide image_path or image_mime if not needed in JSON responses
    ];

    /**
     * Get the URL of the project's image.
     *
     * @return string
     */
}