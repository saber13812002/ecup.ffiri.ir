<?php

namespace App\Http\Controllers;

use JWTAuth;

use Illuminate\Http\Request;

use App\Info;
use App\InfoView;

use App\Pay;

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

        $inf = Info::where('token', $request['token'])->first();
        $inf->req_time = now();

        if ($request['name'])
            $inf->name = $request['name'];
        if ($request['family'])
            $inf->family = $request['family'];
        // if ($request['mobile'])
        //     $inf->mobile = $request['mobile'];
        if ($request['email'])
            $inf->email = $request['email'];
        if ($request['national_code'])
            $inf->national_code = $request['national_code'];
        if ($request['psn_id'])
            $inf->psn_id = $request['psn_id'];

        $inf->save();


        if (1 == 1)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($inf)
            ]);
        else
            return $inf->toJson();
    }
    public function pay(Request $request)
    {

        //$inf = Pay::where('token', $request['token'])->first();
        $p = Pay::where('author_id', $request['author_id'])->first();


        if (1 == 1)
            return response()->json([
                'code' => '200',
                'message' => 'success',
                "data" => array($p)
            ]);
        else
            return $p->toJson();
    }
}
