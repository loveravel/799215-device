var promo_slider = document.querySelector("promo-slider");

var control_item_1 = document.querySelector(".psc-1");
var control_item_2 = document.querySelector(".psc-2");
var control_item_3 = document.querySelector(".psc-3");

var promo_slide_1 = document.querySelector(".promo-slide-1");
var promo_slide_2 = document.querySelector(".promo-slide-2");
var promo_slide_3 = document.querySelector(".promo-slide-3");

control_item_1.addEventListener("click", function(evt) {
    evt.preventDefault();
    control_item_1.classList.add("psc-current");
    control_item_2.classList.remove("psc-current");
    control_item_3.classList.remove("psc-current");
    promo_slide_1.classList.add("promo-slide-current");
    promo_slide_2.classList.remove("promo-slide-current");
    promo_slide_3.classList.remove("promo-slide-current");
});

control_item_2.addEventListener("click", function(evt) {
    evt.preventDefault();
    control_item_2.classList.add("psc-current");
    control_item_1.classList.remove("psc-current");
    control_item_3.classList.remove("psc-current");
    promo_slide_2.classList.add("promo-slide-current");
    promo_slide_1.classList.remove("promo-slide-current");
    promo_slide_3.classList.remove("promo-slide-current");
});

control_item_3.addEventListener("click", function(evt) {
    evt.preventDefault();
    control_item_3.classList.add("psc-current");
    control_item_1.classList.remove("psc-current");
    control_item_2.classList.remove("psc-current");
    promo_slide_3.classList.add("promo-slide-current");
    promo_slide_1.classList.remove("promo-slide-current");
    promo_slide_2.classList.remove("promo-slide-current");
});