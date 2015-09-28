<?php

namespace App\Http\Controllers;

use App\Models\User;

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

    public function store(Request $request) {
        $data = $request->input('user');
        $user = User::create($data);
        return response()->json($user);
    }

    public function update(Request $request, $id) {
        $user    = User::find($id);
        $updated = $request->input('user');
        $user->update($updated_user);
        return response()->json($user->toJson());
    }

    public function destroy($id) {
        $user = User::find($id);
        $user->delete();
    }
}
