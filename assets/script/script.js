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
            <p class="brand" id="gn-brand${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
         <!--   <p class="category-id" id="gn-category-id${i + 1}">CT-ID:<span>ABSD2154KL</span></p>
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
           <p class="brand" id="pr-brand${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
         <!--    <p class="category-id" id="pr-category-id${i + 1}">CT-ID:<span>ABSD2154KL</span></p>
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
             <p class="brand" id="lx-brand${i + 1}">Perodua Bezza Prime Sedan - Auto (2017)</p>
        <!--    <p class="category-id" id="lx-category-id${i + 1}">CT-ID:<span>ABSD2154KL</span></p>
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


//--------------------------------------------Add item to cart------------------------------------------------------
//calculate and set total rental fee
function calculateTotalRentalFee(parent, fee) {
    let old_value = parseFloat($(`#${parent}`).children('p').eq(10).children('span').eq(0).text());
    $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((old_value + fee) + ".00");
    /*console.log(old_value);*/
}

//increment vehicle qty
function incrementVehicleQTY(id) {
    let parent = $(`#${id}`).closest('div').attr('id');
    let qty_id = $(`#${parent}`).children('span').eq(1).attr('id');
    let old_qty_value = parseInt($(`#${qty_id}`).text());
    $(`#${qty_id}`).text(old_qty_value + 1);

    let new_qty_value = parseInt($(`#${qty_id}`).text());

    //get pickup date id
    let pickup_date_id = $(`#${parent}`).children('div').eq(2).children('input').eq(0).attr('id');
    //get return date id
    let return_date_id = $(`#${parent}`).children('div').eq(3).children('input').eq(0).attr('id');

    let pickup_date = new Date($(`#${pickup_date_id}`).val());
    let return_date = new Date($(`#${return_date_id}`).val());

    let date_diff_in_time;
    let date_diff_in_days;
    //check if pickup date or return date is empty or not
    if (isNaN(pickup_date.getTime()) && isNaN(return_date.getTime())) {
        //if pickup date & return date are NaN, there is no date different..so its value should be 0;
        date_diff_in_days = 0;
    } else if (!isNaN(pickup_date.getTime()) && !isNaN(return_date.getTime())) {
        //if pickup date & return date are not NaN..
        // To calculate the time difference of two dates
        date_diff_in_time = return_date.getTime() - pickup_date.getTime();
        // To calculate the no. of days between two dates
        date_diff_in_days = date_diff_in_time / (1000 * 3600 * 24);
    } else {
        date_diff_in_days = 1;
    }

    //if date different is greater than 1, then set the new rental fee
    if (date_diff_in_days > 0) {
        //get daily rate fee
        let daily_rate_fee = $(`#${parent}`).children('p').eq(5).children('span').eq(0).text();
        let new_rental_fee = (daily_rate_fee * date_diff_in_days) * new_qty_value;

        //check if driver is selected or not and then add proper values to new rental fee
        let is_driver_checked = $(`#${parent}`).children('div').eq(4).children('input').eq(0).is(":checked");
        if (is_driver_checked) {
            //add driver's fee into the new rental fee
            new_rental_fee += 1000;
        }

        //set new rental fee
        $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(new_rental_fee + ".00");
    }

}

//decrement vehicle qty
function decrementVehicleQTY(id) {
    let parent = $(`#${id}`).closest('div').attr('id');
    let qty_id = $(`#${parent}`).children('span').eq(1).attr('id');
    let old_qty_value = parseInt($(`#${qty_id}`).text());
    let new_value = old_qty_value - 1;
    if (new_value > 0) {
        $(`#${qty_id}`).text(old_qty_value - 1);
    }

    let new_qty_value = parseInt($(`#${qty_id}`).text());

    //get pickup date id
    let pickup_date_id = $(`#${parent}`).children('div').eq(2).children('input').eq(0).attr('id');
    //get return date id
    let return_date_id = $(`#${parent}`).children('div').eq(3).children('input').eq(0).attr('id');

    let pickup_date = new Date($(`#${pickup_date_id}`).val());
    let return_date = new Date($(`#${return_date_id}`).val());

    let date_diff_in_time;
    let date_diff_in_days;
    //check if pickup date or return date is empty or not
    if (isNaN(pickup_date.getTime()) && isNaN(return_date.getTime())) {
        //if pickup date & return date are NaN, there is no date different..so its value should be 0;
        date_diff_in_days = 0;
    } else if (!isNaN(pickup_date.getTime()) && !isNaN(return_date.getTime())) {
        //if pickup date & return date are not NaN..
        // To calculate the time difference of two dates
        date_diff_in_time = return_date.getTime() - pickup_date.getTime();
        // To calculate the no. of days between two dates
        date_diff_in_days = date_diff_in_time / (1000 * 3600 * 24);
    } else {
        date_diff_in_days = 1;
    }

    //if date different is greater than 1, then set the new rental fee
    if (date_diff_in_days > 0) {
        //get daily rate fee
        let daily_rate_fee = $(`#${parent}`).children('p').eq(5).children('span').eq(0).text();
        let new_rental_fee = (daily_rate_fee * date_diff_in_days) * new_qty_value;

        //check if driver is selected or not and then add proper values to new rental fee
        let is_driver_checked = $(`#${parent}`).children('div').eq(4).children('input').eq(0).is(":checked");
        if (is_driver_checked) {
            //add driver's fee into the new rental fee
            new_rental_fee += 1000;
        }

        //set new rental fee
        $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(new_rental_fee + ".00");
    }
}

