<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CalenderController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Calender;
use App\Models\Project;
use Inertia\Inertia;

Route::get('/', function () {
    $calender = Calender::all();

	$projects = Project::where(column: 'public', operator: 1)->where(column: 'highlighted', operator: 1)->get()->map(function ($project) {
        return [
            'id'         => $project->id,
            'title'      => $project->title,
            'summary'    => $project->summary,
            'location'   => $project->location,
            'text'       => $project->text,
            'datum'      => $project->datum ?? null,
            'image_url'  => Storage::url($project->image_path),
            'created_at' => $project->created_at,
        ];
    });
    if ($projects->isEmpty()) {
        $projects = Project::where(column: 'public', operator: 1)->get()->map(function ($project) {
            return [
                'id'         => $project->id,
                'title'      => $project->title,
                'summary'    => $project->summary,
                'location'   => $project->location,
                'text'       => $project->text,
                'datum'      => $project->datum ?? null,
                'image_url'  => Storage::url($project->image_path),
            ];
        });
    }

    \Illuminate\Support\Facades\Log::info(count($projects) );

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'calenders' => $calender,
		'projects' => $projects,
    ]);
});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function ()
	{
		Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
		Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
		Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
	});

Route::get('/about', [AboutController::class, 'about'])->name('about.about');

Route::get('/contact', [ContactController::class, 'contact'])->name('contact.contact');

Route::resource('/projects', ProjectsController::class);

Route::resource('/calender', CalenderController::class);

require __DIR__ . '/auth.php';


// Home *
// Projecten **
// Evenementen ***
// Over ons *
// Skills *
// Contact *
//
// Profile *

// * done
// ** needs doing
// *** being done
