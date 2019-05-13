<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SmsController extends Controller
{
    //
    public function send($mobile_number, $rand_no)
    {
        $curl = curl_init();
        //echo $recipient_no;echo $rand_no;
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.kavenegar.com/v1/4F6A4449587362356C7538614F6A7954535475695A513D3D/verify/lookup.jso",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            //CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"receptor\"\r\n\r\n" . $recipient_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" . $rand_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"template\"\r\n\r\nBerimBasketVerificationCode\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nsms\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
            CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"receptor\"\r\n\r\n" . $mobile_number . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" . $rand_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"template\"\r\n\r\nFifaVerificationCode\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nsms\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
            //CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"receptor\"\r\n\r\n" . $recipient_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" . $rand_no . "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"template\"\r\n\r\nMasjedCloobVerificationCode\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nsms\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                "postman-token: c19618a1-fe23-69ea-de69-be1eedc13cfe",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        //$err = false;

        curl_close($curl);

        if ($err) {
            //echo "cURL Error #:" . $err;
            //TODO: send error or  log or telegram or email or all
            return false;
        } else {
            //echo $response;
            //TODO: send error or  log or telegram or email or all
            return true;
        }
    }
}
