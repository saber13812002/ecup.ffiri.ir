<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCliniccategoryView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW clinic_category_views
            AS
            SELECT
                clinics.id,
                clinics.title,
                clinics.logo,
                clinics.address,
                categuries.id AS categury_id,
                categuries.title AS categoryTitle
            FROM
                clinics
                LEFT JOIN categuries ON clinics.categury_id = categuries.id;
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS clinic_category_views');

    }
}
