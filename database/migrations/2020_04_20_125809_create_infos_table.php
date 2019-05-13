<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('author_id')->nullable();

            $table->string('name')->nullable();
            $table->string('family')->nullable();
            $table->string('email')->nullable();
            $table->string('mobile')->nullable();
            $table->string('national_code')->nullable();
            $table->string('psn_id')->nullable();

            $table->date('req_date');
            $table->datetime('req_time');
            $table->string('req_status')->nullable();
            $table->timestamps();
        });

        DB::table('infos')->insert(
            [
                'author_id' => 1,

                'name'=>'saber',
                'family'=>'taba',
                'email'=>'saber@taba.ir',
                'mobile'=>'9196070718',
                'national_code'=>'0059449047',
                'psn_id'=>'ASDF76786',

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
        Schema::dropIfExists('infos');
    }
}
