<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function contact()
    {
        return Inertia::render('Contact/contactPage');
    }
}
