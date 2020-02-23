<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estate', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('description');
            $table->integer('price');
            $table->integer('admin_price');
            $table->double('meters',10,2);    
            $table->integer('rooms',2);            
            $table->integer('garage',2);
            $table->integer('parkin_lot',2);
            $table->integer('operation');
            $table->unsignedBigInteger('estatus_type_id');            
            $table->unsignedBigInteger('slide_imgs_id');            
            $table->foreign('estatus_type_id')->references('id')->on('estatus_type');
            $table->foreign('slide_imgs_id')->references('id')->on('slide_imgs');
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
        Schema::dropIfExists('estate');
    }
}
