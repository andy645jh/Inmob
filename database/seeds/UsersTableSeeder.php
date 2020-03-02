<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name'=>'elkin',                
                'email'=>'elkin@gmail.com', 
                'auth_token'=>'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC91c2VyXC9sb2dpbiIsImlhdCI6MTU4MzExNzM2NiwiZXhwIjoxNTgzMTIwOTY2LCJuYmYiOjE1ODMxMTczNjYsImp0aSI6InMyRE5NVGNNYjRBTFVaMkkiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.kwAfiWyKiFI5arwYFtl2cg_i5O-nx8zyxaMvrdRakCg',
                'password'=>Hash::make('123456'),
            ],            
        ]); 
    }
}
