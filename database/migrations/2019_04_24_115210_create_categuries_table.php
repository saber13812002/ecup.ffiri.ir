<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCateguriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categuries', function (Blueprint $table) {
            $table->increments('id');
            //$table->integer('author_id');
            $table->integer('parent_id')->unsigned()->nullable()->default(null);
            //$table->foreign('parent_id')->references('id')->on('categuries')->onUpdate('cascade')->onDelete('set null');
            //$table->integer('order')->default(1);
            $table->string('title');
            //$table->string('slug')->unique();
            $table->string('icon')->nullable();
            $table->boolean('hasChild')->default(0);
            //$table->enum('status', ['PUBLISHED', 'DRAFT', 'PENDING'])->default('DRAFT');
            $table->timestamps();
        });

        DB::table('categuries')->insert(
            [
                'title' => 'دندانپزشکی',
                'icon' => 'storage/categories/icons/001-tooth.png'
            ]
        );

        DB::table('categuries')->insert(
            [
                'title' => 'سلامتی',
                'icon' => 'storage/categories/icons/002-health.png'
            ]
        );

        DB::table('categuries')->insert(
            [
                'title' => 'چشم پزشکی',
                'icon' => 'storage/categories/icons/002-view.png'
            ]
        );

        DB::table('categuries')->insert(
            [
                'title' => 'مغز و اعصاب',
                'icon' => 'storage/categories/icons/003-brain.png'
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categuries');
    }
}
