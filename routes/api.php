<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('estate_types', 'EstateTypesController@getAll');
Route::get('estate_types/{id}', 'EstateTypesController@get');
Route::post('estate_types/create', 'EstateTypesController@create');
Route::put('estate_types/{id}', 'EstateTypesController@update');
Route::delete('estate_types/{id}','EstateTypesController@delete');

Route::get('estate', 'EstateController@getAll');
Route::get('estate/{id}', 'EstateController@get');
Route::post('estate/create', 'EstateController@create');
Route::put('estate/{id}', 'EstateController@update');
Route::delete('estate/{id}','EstateController@delete');