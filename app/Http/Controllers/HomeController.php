<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Iframe;
use App\Rule;
use App\Game;

class HomeController extends Controller
{

    private $news;
    private $iframes;
    private $rules;
    private $games;

    public function __construct(News $news, Iframe $iframes, Rule $rules, Game $games)
    {

        $this->news = $news;
        $this->iframes = $iframes;
        $this->rules = $rules;
        $this->games = $games;
    }

    public function index()
    {
        //$news = $this->news->first();
        //return view('index', compact('news'));
        $news = News::all();
        $iframes = Iframe::all();
        $rules = Rule::all();
        $games = Game::all();
        return view('index', compact('news', 'iframes', 'rules', 'games'));
        //return view('index');
    }
}
