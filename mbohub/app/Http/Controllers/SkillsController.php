<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Inertia\Inertia;

class SkillsController extends Controller
{
    public function Skills()
    {
        $skills = Skill::all();
        return Inertia::render('Skills/Skills', ['skills' => $skills]);
    }


// note: not  currently in use

//    public function Skill(Skill $skill)
//    {
//        return Inertia::render('Skills/Skills', ['skill' => $skill]);
//    }
}
