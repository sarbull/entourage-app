<?php namespace App\Http\Controllers;

use App\Http\Controllers\ApiController;
use App\Models\User;

class UsersController extends ApiController {

    public function index() {
        $users = factory('App\Models\User', 5)->make();
        return response()->json($users);
    }

    public function show($id) {
        $user = factory('App\Models\User')->make();
        return response()->json($user);
    }

    public function store(Request $request) {
        $data = $request->input('user');
        $user = factory('App\Models\User')->make($data);
        return response()->json($user);
    }

    public function update(Request $request, $id) {
        $data = $request->input('user');
        $user = factory('App\Models\User')->make($data);
        return response()->json($user);
    }

    public function destroy($id) {
        $user = factory('App\Models\User')->make();
        $user->delete();
        return response(NULL);
    }
}
