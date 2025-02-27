<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
        print_r($_POST);
        print_r($_FILES);
        $validatedData = $this->validateData($request);
        $project       = (new \App\Models\Project)->forcefill($validatedData)->save();

//        return redirect(route('projects.projects'));
    }

    /**
     * Display the specified resource.
     */
//    public function show(string $id)
//    {
//        return Inertia::render('Projects/Projects', ['projects' => $id]);
//    }

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
    public function update(request $request, string $id)
    {
        print_r($request);
        $project = Project::findOrFail($id);
        $data    = $this->validateData($request);
        $project->update($data);
        $project->save();

        return redirect(route('projects.index'));
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

    protected function validateData(Request $request)
    {
        $data = $request->validate([
            'title'    => 'required',
            'summary' => 'required',
            'location' => 'required',
            'text' => 'required',
            'highlights'    => '',
            'image'  => 'required',
        ]);

        return $data;
    }
}
