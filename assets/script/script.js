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
        async: false,
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
            <p class="para" id="gn-para${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
            <button class="btn-increment" id="btn-increment${i + 1}"><i class="far fa-plus-square"></i></button>
            <span class="count" id="count${i + 1}">0</span>
            <button class="btn-decrement" id="btn-decrement${i + 1}"><i class="far fa-minus-square"></i></button>
            <button class="btn-add-to-cart" id="gn-btn-add-to-cart${i + 1}"><i class="fas fa-cart-plus"></i></button>
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
            <p class="para" id="pr-para${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
            <button class="btn-increment" id="btn-increment${i + 1}"><i class="far fa-plus-square"></i></button>
            <span class="count" id="count${i + 1}">0</span>
            <button class="btn-decrement" id="btn-decrement${i + 1}"><i class="far fa-minus-square"></i></button>
            <button class="btn-add-to-cart" id="pr-btn-add-to-cart${i + 1}"><i class="fas fa-cart-plus"></i></button>
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
            <p class="para" id="lx-para${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
            <button class="btn-increment" id="btn-increment${i + 1}"><i class="far fa-plus-square"></i></button>
            <span class="count" id="count${i + 1}">0</span>
            <button class="btn-decrement" id="btn-decrement${i + 1}"><i class="far fa-minus-square"></i></button>
            <button class="btn-add-to-cart" id="lx-btn-add-to-cart${i + 1}"><i class="fas fa-cart-plus"></i></button>
        </div>
        `
    );
    $('#lx-image' + (i + 1)).css('background-image', 'url("' + gn_car_images[i] + '")');
}


/*Cart popup view enable*/
$('#add-to-cart').click(function () {
    $('#cart-popup').css('display', 'flex');
});
$("#cart-popup").click(function (e) {
    e.stopPropagation();
});
$(function () {
    $('main').click(function () {
        $('#cart-popup').css('display', 'none');
    });
});
