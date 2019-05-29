<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW appointment_views
            AS
            SELECT
                appointments.*,
                clinics.title AS clinicTitle,
                clinics.logo AS clinicLogo
            FROM
            appointments
                LEFT JOIN clinics ON appointments.clinic_id = clinics.id;
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS appointment_views');
    }
}
