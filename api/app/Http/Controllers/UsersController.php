<?php

namespace App\Http\Controllers;

use App\User;

class UsersController extends Controller {

    public function index() {
        $users = [
            ['id' => 123, 'email' => 'email1@test.com', 'username' => 'email1'],
            ['id' => 124, 'email' => 'email2@test.com', 'username' => 'email2']
        ];
        return response()->json($users);
    }

    public function show($id) {
        $user = [
            'id' => 123, 'email' => 'email1@test.com', 'username' => 'email1'
        ];
        return response()->json($user);
    }
}
