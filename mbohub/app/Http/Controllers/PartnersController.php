<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnersController extends Controller
{
    public function partners()
    {
        $partners = Partner::all();
        return Inertia::render('Partners/Partners', ['partners' => $partners]);
    }

    public function partner(Partner $partner)
    {
        return Inertia::render('Partners/Partners', ['partner' => $partner]);
    }
}
