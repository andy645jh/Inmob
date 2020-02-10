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
            $table->unsignedBigInteger('operation_type_id');
            $table->unsignedBigInteger('estatus_type_id');
            $table->foreign('operation_type_id')->references('id')->on('operation_type');
            $table->foreign('estatus_type_id')->references('id')->on('estatus_type');
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
