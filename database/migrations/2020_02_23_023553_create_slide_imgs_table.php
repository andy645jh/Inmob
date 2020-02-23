<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSlideImgsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slide_imgs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('url');
            $table->unsignedBigInteger('estate_id');
            $table->foreign('estate_id')->references('id')->on('estates');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('slide_imgs');
    }
}
