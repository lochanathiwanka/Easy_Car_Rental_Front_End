//sticky headbar navigation
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    });
});

//load home background images
let images = [
    "https://i.ibb.co/6gG9W4K/car1.jpg",
    "https://i.ibb.co/SQdxKSF/car2.jpg",
    "https://i.ibb.co/GM5RHcS/car3.jpg",
    "https://i.ibb.co/Ph5K8zS/car4.jpg"
];
let x = 0;
function nextBackground() {
    $("#home").css("background-image", "url(" + images[x] + ")");
    x = x + 1;
    if (x === images.length) {
        x = 0;
    }
}

setInterval(nextBackground, 8000);


//password see change
let condition = false;
$('#password-logo').click(function () {
    if (!condition) {
        $(this).attr('class', 'far fa-eye');
        condition = true;
    } else {
        $(this).attr('class', 'far fa-eye-slash');
        condition = false;
    }
});


//nav-bar's Sign In list item click
$('#li-sign-in').click(function () {
    $('#registration-popup').css("display", "none");
});


//set registration view
function registrationViewSetEnable() {
    $('#registration-popup').css("display", "flex");
    $.ajax({
        method: 'GET',
        async: true,
        url: './views/registrationFormImage.html',
        contentType: 'text/html',
        success: (data) => {
            $('#registration-form-container').html(data);
        }
    });
}

//nav-bar's Register list item click
$('#li-register').click(function () {
    registrationViewSetEnable();
});
//registration view enable
$('#btnRegister').click(function () {
    registrationViewSetEnable();
});
//registration view close
$('#btn-close-registration-view').click(function () {
    $('#registration-popup').css("display", "none");
    $('#popup-container').css('height', '550px');
});


//customer registration form loading
$('#btn-reg-as-customer').click(function () {
    $('#popup-container').css('height', '690px');

    $.ajax({
        method: 'GET',
        async: true,
        url: './views/customerRegistration.html',
        contentType: 'text/html',
        success: (data) => {
            $('#registration-form-container').html(data);
        }
    });
});


//Vehicles section
//general vehicles loading
let gn_car_images = ["./assets/bmwi8.jpg", "./assets/car-3.jpg", "./assets/car-4.jpg", "./assets/car-5.jpg", "./assets/bmwi8.jpg"];
$('#general-cars-category').empty();
for (let i = 0; i < 5; i++) {
    $('#general-cars-category').append(
        `
        <div id="general-car${i + 1}">
            <div class="image" id="gn-image${i + 1}"></div>
         <!--    <p class="brand" id="gn-brand${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
            <p class="category-id" id="gn-category-id${i + 1}">CT-ID:<span>ABSD2154KL</span></p>
            <p class="transmission-type" id="gn-transmission-type${i + 1}">Transmission:<span>Auto</span></p>
            <p class="fuel-type" id="gn-fuel-type${i + 1}">Fuel:<span>Diesel</span></p>
            <p class="no-of-passenger" id="gn-no-of-passenger${i + 1}">No.Passenger:<span>5</span></p>
            <p class="daily-rate" id="gn-daily-rate${i + 1}">Daily Rate:<span>5000.00</span></p>
            <p class="monthly-rate" id="gn-monthly-rate${i + 1}">Monthly Rate:<span>5000.00</span></p>
            <p class="free-mileage-price" id="gn-free-mileage-price${i + 1}">Free Mileage:<span>5KM</span></p>
            <p class="extra-km-price" id="gn-extra-km-price${i + 1}">Extra KM:<span>1000.00 per 1KM</span></p>
            <div class="color" id="gn-color${i + 1}">
                <span>Color:</span>
                <span class="white" id="gn-white${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="black" id="gn-black${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="red" id="gn-red${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="blue" id="gn-blue${i + 1}"><i class="fas fa-circle"></i></span>
            </div>
            <span class="left-cars" id="gn-left-cars${i + 1}">20 Left</span>
            <button class="btn-increment" id="gn-btn-increment${i + 1}"><i class="far fa-plus-square"></i></button>
            <span class="count" id="gn-count${i + 1}">0</span>
            <button class="btn-decrement" id="gn-btn-decrement${i + 1}"><i class="far fa-minus-square"></i></button>
            <button class="btn-add-to-cart" id="gn-btn-add-to-cart${i + 1}" onclick="addItemToCart(this.id)"><i class="fas fa-cart-plus"></i></button> -->
        </div>
        `
    );
    $('#gn-image' + (i + 1)).css('background-image', 'url("' + gn_car_images[i] + '")');
}

//premium vehicles loading
$('#premium-cars-category').empty();
for (let i = 0; i < 4; i++) {
    $('#premium-cars-category').append(
        `
        <div id="premium-car${i + 1}">
            <div class="image" id="pr-image${i + 1}"></div>
         <!--   <p class="brand" id="pr-brand${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
            <p class="category-id" id="pr-category-id${i + 1}">CT-ID:<span>ABSD2154KL</span></p>
            <p class="transmission-type" id="pr-transmission-type${i + 1}">Transmission:<span>Auto</span></p>
            <p class="fuel-type" id="pr-fuel-type${i + 1}">Fuel: Diesel</p>
            <p class="no-of-passenger" id="pr-no-of-passenger${i + 1}">No.Passenger:<span>5</span></p>
            <p class="daily-rate" id="pr-daily-rate${i + 1}">Daily Rate:<span>5000.00</span></p>
            <p class="monthly-rate" id="pr-monthly-rate${i + 1}">Monthly Rate:<span>5000.00</span></p>
            <p class="free-mileage-price" id="pr-free-mileage-price${i + 1}">Free Mileage:<span>5KM</span></p>
            <p class="extra-km-price" id="pr-extra-km-price${i + 1}">Extra KM:<span>1000.00 per 1KM</span></p>
            <div class="color" id="pr-color${i + 1}">
                <span>Color:</span>
                <span class="white" id="pr-white${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="black" id="pr-black${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="red" id="pr-red${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="blue" id="pr-blue${i + 1}"><i class="fas fa-circle"></i></span>
            </div>
            <span class="left-cars" id="pr-left-cars${i + 1}">20 Left</span>
            <button class="btn-increment" id="pr-btn-increment${i + 1}"><i class="far fa-plus-square"></i></button>
            <span class="count" id="pr-count${i + 1}">0</span>
            <button class="btn-decrement" id="pr-btn-decrement${i + 1}"><i class="far fa-minus-square"></i></button>
            <button class="btn-add-to-cart" id="pr-btn-add-to-cart${i + 1}" onclick="addItemToCart(this.id)"><i class="fas fa-cart-plus"></i></button> -->
        </div>
        `
    );
    $('#pr-image' + (i + 1)).css('background-image', 'url("' + gn_car_images[i] + '")');
}

