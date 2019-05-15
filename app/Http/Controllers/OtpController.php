<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Otp;
use App\User;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Illuminate\Support\Facades\Input;

class OtpController extends Controller
{
    private $otpModel;
    private $success;
    private $notexisttokenhere;
    private $incorrecttoken;

    public function __construct(Otp $otpModel)
    {
        $this->otpModel = $otpModel;
        $this->success = array('status' => 200, 'msg' => "ok");
        $this->notexisttokenhere = array('status' => 310, 'msg' => "not exist token for this phone please request new verification code");
        $this->incorrecttoken = array('status' => 310, 'msg' => "incorrect verification code");
    }

    public function otp1(Request $request)
    {
        $phone = $request['mobile'];

        $rand_no = 0;
        $len = strlen($phone);

        if ($len >= 10) {
            $phone = $this->right10($phone);
        }

        foreach (Otp::where('mobile_number', $phone)->orderBy('created_at', 'desc')->take(1)->cursor() as $otp) {
            if ($otp->verification_code > 0) {
                $rand_no = $otp->verification_code;
            }
            //echo $otp->verification_code;
        }

        if ($rand_no) {

            //app('App\Http\Controllers\SmsController')->send($phone, $rand_no);
        } else {
            $rand_no = rand(10000, 99999);
            $otp1 = new Otp;
            $otp1->mobile_number = $phone;
            $otp1->verification_code = $rand_no;
            $otp1->verified = 0;
            $otp1->save();
            //echo $rand_no;
            //app('App\Http\Controllers\SmsController')->send($phone, $rand_no);
        }
        return json_encode($this->success);
    }


    public function otp2(Request $request)
    {
        $phone = $request['phone'];
        $code = $request['code'];

        $exist = 0;
        $correctToken = 0;

        $len = strlen($phone);

        if ($len >= 10) {
            $phone = $this->right10($phone);
        }

        foreach (Otp::where('mobile_number', $phone)->where('verification_code', $code)->where('verified', 0)->orderBy('created_at', 'desc')->take(1)->cursor() as $otp) {
            $exist = 1;
            if ($otp->verification_code == $code) {
                $correctToken = 1;
            }
        }

        if ($exist) {
            if ($correctToken) {
                $username = "user_" . MD5($phone);
                $password = MD5($code);
                $email = $username . "@berimbasket.ir";
                //check user exist
                if (User::where('email', '=', $email)->exists()) {

                    $credentials = array(
                        'email' => $email,
                        'password' => $password,
                    );

                    try {
                        if (!$token = JWTAuth::attempt($credentials)) {
                            return response()->json(['error' => 'invalid_credentials'], 400);
                        }
                    } catch (JWTException $e) {
                        return response()->json(['error' => 'could_not_create_token'], 500);
                    }

                    $usr = [
                        'name' => $username,
                        'email' => $email,
                        'password' => Hash::make($password),
                    ];

                    return response()->json(compact('usr', 'token'), 201);

                }
                //not exist sigup
                else {
                    $user = User::create([
                        'name' => $username,
                        'email' => $email,
                        'password' => Hash::make($password),
                    ]);


                    $usr = [
                        'name' => $username,
                        'email' => $email,
                        'password' => Hash::make($password),
                    ];

                    $token = JWTAuth::fromUser($user);
                    //TODO verified = 1
                    return response()->json(compact('usr', 'token'), 201);
                }
                return json_encode($this->success);
            } else {
                return json_encode($this->incorrecttoken);
            }
        } else {
            return json_encode($this->notexisttokenhere);
        }
    }


    private function right10($recipient_no)
    {
        $len = strlen($recipient_no);

        if ($len >= 10) {
            $recipient_no = substr($recipient_no, $len - 10, $len);
        }

        return $recipient_no;
    }
}
