<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/reg', function () {
    return File::get(public_path() . '/app/index.html');
});

Route::get('/payment', 'BankController@payment');


Route::any('/verifypayment', 'BankController@verifypayment');
//Route::get('/verifypayment', 'BankController@verifypayment');
//Route::post('/verifypayment', 'BankController@verifypayment');
