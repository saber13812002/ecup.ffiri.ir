<!-- <%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="preview_dotnet_templates_with_out_masterpages_one_page_Scroll_nav_index" %> -->

{{-- @extends('themedata.layout') --}}

@section('content')

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>سایت فوتبال مجازی فدراسیون فوتبال</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/flexslider.css">
    <link rel="stylesheet" href="css/jquery.fancybox.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>
    <form id="form1" runat="server">
        <section class="banner" role="banner">

            <header id="header">
                <div class="header-content clearfix">
                    <a class="logo" href="#">
                        <img src="images/logo.png" alt=""></a>
                    <nav class="navigation" role="navigation">
                        <ul class="primary-nav">
                            <li><a href="#features">اخبار</a></li>
                            <li><a href="#works">گالری</a></li>
                            <li><a href="#teams">آمار بازی</a></li>
                            <li><a href="#testimonials">جدول مسابقات</a></li>
                            <li><a href="#download">قوانین</a></li>
                            <li><a href="/reg">ثبت نام</a></li>
                        </ul>
                    </nav>
                    <a href="#" class="nav-toggle">منو<span></span></a>
                </div>
                <!-- header content -->
            </header>
            <!-- header -->

            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="banner-text text-center">
                        <h1>سامانه فوتبال مجازی ایران</h1>
                        <h3>شما میتوانید در این سایت اطلاعات راجع به بازی ها را ملاحظه نمایید</h3>
                        <a href="/reg" class="btn btn-large">ورود</a> <a href="/reg" class="btn btn-large">ثبت نام</a>--%>
                    </div>
                    <!-- banner text -->
                </div>
            </div>
        </section>
        <!-- /banner -->

        <!-- features -->
        <section id="features" class="features section">
            <div class="container">
                <div class="row">
                    <div class="headingsyle">
                        <h1><span>اطلاعیه</span></h1>
                    </div>
                    <div class="col-md-12 col-sm-12 feature text-center">
                        {{-- <div class="feature-content">
                            <p class="info">
                                به اطلاع کلیه علاقه مندان و مخاطبان بازی های فوتبال می رساند ، کمیته فوتبال مجازی فدراسیون فوتبال جمهوری اسلامی ایران ، پس از پیگیری های لازم و ایجاد ارتباط با فدراسیون جهانی فوتبال فیفا و کنفدراسیون فوتبال آسیا و اخذ حمایت ها از این دو ارگان بین المللی جهت شرکت رسمی و ورود بازیکنان ایرانی به مسابقات جهانی و آسیایی ، از کلیه علاقه مندان و بازیکنان دعوت مینماید جهت ثبت نام و عضویت در باشگاه فوتبال الکترونیک فدراسیون فوتبال به آدرس پایگاه اطلاع رسانی ecup.ffiri.ir  مراجعه و اطلاعات لازم را وارد و فرم مربوطه را تکمیل نمایند. شایان ذکر است که اولین دوره مسابقات آنلاین فوتبال مجازی در بازی FIFA با عنوان جام رمضان در هفته آخر ماه مبارک رمضان و به مناسبت فرارسیدن عید سعید فطر برگزار خواهد شد. با توجه به آغاز به کار لیگ فوتبال مجازی فدراسیون فوتبال از ماه جاری، مسابقات لیگ به صورت دوره ای و دائمی در طول سال برگزار خواهد شد و در آینده نزدیک با رعایت و اجرای قوانین و مقررات فدراسیون جهانی فوتبال فیفا شرایط و امکان حضور منتخبان ایرانی در مسابقات جهانی فراهم خواهد شد. عضویت در باشگاه و دریافت کد رهگیری برای شرکت در تمام دوره ها و برنامه ها و مسابقات کمیته الزامی میباشد. همچنین پس از شروع مسابقات لیگ فوتبال مجازی، با مشارکت و همکاری سازمان لیگ فوتبال فدراسیون، در آینده ای نزدیک تیم های فوتبال مجازی برای هر شانزده تیم باشگاهی لیگ فوتبال کشورمان تشکیل خواهد شد. هر تیم باشگاه فوتبال کشورمان تا یازده بازیکن بازی FIFA را جذب خواهد کرد که به زودی نحوه انتخاب و عضویت در باشگاه های لیگ کشورمان به اطلاع عموم خواهد رسید.
                            </p>
                        </div> --}}
                        @foreach ($news as $new)
                            <div class="feature-content">
                                <p class="info" style="direction: rtl;">
                                    {{-- {{$new->title}} --}}
                                    {{$new->body}}
                                    {{-- <li><a href='/news/{{$new->slug}}'>متن کامل خبر</a></li> --}}
                                </p>
                            </div>
                        @endforeach
                    </div>
                    {{-- <div class="col-md-4 col-sm-6 feature text-center">
                        <span class="icon icon-desktop"></span>
                        <div class="feature-content">
                            <h5>پيروزى تيم ملى جوانان در اردوى اهواز</h5>
                            <p>
                                تيم ملى فوتبال جوانان در بازى تداركاتى مقابل تيم اميد نفت اهواز به برترى رسيد.
                            </p>

                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 feature text-center">
                        <span class="icon icon-lightbulb"></span>
                        <div class="feature-content">
                            <h5>پيروزى تيم ملى جوانان در اردوى اهواز</h5>
                            <p>
                                تيم ملى فوتبال جوانان در بازى تداركاتى مقابل تيم اميد نفت اهواز به برترى رسيد.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 feature text-center">
                        <span class="icon icon-genius"></span>
                        <div class="feature-content">
                            <h5>پيروزى تيم ملى جوانان در اردوى اهواز</h5>
                            <p>
                                تيم ملى فوتبال جوانان در بازى تداركاتى مقابل تيم اميد نفت اهواز به برترى رسيد.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 feature text-center">
                        <span class="icon icon-briefcase"></span>
                        <div class="feature-content">
                           <h5>پيروزى تيم ملى جوانان در اردوى اهواز</h5>
                            <p>
                                تيم ملى فوتبال جوانان در بازى تداركاتى مقابل تيم اميد نفت اهواز به برترى رسيد.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 feature text-center">
                        <span class="icon icon-download"></span>
                        <div class="feature-content">
                            <h5>پيروزى تيم ملى جوانان در اردوى اهواز</h5>
                            <p>
                                تيم ملى فوتبال جوانان در بازى تداركاتى مقابل تيم اميد نفت اهواز به برترى رسيد.
                            </p>
                        </div>
                    </div> --}}
                </div>
            </div>
        </section>
        <!-- /features -->

        <!-- tables -->
        <section id="tables" class="tables section no-padding">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="headingsyle">
                        <h1><span>جدول مسابقات</span></h1>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 table" style="    text-align: center;">

                        @foreach ($iframe as $ifram)
                            {{-- https://widget.toornament.com/tournaments/2491521708242829312/?_locale=en_US&theme= --}}
                            <iframe width="85%" height="360" src="{{$ifram->link}}" allowfullscreen frameborder="0"></iframe>

                        @endforeach
                    </div>
                </div>
            </div>
        </section>
        <!-- /tables -->

        <!-- testimonials -->
        <section id="download" class="section download">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="headingsyle">
                        <h1><span>قوانین</span></h1>
                    </div>
                </div>

                @foreach ($rules as $rule)

                    <div class="col-md-3 col-sm-6 feature text-center">
                        <div class="feature-content">
                            <h5>{{$rule->title}}</h5>
                            <p>
                            <a href="http://ecup.ffiri.ir/{{$rule->link}}" class="btn btn-large">دریافت</a>
                            </p>

                        </div>
                    </div>

                @endforeach

            </div>
        </section>
        <!-- download -->

        <!-- works -->
        <section id="works" class="works section no-padding">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="headingsyle">
                        <h1><span>گالری</span></h1>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-1.jpg" class="work-box">
                            <img src="images/work-1.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-2.jpg" class="work-box">
                            <img src="images/work-2.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-3.jpg" class="work-box">
                            <img src="images/work-3.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-4.jpg" class="work-box">
                            <img src="images/work-4.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-5.jpg" class="work-box">
                            <img src="images/work-5.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-6.jpg" class="work-box">
                            <img src="images/work-6.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-7.jpg" class="work-box">
                            <img src="images/work-7.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 work">
                        <a href="images/work-8.jpg" class="work-box">
                            <img src="images/work-8.jpg" alt="">
                            <div class="overlay">
                                <div class="overlay-caption">
                                    <h5>بازی پرسپولیس - استقلال</h5>
                                    <p>پاس گل رونالدو به چنگیز</p>
                                </div>
                            </div>
                            <!-- overlay -->
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- /works -->


        <!-- teams -->
        <section id="teams" class="section teams">
            <div class="container">
                <div class="row">
                    <div class="headingsyle">
                        <h1><span>آمار بازیها</span></h1>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="person">
                            <img src="images/team-1.jpg" alt="" class="img-responsive">
                            <div class="person-content">
                                <h4><strong>ناصر محمدخانی</strong></h4>
                                <h5 class="role"><strong>پرسپولیس - نوک حمله</strong></h5>
                                <p>10 گل زده<br />
                                    5 شوت</p>
                            </div>
                            <ul class="social-icons clearfix">
                            </ul>
                        </div>
                        <!-- person -->
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="person">
                            <img src="images/team-2.jpg" alt="" class="img-responsive">
                            <div class="person-content">
                                <h4><strong>ناصر محمدخانی</strong></h4>
                                <h5 class="role"><strong>پرسپولیس - نوک حمله</strong></h5>
                                <p>10 گل زده<br />
                                    5 شوت</p>
                            </div>
                            <ul class="social-icons clearfix">
                            </ul>
                        </div>
                        <!-- person -->
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="person">
                            <img src="images/team-3.jpg" alt="" class="img-responsive">
                            <div class="person-content">
                                <h4><strong>ناصر محمدخانی</strong></h4>
                                <h5 class="role"><strong>پرسپولیس - نوک حمله</strong></h5>
                                <p>10 گل زده<br />
                                    5 شوت</p>
                            </div>
                            <ul class="social-icons clearfix">
                            </ul>
                        </div>
                        <!-- person -->
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="person">
                            <img src="images/team-4.jpg" alt="" class="img-responsive">
                            <div class="person-content">
                                <h4><strong>ناصر محمدخانی</strong></h4>
                                <h5 class="role"><strong>پرسپولیس - نوک حمله</strong></h5>
                                <p>10 گل زده<br />
                                    5 شوت</p>
                            </div>
                            <ul class="social-icons clearfix">
                            </ul>
                        </div>
                        <!-- person -->
                    </div>
                </div>
            </div>
        </section>
        <!-- /teams -->

        <!-- testimonials -->
        <section id="testimonials" class="section testimonials no-padding">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="col-md-12">
                                    <img src="/images/table.jpg" class="thumbnail center-block"  />
                                </div>
                    <!-- <div class="flexslider">
                        <ul class="slides">
                            <li>
                                <div class="col-md-6">
                                    <div class="avatar">
                                        <img src="images/testimonial-1.jpg" alt="" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <blockquote>
                                        <p>
                                            "Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present......."
                                        </p>
                                        <cite class="author">- Bil Keane</cite>
                                    </blockquote>
                                </div>
                            </li>
                            <li>
                                <div class="col-md-6">
                                    <div class="avatar">
                                        <img src="images/testimonial-2.jpg" alt="" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <blockquote>
                                        <p>
                                            "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time........"
                                        </p>
                                        <cite class="author">= Steve Jobs....</cite>
                                    </blockquote>
                                </div>
                            </li>
                        </ul>
                    </div> -->
                    <!-- flexslider -->
                </div>
            </div>
        </section>
        <!-- testimonials -->


        <!-- download -->
        <section id="download" class="section download">
            <div class="container">
                <div class="col-md-8 col-md-offset-2 text-center">
                    <h3>قوانین</h3>
                    <p>برای دانلود قوانین بازی ها روی لینک زیر کلیک کنید</p>
                    <a href="/download/Legal.pdf" class="btn btn-large">دریافت قوانین</a>
                </div>
            </div>
        </section>
        <!-- /download -->

        <!-- faq-info -->
        <div id="faq-info" class="space100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 wow fadeInUp">
                        <img class="img-responsive" src="images/3.png" alt="">
                    </div>
                    <div class="col-md-6 wow fadeInDown" data-wow-delay="0.2s">
                        <h2>برنامه بازی ها</h2>
                        <p>
                            برای دریافت برنامه بازی ها روی لینک زیر کلیک کنید
                        </p>
                        <div class="download-button">
                            <a href="#download" class="btn btn-large"><strong>دریافت برنامه بازی ها</strong> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /faq-info -->

        <!-- Contact Form -->
        <section id="contact" class="space100">
            <div class="container">
                <div class="row">
                     <div class="headingsyle">
                        <h1><span>ثبت نام</span></h1>
                    </div>
                    <div class="text-center">
                        <h1>سامانه فوتبال مجازی ایران</h1>
                        <h3>شما میتوانید از طریق دکمه های زیر ثبت نام کنید</h3>
                        <a href="/reg" class="btn btn-large">ورود</a> <a href="/reg" class="btn btn-large">ثبت نام</a>--%>
                    </div>
                </div>
                <!-- ./end row -->
                <div class="row">
                    <div class="col-md-12">
                        <div id="main-contact-form" class="contact-form">
                            <!-- form  بخش ثبت نام رو در این قسمت کپی کن-->

                            <!-- ./form -->
                        </div>
                    </div>
                </div>
                <!-- ./end row -->
            </div>
        </section>
        <!-- End Contact Form -->


        <footer class="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="footer-col col-md-4">
                                <h5>ارتباط با ما</h5>
                                <p>شما می توانید از طریق آدرس ایمیل ir.ffiri@ecup با ما در تماس باشید</p>
                            </div>
                            <div class="footer-col col-md-4">

                            </div>
                            <div class="footer-col col-md-4">
                                <h5> درباره کمیته فوتبال مجازي</h5>
                                <p> درباره کمیته فوتبال مجازي درباره کمیته فوتبال مجازي درباره کمیته فوتبال مجازي درباره کمیته فوتبال مجازي درباره کمیته فوتبال مجازي</p>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- footer top -->
                <div class="footer-bottom">
                    <div class="container">
                        <div class="col-md-12">
                            <p>
                                تمام حقوق مادی و معنوی این سایت متعلق به فدراسیون فوتبال می باشد و استفاده از مطالب با ذکر منبع بلامانع است.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- footer -->




        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>        window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.flexslider-min.js"></script>
        <script src="js/jquery.fancybox.pack.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/retina.min.js"></script>
        <script src="js/modernizr.js"></script>
        <script src="js/main.js"></script>
    </form>
</body>
</html>
