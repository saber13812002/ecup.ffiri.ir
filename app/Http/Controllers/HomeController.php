<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Iframe;

class HomeController extends Controller
{

    private $news;
    private $iframe;

    public function __construct(News $news, Iframe $iframe)
    {

        $this->news = $news;
        $this->iframe = $iframe;
    }

    public function index()
    {
        //$news = $this->news->first();
        //return view('index', compact('news'));
        $news = News::all();
        $iframe = Iframe::all();
        return view('index', compact('news', 'iframe'));
        //return view('index');
    }
}
