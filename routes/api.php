<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::any('v1/otp1/', array('middleware' => 'cors', 'uses' => 'OtpController@otp1'));
// Route::get('v1/otp11/', array('middleware' => 'cors', 'uses' => 'OtpController@otp11get'));
// Route::post('v1/requestOtp/', 'OtpController@otp1');
//Route::get('v1/otptest2/', array('middleware' => 'cors', 'uses' => 'OtpController@test2'));

Route::any('v1/otp2/', array('middleware' => 'cors', 'uses' => 'OtpController@otp2'));
// Route::get('v1/otp22/{mobile}/{code}', array('middleware' => 'cors', 'uses' => 'OtpController@otp22get'));
// Route::post('v1/verifyOtp/', 'OtpController@otp2');

Route::any('v1/info/me', array('middleware' => 'cors', 'uses' => 'InfoController@me'));

Route::any('v1/pay', array('middleware' => 'cors', 'uses' => 'InfoController@pay'));

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get('v1/user/', 'UserController@getAuthenticatedUser');
    Route::get('v1/closed/', 'DataController@closed');

});
