<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMapView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW map_views
            AS
            SELECT
                clinics.id,
                clinics.title,
                clinics.logo,
                clinics.address,
                clinics.geoLatitude AS latitude,
                clinics.geoLongitude AS longitude,
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
        DB::statement('DROP VIEW IF EXISTS map_views');

    }
}
