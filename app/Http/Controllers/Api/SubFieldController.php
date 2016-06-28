<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\SubField;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubFieldController extends Controller
{
    public function index(Request $request)
    {
        $template_id = $request->input('template_id');
        if($template_id)
            $list = \App\Template::find($template_id)->sub_fields;
        else
            $list = SubField::all();

        return Response::json(
            $list->toArray(),
            200
        );
    }
    public function show($id)
    {
        $sub_field_data = SubField::find($id)->toArray();
        $sub_field_data['templates_ids'] = $sub_field_data->templates_ids;

        return Response::json(
            $sub_field_data,
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();

        $sub_field = SubField::create($data);
        if(isset($data['templates_ids'])){
            $sub_field->templates_ids = $data['templates_ids'];
            $sub_field->save();
        }
        return Response::json(
            $sub_field->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = SubField::find($data['id'])->update($data);

        $sub_field = SubField::find($data['id']);
        if(isset($data['templates_ids'])){
            $sub_field->templates_ids = $data['templates_ids'];
            $sub_field->save();
        }

        return Response::json(
            $sub_field->toArray(),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = SubField::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}