//"Driver" checkbox on click
function driverCheckboxOnClick(id) {
    //get parent
    let parent = $(`#${id}`).parent('div').eq(0).parent('div').eq(0).attr('id');
    let is_driver_checked = $(`#${id}`).is(":checked");

    let old_rental_fee = parseFloat($(`#${parent}`).children('p').eq(10).children('span').eq(0).text());
    if (is_driver_checked) {
        $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((old_rental_fee + 1000) + ".00");
    } else {
        $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((old_rental_fee - 1000) + ".00");
    }
}

//set pickup date
function setPickupDate(id) {
    //get parent
    let parent = $(`#${id}`).parent('div').eq(0).parent('div').eq(0).attr('id');

    //get pickup date
    let pickup_date = new Date($(`#${id}`).val());

    //get return date id
    let return_date_id = $(`#${parent}`).children('div').eq(3).children('input').eq(0).attr('id');
    //get return date
    let return_date = new Date($(`#${return_date_id}`).val());

    let date_diff_in_time;
    let date_diff_in_days;
    //check if return date is empty or not
    if (!isNaN(return_date.getTime())) {
        // To calculate the time difference of two dates
        date_diff_in_time = return_date.getTime() - pickup_date.getTime();
        // To calculate the no. of days between two dates
        date_diff_in_days = date_diff_in_time / (1000 * 3600 * 24);
    } else {
        //if return date is NaN, there is no date different..so its value should be 1;
        date_diff_in_days = 1;
    }


    //get qty
    let qty = $(`#${parent}`).children('span').eq(1).text();
    //get daily rate fee
    let daily_rate_fee = $(`#${parent}`).children('p').eq(5).children('span').eq(0).text();
    //get exist rental fee
    let old_rental_fee = parseFloat($(`#${parent}`).children('p').eq(10).children('span').eq(0).text());

    //calculate new rental fee
    let new_rental_fee = (daily_rate_fee * date_diff_in_days * qty);

    //check if driver is selected or not and then add proper values to new rental fee
    let is_driver_checked = $(`#${parent}`).children('div').eq(4).children('input').eq(0).is(":checked");
    if (is_driver_checked) {
        if (new_rental_fee > 0) {
            //set new rental fee with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee + 1000) + ".00");
        } else {
            alert('Date difference is not a valid one..Enter a valid Date!');
        }
    } else {
        if (new_rental_fee > 0) {
            //set new rental fee without with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee) + ".00");
        } else {
            alert('Date difference is not a valid one..Enter a valid Date!');
        }
    }
}

