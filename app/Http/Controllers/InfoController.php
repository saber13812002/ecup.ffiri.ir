<?php

namespace App\Http\Controllers;

use JWTAuth;

use Illuminate\Http\Request;

use App\Info;
use App\InfoView;

class InfoController extends Controller
{
    private $infoView;

    public function __construct(Info $info, InfoView $infoView)
    {
        $this->info = $info;
        $this->infoView = $infoView;
    }

    public function api(Request $request)
    {
        $info = $this->infoView->paginate(15);

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($info)
            ]);
        else
            return $info->toJson();
    }

    public function getbyid($id, Request $request)
    {
        $info = $this->infoView->whereId($id)->first();

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($info)
            ]);
        else
            return $info->toJson();
    }

    public function post(Request $request)
    {
        $inf = new Info;
        $inf->req_date = $request->req_date;
        $inf->req_time = $request->req_time;
        $inf->author_id = 1;
        $inf->save();

        if ($request->data)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($inf)
            ]);
        else
            return $inf->toJson();
    }

    public function me(Request $request)
    {

        $ids = Info::select('id')->where('email', '=', $request['email'])->first();


        if ($ids == null) {
            $inf = new Info;
            $inf->req_date = now();
            $inf->req_time = now();
            $inf->author_id = 1;

            $inf->save();
        }
        else if ($ids != null && ($request['name'] != null || $request['family'] != null)) {
            $inf = new Info;
            $inf->req_date = now();
            $inf->req_time = now();
            $inf->author_id = 1;

            $inf->email = $request['email'];
            $inf->name = $request['name'];
            $inf->family = $request['family'];

            $inf->save();
        } else {

            $inf = $this->info->where('email', '=', $request['email'])->first();
        }

        if (1 == 1)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($inf)
            ]);
        else
            return $inf->toJson();
    }

    public function save(Request $request)
    { }
}
