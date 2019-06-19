<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Iframe;
use App\Rule;
use App\Game;
use App\Statistic;

class HomeController extends Controller
{

    private $news;
    private $iframes;
    private $rules;
    private $games;
    private $stats;

    public function __construct(News $news, Iframe $iframes, Rule $rules, Game $games, Statistic $stats)
    {

        $this->news = $news;
        $this->iframes = $iframes;
        $this->rules = $rules;
        $this->games = $games;
        $this->stats = $stats;
    }

    public function index()
    {
        //$news = $this->news->first();
        //return view('index', compact('news'));
        $news = News::all();
        $iframes = Iframe::all();
        $rules = Rule::all();
        $games = Game::all();
        $stats = Statistic::all();
        return view('index', compact('news', 'iframes', 'rules', 'games', 'stats'));
        //return view('index');
    }
}
