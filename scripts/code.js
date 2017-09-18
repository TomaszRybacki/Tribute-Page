/*jslint es6 */
var $;

$(document).ready(function () {
    "use strict";
    /*
    function resizeForm(){
        var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
        if(width > 1024){

        } else {

        }
    }
    window.onresize = resizeForm;
    resizeForm();
    */

    if ($(window).width() > 832) {

        $(window).scroll(function () {

            var wScroll = $(this).scrollTop();

            if (wScroll > 300) {
                $(".left").css("display", "flex");
                $(".left").addClass("bounceInLeft");
                $(".right").css("display", "flex");
                $(".right").addClass("bounceInRight");
            }

            if (wScroll > 950) {
                $("li:eq(0)").addClass("flipInX");
                $("li:eq(0)").css("display", "block");
            }

            if (wScroll > 950) {
                $("li:eq(1)").addClass("flipInX");
                $("li:eq(1)").css("display", "block");
            }

            if (wScroll > 1000) {
                $("li:eq(2)").addClass("flipInX");
                $("li:eq(2)").css("display", "block");
            }

            if (wScroll > 1000) {
                $("li:eq(3)").addClass("flipInX");
                $("li:eq(3)").css("display", "block");
            }

            if (wScroll > 1050) {
                $("li:eq(4)").addClass("flipInX");
                $("li:eq(4)").css("display", "block");
            }

            if (wScroll > 1050) {
                $("li:eq(5)").addClass("flipInX");
                $("li:eq(5)").css("display", "block");
            }

            if (wScroll > 1100) {
                $("li:eq(6)").addClass("flipInX");
                $("li:eq(6)").css("display", "block");
            }

            if (wScroll > 1100) {
                $("li:eq(7)").addClass("flipInX");
                $("li:eq(7)").css("display", "block");
            }

            if (wScroll > 1150) {
                $("li:eq(8)").addClass("flipInX");
                $("li:eq(8)").css("display", "block");
            }

            if (wScroll > 1150) {
                $("li:eq(9)").addClass("flipInX");
                $("li:eq(9)").css("display", "block");
            }

            if (wScroll > 1200) {
                $("li:eq(10)").addClass("flipInX");
                $("li:eq(10)").css("display", "block");
            }

            if (wScroll > 1200) {
                $("li:eq(11)").addClass("flipInX");
                $("li:eq(11)").css("display", "block");
            }

            if (wScroll > 1250) {
                $("li:eq(12)").addClass("flipInX");
                $("li:eq(12)").css("display", "block");
            }

            if (wScroll > 1250) {
                $("li:eq(13)").addClass("flipInX");
                $("li:eq(13)").css("display", "block");

                $("ul").css("height", "auto");
            }
        });
    }
});
