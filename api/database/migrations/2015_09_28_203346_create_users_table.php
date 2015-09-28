<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {
    public function up() {
        Schema::create('users', function(Blueprint $table) {
            $table->increments('id');
            $table->string('username')->default(NULL);
            $table->string('email')->default(NULL);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::drop('users');
    }
}
