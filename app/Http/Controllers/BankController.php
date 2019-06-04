<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BankController extends Controller
{
    public function payment()
    {
        try {

            $gateway = \Gateway::mellat();

            $gateway
                ->price(1000)
                // setShipmentPrice(10) // optional - just for paypal
                // setProductName("My Product") // optional - just for paypal
                ->ready();

            $refId =  $gateway->refId(); // شماره ارجاع بانک
            $transID = $gateway->transactionId(); // شماره تراکنش

            $gateway->setCallback(url('/verify' . '/' . $transID . '/' . $refId)); //You can also change the callback


            // در اینجا
            //  شماره تراکنش  بانک را با توجه به نوع ساختار دیتابیس تان
            //  در جداول مورد نیاز و بسته به نیاز سیستم تان
            // ذخیره کنید .

            return $gateway->redirect();
        } catch (\Exception $e) {

            echo $e->getMessage();
        }
    }

    public function verify()
    {
        try {

            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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
