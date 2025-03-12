<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('projects');

        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->text('summary');
            $table->string('image_path');
            $table->text('text');
            $table->integer('highlighted')->default(0);
            $table->integer('public')->default(0);
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('created_at')->useCurrent();
        });

        // SQLite-specific trigger for updating updated_at
        if (DB::getDriverName() === 'sqlite') {
            DB::statement('
                CREATE TRIGGER update_projects_updated_at
                AFTER UPDATE ON projects
                FOR EACH ROW
                BEGIN
                    UPDATE projects
                    SET updated_at = CURRENT_TIMESTAMP
                    WHERE id = OLD.id;
                END;
            ');
        }
    }

    public function down()
    {
        if (DB::getDriverName() === 'sqlite') {
            DB::statement('DROP TRIGGER IF EXISTS update_projects_updated_at');
        }

        Schema::dropIfExists('projects');
    }
}
