<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
        if (Auth::check()){
            $projects = Project::all()->map(function ($project) {
                return [
                    'id'         => $project->id,
                    'title'      => $project->title,
                    'summary'    => $project->summary,
                    'text'       => $project->text,
                    'highlights' => $project->highlights,
                    'datum'      => $project->datum ?? null,
                    'image_url'  => Storage::url($project->image_path),
                    'created_at' => $project->created_at,
                ];
            });
        } else{
            $projects = Project::where(column: 'public', operator: 1)->get()->map(function ($project) {
                return [
                    'id'         => $project->id,
                    'title'      => $project->title,
                    'summary'    => $project->summary,
                    'text'       => $project->text,
                    'highlights' => $project->highlights,
                    'datum'      => $project->datum ?? null,
                    'image_url'  => Storage::url($project->image_path),
                    'created_at' => $project->created_at,
                ];
            });
        }

        return Inertia::render('Projects2/Projects', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Projects2/Form');
    }

    public function store(Request $request)
    {
        $project = Project::make();

        return $this->update($request, $project);
    }
    public function edit(int $id)
    {
        $project = Project::findOrFail($id);

        return Inertia::render('Projects2/Edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        try
        {
            $public      = $request['public'] == 'on' ? 1 : 0;
            $highlighted = $request['highlighted'] == 'on' ? 1 : 0;
            $validated   = $request->validate([
                'title'      => ['required', 'string', 'max:255'],
                'summary'    => ['required', 'string'],
                'text'       => ['required', 'string'],
                'image'      => ['required', 'image', 'mimes:jpeg,png,jpg,svg', 'max:2048'],
                $public      => ['integer'],
                $highlighted => ['integer'],
            ]);



            $imageFile = $request->file('image');
            if (!$imageFile->isValid())
            {
                throw new \Exception('Invalid file upload: ' . $imageFile->getErrorMessage());
            }

            $fileName  = $project->id . '_' . time() . '.' . $imageFile->getClientOriginalExtension();
            $imagePath = $imageFile->storeAs('projects', $fileName, 'public');

            // @note example code of how to log data in Laravel

            // Log::info('Updating project ID: ' . $project->id . ', Saved image path: ' . $imagePath);

            $data = [
                'title'       => $validated['title'],
                'summary'     => $validated['summary'],
                'text'        => $validated['text'],
                'image_path'  => $imagePath,
                'public'      => $public,
                'highlighted' => $highlighted,
            ];

            $project->forceFill($data);
            $project->save();

            return response()->json([
                'message' => 'Project updated successfully',
            ], 200);
        }
        catch (\Illuminate\Validation\ValidationException $e)
        {
            return response()->json([
                'message' => 'Validation failed',
                'errors'  => $e->errors(),
            ], 422);
        }
        catch (\Exception $e)
        {
            Log::error('Update error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return response()->json([
                'message' => 'An error occurred',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy(int $id)
    {
        Project::findOrFail($id)->delete();

        return redirect('/');
    }

}
