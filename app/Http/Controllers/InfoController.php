<?php

namespace App\Http\Controllers;

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
}
