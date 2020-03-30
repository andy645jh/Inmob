<?php

use Illuminate\Database\Seeder;

class EstateTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('estate_type')->insert([
            [
                'name'=>'Apartamento',                
            ],
            [
                'name'=>'Apartaestudio',                
            ],
            [
                'name'=>'Casa',                
            ],            
            [
                'name'=>'Habitacion',                
            ], 
            [
                'name'=>'Local',                
            ],           
            [
                'name'=>'Lote',                
            ]
        ]);

        /*
            $table->bigIncrements('id');
            $table->string('name');
        */
    }
}
