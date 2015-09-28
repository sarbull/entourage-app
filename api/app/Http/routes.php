<?php

$app->get('/', function () {
  return response()->json(["status" => "active"]);
});

$app->post('auth', 'AuthController@token');

$app->group(['prefix' => 'users', 'middleware' => 'jwt.auth'], function($app) {
  $app->get('', 'App\Http\Controllers\UsersController@index');
  $app->get('{id}', 'App\Http\Controllers\UsersController@show');
  $app->post('', 'App\Http\Controllers\UsersController@store');
  $app->delete('{id}', 'App\Http\Controllers\UsersController@destroy');
});
