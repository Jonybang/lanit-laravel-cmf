<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplatesControllerActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tpls_ctrls_actions', function (Blueprint $table) {
            $table->integer('template_id')->unsigned()->index();
            $table->foreign('template_id')->references('id')->on('templates')->onDelete('cascade');

            $table->integer('controller_action_id')->unsigned()->index();
            $table->foreign('controller_action_id')->references('id')->on('controller_actions')->onDelete('cascade');

            $table->primary(['template_id', 'controller_action_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('tpls_ctrls_actions');
    }
}
