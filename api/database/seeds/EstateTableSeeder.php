<?php

use Illuminate\Database\Seeder;

class EstateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('estate')->insert([
            [
                'description'=>'Descripcion 1',
                'price'=>250000,
                'admin_price'=>150000,
                'rooms'=>3,
                'garage'=>false,
                'parkin_lot'=>false,
                'operation'=>0,
                'meters'=>30,
                'estate_type_id'=>1
            ],
            [
                'description'=>'Descripcion 2',
                'price'=>550000,
                'admin_price'=>90000,
                'rooms'=>5,
                'garage'=>true,
                'parkin_lot'=>false,
                'operation'=>1,
                'meters'=>60,
                'estate_type_id'=>2
            ]
        ]);

        /*
        $table->bigIncrements('id');
            $table->text('description');
            $table->integer('price');
            $table->integer('admin_price');             
            $table->integer('rooms');            
            $table->integer('garage');
            $table->integer('parkin_lot');
            $table->integer('operation');
            $table->double('meters',10,2);   
            $table->unsignedBigInteger('estate_type_id');                        
            $table->foreign('estate_type_id')->references('id')->on('estate_type');            
            $table->timestamps();
             */
    }
}
