<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CalenderController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function ()
	{
		return Inertia::render('Welcome', [
			'canLogin'       => Route::has('login'),
			'canRegister'    => Route::has('register'),
			'laravelVersion' => Application::VERSION,
			'phpVersion'     => PHP_VERSION,
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

Route::resources([
	'/projects' => ProjectsController::class
]);

Route::get('/calender', [CalenderController::class, 'calender'])->name('calender.calender');

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
