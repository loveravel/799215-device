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

var btn_write_us = document.querySelector(".btn-write-us");

var modal_write_us = document.querySelector(".modal-write-us");
var close_write_us = modal_write_us.querySelector(".modal-close");

var form_write_us = modal_write_us.querySelector(".write-us-form");
var your_name = modal_write_us.querySelector(".your-name");
var your_email = modal_write_us.querySelector(".your-email");
var your_message = modal_write_us.querySelector(".your-message");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStroageSupport = false;
}

btn_write_us.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_write_us.classList.add("modal-write-us-show");
    if (storage) {
        your_name.value = storage;
        your_email.focus();
    } else {
        your_name.focus();
    }
});

close_write_us.addEventListener("click", function(evt) {
    modal_write_us.classList.remove("modal-write-us-show");
    modal_write_us.classList.remove("modal-error");
});

form_write_us.addEventListener("submit", function(evt) {
    if (!your_name.value || !your_email.value || !your_message.value) {
        evt.preventDefault();
        modal_write_us.classList.remove("modal-error");
        modal_write_us.offsetWidth = modal_write_us.offsetWidth;
        modal_write_us.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("your_name", your_name.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal_write_us.classList.contains("modal-write-us-show")) {
            modal_write_us.classList.remove("modal-write-us-show");
            modal_write_us.classList.remove("modal-error");
        }
    }
});

var btn_map = document.querySelector(".map-img");

var modal_map = document.querySelector(".modal-map");
var close_map = modal_map.querySelector(".modal-close");

btn_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-map-show");
});

close_map.addEventListener("click", function(evt) {
    modal_map.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal_map.classList.contains("modal-map-show")) {
            modal_map.classList.remove("modal-map-show");
        }
    }
});