<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pay;
//use Gateway\Mellat;

class BankController extends Controller
{
    public function payment(Request $request)
    {
        try {

            $gateway = \Gateway::make(new \Mellat());

            $gateway
                ->price(1000)
                // setShipmentPrice(10) // optional - just for paypal
                // setProductName("My Product") // optional - just for paypal
                ->ready();

            $refId =  $gateway->refId(); // شماره ارجاع بانک
            $transId = $gateway->transactionId(); // شماره تراکنش

            $gateway->setCallback(url('/verify' . '/' . $transId . '/' . $refId)); //You can also change the callback


            // در اینجا
            //  شماره تراکنش  بانک را با توجه به نوع ساختار دیتابیس تان
            //  در جداول مورد نیاز و بسته به نیاز سیستم تان
            // ذخیره کنید .

            $pay = Pay::where('author_id', $request['author_id'])->first();

            $pay->refId = $refId;
            $pay->transId = $transId;
            $pay->result = "GoToPay";
            $pay->save();

            return $gateway->redirect();
        } catch (\Exception $e) {

            echo $e->getMessage();
        }
    }

    public function verify(Request $request)
    {
        try {

            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

            $pay = Pay::where('refId', $refId)->first();
            $pay->trackingCode = $trackingCode;
            $pay->cardNumber = $cardNumber;
            $pay->result = "Payed";
            $pay->save();



            // تراکنش با موفقیت سمت بانک تایید گردید
            // در این مرحله عملیات خرید کاربر را تکمیل میکنیم

        } catch (\Larautility\Gateway\Exceptions\RetryException $e) {

            // تراکنش قبلا سمت بانک تاییده شده است و
            // کاربر احتمالا صفحه را مجددا رفرش کرده است
            // لذا تنها فاکتور خرید قبل را مجدد به کاربر نمایش میدهیم

            echo $e->getMessage() . "<br>";
        } catch (\Exception $e) {

            // نمایش خطای بانک
            echo $e->getMessage();
        }
    }
}
