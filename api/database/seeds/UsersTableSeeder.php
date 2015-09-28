<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder {
  public function run() {
    $faker = Faker::create();
    $u = User::create([
      'email' => $faker->email,
      'username' => $faker->username,
      'password' => Hash::make('test')
    ]);
    echo $u->email . "\n";
  }
}
