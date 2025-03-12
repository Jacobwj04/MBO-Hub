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
use Inertia\Inertia;

Route::get('/', function () {
    $calender = Calender::all();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'calenders' => $calender,
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
Route::post('/', [CalenderController::class, 'indexComponet'])->name('calender.indexComponet');

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
