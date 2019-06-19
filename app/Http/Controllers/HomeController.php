<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class HomeController extends Controller
{

    private $news;

    public function __construct(News $news)
    {

        $this->news = $news;
    }

    public function index()
    {
        //$news = $this->news->first();
        //return view('index', compact('news'));
        $news = News::all();
        return view('index', compact('news'));
        //return view('index');
    }
}
