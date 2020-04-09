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

    Route::get('estate_type', 'EstateTypesController@getAll');
    Route::get('estate_type/{id}', 'EstateTypesController@get');
    Route::post('estate_type/create', 'EstateTypesController@create');
    Route::put('estate_type/{id}', 'EstateTypesController@update');
    Route::delete('estate_type/{id}','EstateTypesController@delete');

    Route::get('estate', 'EstateController@getAll');
    Route::get('estate/search/{word}', 'EstateController@search');
    Route::get('estate/{id}', 'EstateController@get');
    Route::put('estate/create', 'EstateController@create');
    Route::put('estate/{id}', 'EstateController@update');
    Route::delete('estate/{id}','EstateController@delete');

    Route::get('question', 'QuestionController@getAll');
    Route::get('{id}/question', 'QuestionController@getByParent');
    Route::get('question/{id}', 'QuestionController@get');
    Route::put('question/create', 'QuestionController@create');
    Route::put('question/{id}', 'QuestionController@update');
    Route::delete('question/{id}','QuestionController@delete');
});

