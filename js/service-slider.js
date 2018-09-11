var promo_slider = document.querySelector("promo-slider");

var control_item_delivery = document.querySelector(".btn-delivery");
var control_item_warranty = document.querySelector(".btn-warranty");
var control_item_credit = document.querySelector(".btn-credit");

var promo_slide_delivery = document.querySelector(".services-slider-slide-delivery");
var promo_slide_warranty = document.querySelector(".services-slider-slide-warranty");
var promo_slide_credit = document.querySelector(".services-slider-slide-credit");

control_item_delivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    control_item_delivery.classList.add("btn-ss-current");
    control_item_warranty.classList.remove("btn-ss-current");
    control_item_credit.classList.remove("btn-ss-current");
    promo_slide_delivery.classList.add("services-slider-slide-current");
    promo_slide_warranty.classList.remove("services-slider-slide-current");
    promo_slide_credit.classList.remove("services-slider-slide-current");
});

control_item_warranty.addEventListener("click", function(evt) {
    evt.preventDefault();
    control_item_warranty.classList.add("btn-ss-current");
    control_item_delivery.classList.remove("btn-ss-current");
    control_item_credit.classList.remove("btn-ss-current");
    promo_slide_warranty.classList.add("services-slider-slide-current");
    promo_slide_delivery.classList.remove("services-slider-slide-current");
    promo_slide_credit.classList.remove("services-slider-slide-current");
});

control_item_credit.addEventListener("click", function(evt) {
    evt.preventDefault();
    control_item_credit.classList.add("btn-ss-current");
    control_item_delivery.classList.remove("btn-ss-current");
    control_item_warranty.classList.remove("btn-ss-current");
    promo_slide_credit.classList.add("services-slider-slide-current");
    promo_slide_delivery.classList.remove("services-slider-slide-current");
    promo_slide_warranty.classList.remove("services-slider-slide-current");
});