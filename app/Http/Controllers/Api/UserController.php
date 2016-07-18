<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class UserController extends ApiController
{
    public function index()
    {
        $data = [];
        foreach(User::all() as $log){
            $log_data = $log->toArray();
            $log_data['logable_name'] = $log->logable ? $log->logable->name : '';
            $data[] = $log_data;
        }

        return $data;
    }
    public function show($id)
    {
        return User::find($id)->toArray();
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $obj = User::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();

        if(isset($data['password']) && $data['password'])
            $data['password'] = bcrypt($data['password']);

        $obj = User::find($data['id']);
        $is_saved = $obj->update($data);

        if($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj;
    }
    public function destroy($id)
    {
        $obj = User::find($id);
        $is_destroyed = User::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
