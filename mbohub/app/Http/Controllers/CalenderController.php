<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CalenderController extends Controller
{
    public function calender()
    {
        return Inertia::render('Calender/CalenderPage');
    }
}