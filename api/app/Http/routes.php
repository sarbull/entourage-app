<?php

$app->get('/', function () {
  return response()->json(["status" => "active"]);
});

$app->get('users', 'UsersController@index');
$app->get('users/{id}', 'UsersController@show');
$app->post('users', 'UsersController@store');
$app->delete('users/{id}', 'UsersController@destroy');
