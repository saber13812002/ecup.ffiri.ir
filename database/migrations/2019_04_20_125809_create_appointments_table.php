<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('author_id')->nullable();
            $table->date('req_date');
            $table->datetime('req_time');
            $table->date('date_final')->nullable();
            $table->datetime('time_final')->nullable();
            $table->integer('clinic_id');
            $table->string('pushe_id')->nullable();
            $table->string('req_status')->nullable();
            $table->timestamps();
        });

        DB::table('appointments')->insert(
            [
                'author_id' => 1,
                'clinic_id' => 1,
                'req_date' => new DateTime(),
                'req_time' => new DateTime()
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
        Schema::dropIfExists('appointments');
    }
}
