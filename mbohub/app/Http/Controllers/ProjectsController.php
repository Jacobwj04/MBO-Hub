<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
	    $projects = Project::all();

	    return Inertia::render('Projects/Projects', ['projects' => $projects]);
    }

    public function show(int $id){
        $projects = Project::findOrFail($id);

        return Inertia::render('Projects/Project', ['project' => $projects]);
    }
}
