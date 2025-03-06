<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();

        return Inertia::render('Projects/Projects', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $project = \App\Models\Project::make();

        return $this->update($request, $project);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Projects/Projects', ['projects' => $id]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Projects/Edit', ['project' => $project]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, \App\Models\Project $project)
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect(route('projects.projects'));
    }
}
