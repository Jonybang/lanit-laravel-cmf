<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contexts', function (Blueprint $table) {
            $table->increments('id');

            $table->string('key');
            $table->string('name')->nullable();
            $table->text('description')->nullable();

            $table->string('role')->nullable();

            $table->integer('index')->nullable();

            $table->boolean('is_hide')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('contexts');
    }
}
