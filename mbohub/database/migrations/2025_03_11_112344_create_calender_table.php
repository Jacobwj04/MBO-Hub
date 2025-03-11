<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalenderTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('calender');

        Schema::create('calender', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->date('date');
            $table->text('summary');
            $table->string('location', 255);
            $table->string('label', 255);
            $table->string('hiddenText', 255);
            $table->string('link', 255);
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('created_at')->useCurrent();
        });

        if (DB::getDriverName() === 'sqlite') {
            DB::statement('
                CREATE TRIGGER update_calander_updated_at
                AFTER UPDATE ON calender
                FOR EACH ROW
                BEGIN
                    UPDATE calender
                    SET updated_at = CURRENT_TIMESTAMP
                    WHERE id = OLD.id;
                END;
            ');
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calender');
    }
};
