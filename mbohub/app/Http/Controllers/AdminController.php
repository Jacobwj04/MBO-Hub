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
        return 'something';
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
        $validatedData = $this->validateData($request);
        $project = Project::create($validatedData);
        return redirect(route('projects.projects'));

        // return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return 'solo';
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
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);
        $data = $this->validateData($request);
        $project->update($data);
        $project->save();

        return redirect(route('projects.projects'));
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
            'naam' => 'required',
            'image' => 'required',
            'kermerk1' => 'required',
            'kenmerk2' => 'required',
            'kenmerk3' => 'required',
            'datum' => '',
            'locatie' => 'required',
            'info' => 'required'
        ]);

        return $data;
    }
}
