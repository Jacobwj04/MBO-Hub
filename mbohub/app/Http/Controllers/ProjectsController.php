<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function projects()
    {
        $projects = Project::all();
        return Inertia::render('Projects/Projects', ['projects' => $projects]);
    }

    public function project(Project $project)
    {
        return Inertia::render('Projects/Project', ['project' => $project]);
    }
}
