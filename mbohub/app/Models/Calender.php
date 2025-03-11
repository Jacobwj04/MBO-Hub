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
        'date',
        'summary', 
        'location',
        'label', // Corrected from 'highlight' to match migration
        'hiddenText', // Replaced 'image' with filesystem path
        'link', // Added for MIME type
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