function setReturnDate(id) {
    //get parent
    let parent = $(`#${id}`).parent('div').eq(0).parent('div').eq(0).attr('id');

    //get return date
    let return_date = new Date($(`#${id}`).val());

    //get pickup date id
    let pickup_date_id = $(`#${parent}`).children('div').eq(2).children('input').eq(0).attr('id');
    let pickup_date = new Date($(`#${pickup_date_id}`).val());

    let date_diff_in_time;
    let date_diff_in_days;
    //check if pickup date is empty or not
    if (!isNaN(pickup_date.getTime())) {
        // To calculate the time difference of two dates
        date_diff_in_time = return_date.getTime() - pickup_date.getTime();
        // To calculate the no. of days between two dates
        date_diff_in_days = date_diff_in_time / (1000 * 3600 * 24);
    } else {
        //if pickup date is NaN, there is no date different..so its value should be 1;
        date_diff_in_days = 1;
    }


    //get qty
    let qty = $(`#${parent}`).children('span').eq(1).text();
    //get daily rate fee
    let daily_rate_fee = $(`#${parent}`).children('p').eq(5).children('span').eq(0).text();
    //get exist rental fee
    let old_rental_fee = parseFloat($(`#${parent}`).children('p').eq(10).children('span').eq(0).text());

    //calculate new rental fee
    let new_rental_fee = (daily_rate_fee * date_diff_in_days * qty);

    //check if driver is selected or not and then add proper values to new rental fee
    let is_driver_checked = $(`#${parent}`).children('div').eq(4).children('input').eq(0).is(":checked");
    if (is_driver_checked) {
        if (new_rental_fee > 0) {
            //set new rental fee with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee + 1000) + ".00");
        } else {
            alert('Date difference is not a valid one..Enter a valid Date!');
        }
    } else {
        if (new_rental_fee > 0) {
            //set new rental fee without with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee) + ".00");
        } else {
            alert('Date difference is not a valid one..Enter a valid Date!');
        }
    }

}

//add vehicle to cart
function addVehicleToCart(id) {
    //get parent container id
    let parent = $(`#${id}`).closest('div').attr('id');

    //get pickup date id
    let pickup_date_id = $(`#${parent}`).children('div').eq(2).children('input').eq(0).attr('id');
    //get return date id
    let return_date_id = $(`#${parent}`).children('div').eq(3).children('input').eq(0).attr('id');

    let pickup_date = new Date($(`#${pickup_date_id}`).val());
    let return_date = new Date($(`#${return_date_id}`).val());

    // To calculate the time difference of two dates
    let date_diff_in_time = return_date.getTime() - pickup_date.getTime();
    // To calculate the no. of days between two dates
    let date_diff_in_days = date_diff_in_time / (1000 * 3600 * 24);

    //check "Driver" checkbox is clicked or not
    let driver_checkbox_id = $(`#${parent}`).children('div').eq(4).children('input').eq(0).attr('id');
    let driver = $(`#${driver_checkbox_id}`).is(":checked") ? 'yes' : 'no';
    let driver_charge = $(`#${driver_checkbox_id}`).is(":checked") ? 1000.00 : 0;

    let isUserLogged = checkIsUserLogged();
    if (isUserLogged) {
        let brand = $(`#${parent}`).children('p').eq(0).text();
        let ct_id = $(`#${parent}`).children('p').eq(1).children('span').eq(0).text();
        let qty = $(`#${parent}`).children('span').eq(1).text();
        let daily_rate_fee = $(`#${parent}`).children('p').eq(5).children('span').eq(0).text();
        let ldw_fee = $(`#${parent}`).children('p').eq(7).children('span').eq(0).text();
        let rental_fee = driver_charge + (qty > 0 ? parseFloat(daily_rate_fee) * date_diff_in_days * qty : parseFloat(daily_rate_fee) * date_diff_in_days);
        /*let rental_fee =  $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(tot_rental_fee+".00");*/
        calculateTotalRentalFee(parent, rental_fee);

        console.log({
            brand: brand,
            ct_id: ct_id,
            qty: qty,
            daily_rate_fee: daily_rate_fee,
            ldw_fee: ldw_fee,
            rental_fee: rental_fee
        });

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

//vehicle color choosers on click
let color = 'white';
$('.white').click(function () {
    $(this).css({
        border: '2px solid #E7EDEB',
        width: '30px',
        height: '30px',
        borderRadius: '100px'
    });
    color = 'white';
});
$('.black').click(function () {
    $(this).css({
        border: '2px solid #1C2520',
        width: '30px',
        height: '30px',
        borderRadius: '100px'
    });
    let parent = $(this).closest('div').attr('id');
    let white = $(`#${parent}`).children('span').eq(1).attr('id');
    color = 'black';
});
$('.red').click(function () {
    $(this).css({
        border: '2px solid #DB1F48',
        width: '30px',
        height: '30px',
        borderRadius: '100px'
    });
    color = 'red';
});
$('.blue').click(function () {
    $(this).css({
        border: '2px solid #151983',
        width: '30px',
        height: '30px',
        borderRadius: '100px'
    });
    color = 'blue';
});


