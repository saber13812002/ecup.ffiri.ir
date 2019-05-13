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

Route::middleware('auth:api')->get('v1//user/', function (Request $request) {
    return $request->user();
});

Route::post('v1/register/', 'UserController@register');
Route::post('v1/login/', 'UserController@authenticate');
Route::get('v1/open/', 'DataController@open');


Route::get('v1/category/', 'CateguryController@api');
Route::get('v1/category/{id}', 'CateguryController@getbyid');


Route::get('v1/clinic/', 'ClinicController@api');
Route::get('v1/clinic/{id}', 'ClinicController@getbyid');
Route::get('v1/search/clinic/', 'ClinicController@search');


Route::get('v1/map/', 'ClinicController@mapapi');
Route::get('v1/map/{id}', 'ClinicController@mapgetbyid');


Route::post('v1/otp1/', 'OtpController@otp1');
Route::post('v1/requestOtp/', 'OtpController@otp1');

Route::post('v1/otp2/', 'OtpController@otp2');
Route::post('v1/verifyOtp/', 'OtpController@otp2');

Route::get('v1/info/', 'InfoController@api');
Route::get('v1/info/{id}', 'InfoController@getbyid');

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get('v1/user/', 'UserController@getAuthenticatedUser');
    Route::get('v1/closed/', 'DataController@closed');


    Route::get('v1/appointment/', 'AppointmentController@api');
    Route::get('v1/appointment/{id}', 'AppointmentController@getbyid');
    Route::post('v1/appointment/', 'AppointmentController@post');

    // Route::get('v1/info/', 'InfoController@api');
    // Route::get('v1/info/{id}', 'InfoController@getbyid');
    Route::post('v1/info/', 'InfoController@post');
});
