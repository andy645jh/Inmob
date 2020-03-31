<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
});

Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them

    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');

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

    Route::get('questions', 'QuestionController@getAll');
    Route::get('question/{id}', 'QuestionController@get');
    Route::post('question/create', 'QuestionController@create');
    Route::put('question/{id}', 'QuestionController@update');
    Route::delete('question/{id}','QuestionController@delete');
});

