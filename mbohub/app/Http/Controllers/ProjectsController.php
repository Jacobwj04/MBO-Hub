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

        return Inertia::render('Projects2/Projects', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Projects2/Form');
    }

    public function store(Request $request)
    {
        $project = \App\Models\Project::make();

        return $this->update($request, $project);
    }
    public function show(int $id)
    {
        $project = Project::findOrFail($id);

        return Inertia::render('Projects2/Project', ['project' => $project]);
    }

    public function edit(int $id)
    {
        $project = Project::findOrFail($id);

        return Inertia::render('Projects2/Edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => ['required', 'string'],
            'summary' => ['required', 'string'],
            'location' => ['required', 'string'],
            'text' => ['required', 'string'],
            'highlights'    => ['string'],
            'image'  => ['image'],
        ]);

        $project = $project->forceFill($validated);

        $project->save();

        return $this->show($project['id']);
    }

    public function destroy(int $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect(route('Projects2.projects'));
    }

}
