const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles(['resources/zacson/css/flaticon.css',
    'resources/zacson/css/gijgo.css',
    'resources/zacson/css/animate.min.css',
    'resources/zacson/css/animated-headline.css',
    'resources/zacson/css/magnific-popup.css',
    'resources/zacson/css/fontawesome-all.min.css',
    'resources/zacson/css/themify-icons.css',
    'resources/zacson/css/slick.css',
    'resources/zacson/css/nice-select.css',
    'resources/zacson/css/style.css',],'public/css/app.css')
    .scripts(['resources/zacson/js/modernizr-3.5.0.min.js',
        'resources/zacson/js/jquery-1.12.4.min.js',
        'resources/zacson/js/popper.min.js',
        'resources/zacson/js/bootstrap.min.js',
        'resources/zacson/js/jquery.slicknav.min.js',
        'resources/zacson/js/owl.carousel.min.js',
        'resources/zacson/js/slick.min.js',
        'resources/zacson/js/wow.min.js',
        'resources/zacson/js/animated.headline.js',
        'resources/zacson/js/jquery.magnific-popup.js',
        'resources/zacson/js/gijgo.min.js',
        'resources/zacson/js/jquery.nice-select.min.js',
        'resources/zacson/js/jquery.sticky.js',
        'resources/zacson/js/jquery.counterup.min.js',
        'resources/zacson/js/waypoints.min.js',
        'resources/zacson/js/jquery.countdown.min.js',
        'resources/zacson/js/hover-direction-snake.min.js',
        'resources/zacson/js/contact.js',
        'resources/zacson/js/jquery.form.js',
        'resources/zacson/js/jquery.validate.min.js',
        'resources/zacson/js/mail-script.js',
        'resources/zacson/js/jquery.ajaxchimp.min.js',
        'resources/zacson/js/plugins.js',
        'resources/zacson/js/main.js',
        'resources/zacson/js/23581568-13.js',
    ],'public/js/app.js');
