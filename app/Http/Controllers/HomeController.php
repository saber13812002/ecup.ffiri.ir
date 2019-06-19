<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Iframe;
use App\Rule;

class HomeController extends Controller
{

    private $news;
    private $iframes;
    private $rules;

    public function __construct(News $news, Iframe $iframes, Rule $rules)
    {

        $this->news = $news;
        $this->iframes = $iframes;
        $this->rules = $rules;
    }

    public function index()
    {
        //$news = $this->news->first();
        //return view('index', compact('news'));
        $news = News::all();
        $iframes = Iframe::all();
        $rules = Rule::all();
        return view('index', compact('news', 'iframes', 'rules'));
        //return view('index');
    }
}
