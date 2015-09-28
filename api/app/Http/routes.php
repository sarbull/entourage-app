<?php

$app->get('/', function () {
  return response()->json(["status" => "active"]);
});

$app->post('auth/login', 'AuthController@postLogin');

$app->group(['prefix' => 'users', 'middleware' => 'jwt.auth'], function($app) {
  $app->get('', 'UsersController@index');
  $app->get('{id}', 'UsersController@show');
  $app->post('', 'UsersController@store');
  $app->delete('{id}', 'UsersController@destroy');
});
