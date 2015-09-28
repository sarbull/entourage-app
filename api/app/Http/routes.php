<?php

$app->get('/', function () use ($app) {
    return $app->welcome();
});

$app->get('users', 'UsersController@index');
$app->get('users/{id}', 'UsersController@show');
$app->post('users', 'UsersController@store');
$app->delete('users/{id}', 'UsersController@destroy');
