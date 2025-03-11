<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Calender;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CalenderController extends Controller
{
    public function index()
    {
        return Inertia::render('Calender/CalenderPage');
    }

    public function create()
    {
        return Inertia::render('Calender/form');
    }

    public function store(Request $request)
    {
        $calender = Calender::make();

        return $this->update($request, $calender);
    }

    public function edit(int $id)
    {
        $calender = Calender::findOrFail($id);

        return Inertia::render('Calender/edit', ['calender' => $calender]);
    }

    public function update(Request $request, Calender $calender)
    {
        try {
            $validated = $request->validate([
                'title' => ['required', 'string', 'max:255'],
                'date' => ['required', 'string'],
                'summary' => ['required', 'string'],
                'location' => ['required', 'string'],
                'label' => ['required', 'string'],
                'hiddenText' => ['required', 'string'],
                'link' => ['required', 'string'],
            ]);


            // @note example code of how to log data in Laravel

            //            Log::info('Updating project ID: ' . $project->id . ', Saved image path: ' . $imagePath);

            $data = [
                'title' => $validated['title'],
                'date' => $validated['date'],
                'summary' => $validated['summary'],
                'location' => $validated['location'],
                'label' => $validated['label'],
                'hiddenText' => $validated['hiddenText'],
                'link' => $validated['link'],
            ];

            $calender->forceFill($data);
            $calender->save();

            return response()->json([
                'message' => 'Calender updated successfully',
            ], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            Log::error('Update error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return response()->json([
                'message' => 'An error occurred',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}