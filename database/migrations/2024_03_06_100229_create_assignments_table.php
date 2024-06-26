<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->dateTime('deadline');
            $table->unsignedBigInteger('teacher_id')->nullable();
            $table->unsignedBigInteger('class_id')->nullable();
            $table->foreign('teacher_id')->references('id')->on('teachers')->onDelete('set null');
            $table->foreign('class_id')->references('id')->on('classes')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assignments');
    }
};
