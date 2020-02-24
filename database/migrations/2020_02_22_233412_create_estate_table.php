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
            $table->integer('rooms');            
            $table->boolean('garage');
            $table->boolean('parkin_lot');
            $table->integer('operation');
            $table->double('meters',10,2);   
            $table->unsignedBigInteger('estate_type_id');                        
            $table->foreign('estate_type_id')->references('id')->on('estate_type');            
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
