import "./import/modules";
import "./import/components";
import { $, jQuery } from "jquery";
window.$ = $;
window.jQuery = jQuery;

$(document).ready(function() {
    $(".menu-burger__header").click(function(){
        $(".menu-burger__header").toggleClass("open-menu");
        $(".header__nav").toggleClass("open-menu");
    });
});

$(document).ready(function(){
    $(".product__row").slick();
});