//luxury vehicles loading
$('#luxury-cars-category').empty();
for (let i = 0; i < 3; i++) {
    $('#luxury-cars-category').append(
        `
        <div id="luxury-car${i + 1}">
            <div class="image" id="lx-image${i + 1}"></div>
         <!--    <p class="brand" id="lx-brand${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
            <p class="category-id" id="lx-category-id${i + 1}">CT-ID:<span>ABSD2154KL</span></p>
            <p class="transmission-type" id="lx-transmission-type${i + 1}">Transmission:<span>Auto</span></p>
            <p class="fuel-type" id="lx-fuel-type${i + 1}">Fuel:<span>Diesel</span></p>
            <p class="no-of-passenger" id="lx-no-of-passenger${i + 1}">No.Passenger:<span>5</span></p>
            <p class="daily-rate" id="lx-daily-rate${i + 1}">Daily Rate:<span>5000.00</span></p>
            <p class="monthly-rate" id="lx-monthly-rate${i + 1}">Monthly Rate:<span>5000.00</span></p>
            <p class="free-mileage-price" id="lx-free-mileage-price${i + 1}">Free Mileage:<span>5KM</span></p>
            <p class="extra-km-price" id="lx-extra-km-price${i + 1}">Extra KM:<span>1000.00 per 1KM</span></p>
            <div class="color" id="lx-color${i + 1}">
                <span>Color:</span>
                <span class="white" id="lx-white${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="black" id="lx-black${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="red" id="lx-red${i + 1}"><i class="fas fa-circle"></i></span>
                <span class="blue" id="lx-blue${i + 1}"><i class="fas fa-circle"></i></span>
            </div>
            <span class="left-cars" id="lx-left-cars${i + 1}">20 Left</span>
            <button class="btn-increment" id="lx-btn-increment${i + 1}"><i class="far fa-plus-square"></i></button>
            <span class="count" id="lx-count${i + 1}">0</span>
            <button class="btn-decrement" id="lx-btn-decrement${i + 1}"><i class="far fa-minus-square"></i></button>
            <button class="btn-add-to-cart" id="lx-btn-add-to-cart${i + 1}" onclick="addItemToCart(this.id)"><i class="fas fa-cart-plus"></i></button> -->
        </div>
        `
    );
    $('#lx-image' + (i + 1)).css('background-image', 'url("' + gn_car_images[i] + '")');
}


//Notification, Cart, Profile popup views open & close
//close popup windows when clicking other areas
$(function () {
    $('main').click(function () {
        $('#notification-popup').css('display', 'none');
        $('#cart-popup').css('display', 'none');
        $('#profile-popup').css('display', 'none');
    });
});
//notifications
$('#notification').click(function () {
    $('#notification-popup').css('display', 'flex');
    $('#cart-popup').css('display', 'none');
    $('#profile-popup').css('display', 'none');
});
$("#notification-popup").click(function (e) {
    e.stopPropagation();
});
//cart
$('#cart').click(function () {
    $('#cart-popup').css('display', 'flex');
    $('#notification-popup').css('display', 'none');
    $('#profile-popup').css('display', 'none');
});
$("#cart-popup").click(function (e) {
    e.stopPropagation();
});
$('#btn-cart-popup-close').click(function () {
    $('#cart-popup').css('display', 'none');
});
//profile
$('#profile').click(function () {
    $('#profile-popup').css('display', 'flex');
    $('#cart-popup').css('display', 'none');
    $('#notification-popup').css('display', 'none');
});
$("#profile-popup").click(function (e) {
    e.stopPropagation();
});


//remove item form cart
function removeItemFromCart(id) {
    let parent_item = $(`#${id}`).closest('div').attr('id');
    $(`#${parent_item}`).remove();
}

//remove notification
function removeNotification(id) {
    let parent_item = $(`#${id}`).closest('div').attr('id');
    $(`#${parent_item}`).remove();
}


//Add item to cart
function addItemToCart(id) {
    let isUserLogged = checkIsUserLogged();
    if (isUserLogged) {
        //get parent id
        let parent = $(`#${id}`).closest('div').attr('id');
        let brand = $(`#${parent}`).children('p').eq(0).text();
        let ct_id = $(`#${parent}`).children('p').eq(1).text();
        let qty = $(`#${parent}`).children('span').eq(1).text();
        let rental_fee;
        let ldw_fee;
        alert(child_value);
    } else {
        //jump to Login page
        document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'auto'});
    }
}

//check if the user is logged in or not
function checkIsUserLogged() {
    let user_name = $('#user-name').text();
    if (user_name.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}


