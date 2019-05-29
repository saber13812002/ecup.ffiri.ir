<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClinicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinics', function (Blueprint $table) {
            $table->bigIncrements('id');
            //$table->integer('author_id');
            $table->integer('categury_id')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            //$table->string('slug')->unique();
            $table->string('logo')->nullable();
            //$table->integer('order')->default(1);
            //$table->text('meta_description')->nullable();
            //$table->text('meta_keywords')->nullable();
            $table->string('phone')->nullable();
            $table->string('mobile')->nullable();
            $table->string('address')->nullable();
            $table->string('geoLatitude')->nullable();
            $table->string('geoLongitude')->nullable();
            $table->string('images')->nullable();
            //$table->enum('status', ['PUBLISHED', 'DRAFT', 'PENDING'])->default('DRAFT');
            $table->timestamps();
        });


        DB::table('clinics')->insert(
            [
                'title' => 'کلینیک دندان دکتر کرمانی',
                'categury_id' => 1,
                'logo' => 'storage/clinics/logos/01.png',
                'address' => 'تهران خیابان شهید دکتر مفتح کوچه اول پلاک 10',
                'phone' => '+9821224523453',
                'mobile' => '+989196070718',
                'geoLatitude' => '35.7085023',
                'geoLongitude' => '51.4278007',
                'images' => 'storage/clinics/images/04.png|storage/clinics/images/05.png|storage/clinics/images/06.png'

            ]
        );

        DB::table('clinics')->insert(
            [
                'title' => 'کلینیک روانشناسی دکتر فتحی',
                'categury_id' => 2,
                'logo' => 'storage/clinics/logos/02.png',
                'address' => 'تهران خیابان فاطمی میدان گلها کلینیک روانشناسی دکتر فتحی',
                'phone' => '+9821223323435',
                'mobile' => '+989196070718',
                'geoLatitude' => '35.7221699',
                'geoLongitude' => '51.4095087',
                'images' => 'storage/clinics/images/01.png|storage/clinics/images/02.png|storage/clinics/images/03.png'
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
        Schema::dropIfExists('clinics');
    }
}
