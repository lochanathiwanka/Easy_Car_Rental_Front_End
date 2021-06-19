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
/*let images = [
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
setInterval(nextBackground, 8000);*/
let images = [];
let x = 0;

function getImage1() {
    $.ajax({
        type: "GET",
        url: `https://i.ibb.co/6gG9W4K/car1.jpg`,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            /* PUT THIS INSIDE AJAX SUCCESS */
            /*let img = $('<img id="image_id">');
            img.attr('src', 'data:image/jpg;base64,' + btoa(binary));
            img.appendTo('#image_div');*/

            //set image's src to the div
            /*$("#home").css("background-image", "url(" + 'data:image/jpg;base64,' + btoa(binary) + ")");*/
            /*$('#myImage').attr('src', 'data:image/jpg;base64,' + btoa(binary));*/

            images.push('data:image/jpg;base64,' + btoa(binary));
            /*x = x + 1;
            if (x === images.length) {
                x = 0;
            }*/
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

function getImage2() {
    $.ajax({
        type: "GET",
        url: `https://i.ibb.co/SQdxKSF/car2.jpg`,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            /* PUT THIS INSIDE AJAX SUCCESS */
            /*let img = $('<img id="image_id">');
            img.attr('src', 'data:image/jpg;base64,' + btoa(binary));
            img.appendTo('#image_div');*/

            //set image's src to the div
            /*$("#home").css("background-image", "url(" + 'data:image/jpg;base64,' + btoa(binary) + ")");*/
            /*$('#myImage').attr('src', 'data:image/jpg;base64,' + btoa(binary));*/

            images.push('data:image/jpg;base64,' + btoa(binary));
            /*x = x + 1;
            if (x === images.length) {
                x = 0;
            }*/
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

function getImage3() {
    $.ajax({
        type: "GET",
        url: `https://i.ibb.co/GM5RHcS/car3.jpg`,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            /* PUT THIS INSIDE AJAX SUCCESS */
            /*let img = $('<img id="image_id">');
            img.attr('src', 'data:image/jpg;base64,' + btoa(binary));
            img.appendTo('#image_div');*/

            //set image's src to the div
            /*$("#home").css("background-image", "url(" + 'data:image/jpg;base64,' + btoa(binary) + ")");*/
            /*$('#myImage').attr('src', 'data:image/jpg;base64,' + btoa(binary));*/

            images.push('data:image/jpg;base64,' + btoa(binary));
            /*x = x + 1;
            if (x === images.length) {
                x = 0;
            }*/
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

function getImage4() {
    $.ajax({
        type: "GET",
        url: `https://i.ibb.co/Ph5K8zS/car4.jpg`,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            /* PUT THIS INSIDE AJAX SUCCESS */
            /*let img = $('<img id="image_id">');
            img.attr('src', 'data:image/jpg;base64,' + btoa(binary));
            img.appendTo('#image_div');*/

            //set image's src to the div
            /*$("#home").css("background-image", "url(" + 'data:image/jpg;base64,' + btoa(binary) + ")");*/
            /*$('#myImage').attr('src', 'data:image/jpg;base64,' + btoa(binary));*/

            images.push('data:image/jpg;base64,' + btoa(binary));
            /*x = x + 1;
            if (x === images.length) {
                x = 0;
            }*/
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

getImage1();
getImage2();
getImage3();
getImage4();

function nextBackground() {
    $("#home").css("background-image", "url(" + images[x] + ")");
    x = x + 1;
    if (x === images.length) {
        x = 0;
    }
}

setInterval(nextBackground, 8000);

/*------------------------------------------------------------------------------------------*/

//get all vehicles
let vehicle_list = [];

function loadAllVehicles() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle',
        method: 'get',
        async: true,
        dataType: "json",
        success: function (response) {
            console.log(response.data);

            vehicle_list = response.data;

            $('#luxury-cars-category').empty();

            for (let i = 0; i < vehicle_list.length; i++) {
                //load luxury cars
                if (vehicle_list[i].type.toLowerCase() === 'luxury') {
                    $('#luxury-cars-category').append(
                        `
                        <div id="general-car${i + 1}">
                            <div class="image" id="gn-image${i + 1}"></div>
                            <p class="brand" id="gn-brand${i + 1}">${vehicle_list[i].brand}</p>
                        </div>
                        `
                    );

                    //load luxury car's images
                    for (let j = 0; j < 1; j++) {
                        console.log(vehicle_list[i].vehicleDetailList[0].image1);
                        $('#gn-image' + (i + 1)).css('background-image', 'url("' + gn_car_images[i] + '")');
                    }
                }
            }
        }
    });
}

loadAllVehicles();

//get vehicle's image from the server
function getVehicleImage(image_name) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/Easy_Car_Rental_Server/vehicle",
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        success: function (result, textStatus, jqXHR) {
            if (result.length < 1) {
                alert("The thumbnail doesn't exist");
                $("#thumbnail").attr("src", "data:image/png;base64,");
                return
            }

            let binary = "";
            let responseText = jqXHR.responseText;
            let responseTextLen = responseText.length;

            for (i = 0; i < responseTextLen; i++) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
            }
            $("#thumbnail").attr("src", "data:image/png;base64,");

            /* PUT THIS INSIDE AJAX SUCCESS */
            /*let img = $('<img id="image_id">');
            img.attr('src', 'data:image/jpg;base64,' + btoa(binary));
            img.appendTo('#image_div');*/

            //set image's src to the div
            $('#myImage').attr('src', 'data:image/jpg;base64,' + btoa(binary));
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}


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
/*$('#luxury-cars-category').empty();
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
}*/


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
let cart_items_count = 0;
function removeItemFromCart(id) {
    //get parent id
    let parent_item = $(`#${id}`).closest('div').attr('id');

    //get index number of the item div
    let index = $(`#${parent_item}`).index();

    //set cart total rental fee
    let old_value = parseFloat($('#cart_total_rental_fee').text());
    let deleted_value = parseFloat($(`#${parent_item}`).children('p').eq(3).children('span').eq(0).text());
    $('#cart_total_rental_fee').text((old_value - deleted_value) + ".00");

    //remove item from the booking details list
    request_details_list.splice(index, 1);

    //remove item from the cart
    $(`#${parent_item}`).remove();


    cart_items_count -= 1;
    if (cart_items_count === 0) {
        $('#cart-item-count').css('display', 'none');
    }
    $('#cart-item-count').text(cart_items_count);
}

//remove notification
function removeNotification(id) {
    let parent_item = $(`#${id}`).closest('div').attr('id');
    $(`#${parent_item}`).remove();
}


//--------------------------------------------Add item to cart------------------------------------------------------
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

    //enable return date
    $(`#${return_date_id}`).prop("disabled", false);

    //enable driver checkbox
    $(`#${parent}`).children('div').eq(4).children('input').eq(0).prop("disabled", false);

    //enable add to cart button
    $(`#${parent}`).children('button').eq(2).prop('disabled', false);

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

    /* //calculate new rental fee
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
     }*/

    //calculate new rental fee
    let new_rental_fee;
    if (date_diff_in_days > 0) {
        new_rental_fee = (daily_rate_fee * date_diff_in_days * qty);
    } else if (date_diff_in_days === 0) {
        new_rental_fee = (daily_rate_fee * qty);
    } else {
        new_rental_fee = 0;
    }

    //check if driver is selected or not and then add proper values to new rental fee
    let is_driver_checked = $(`#${parent}`).children('div').eq(4).children('input').eq(0).is(":checked");
    if (is_driver_checked) {
        if (new_rental_fee > 0) {
            //set new rental fee with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee + 1000) + ".00");
        } else {
            alert('Pickup date is greater than Return date..please check it again!');
            //reset return date
            document.getElementById(`${id}`).valueAsDate = null;
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(daily_rate_fee);
        }
    } else {
        if (new_rental_fee > 0) {
            //set new rental fee without with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee) + ".00");
        } else {
            alert('Pickup date is greater than Return date..please check it again!');
            //reset return date
            document.getElementById(`${id}`).valueAsDate = null;
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(daily_rate_fee);
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
    let new_rental_fee;
    if (date_diff_in_days > 0) {
        new_rental_fee = (daily_rate_fee * date_diff_in_days * qty);
    } else if (date_diff_in_days === 0) {
        new_rental_fee = (daily_rate_fee * qty);
    } else {
        new_rental_fee = 0;
    }

    //check if driver is selected or not and then add proper values to new rental fee
    let is_driver_checked = $(`#${parent}`).children('div').eq(4).children('input').eq(0).is(":checked");
    if (is_driver_checked) {
        if (new_rental_fee > 0) {
            //set new rental fee with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee + 1000) + ".00");
        } else {
            alert('Return date is smaller than Pickup date..please check it again!');
            //reset return date
            document.getElementById(`${id}`).valueAsDate = null;
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(daily_rate_fee);
        }
    } else {
        if (new_rental_fee > 0) {
            //set new rental fee without with driver's charge
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text((new_rental_fee) + ".00");
        } else {
            alert('Return date is smaller than Pickup date..please check it again!');
            //reset return date
            document.getElementById(`${id}`).valueAsDate = null;
            $(`#${parent}`).children('p').eq(10).children('span').eq(0).text(daily_rate_fee);
        }
    }
}

//add vehicle to cart
let request_details_list = [];
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

    let new_pickup_date;
    let new_return_date;
    if (isNaN(return_date.getTime())) {
        //pickup date & return date both are same
        new_pickup_date = pickup_date;
        new_return_date = pickup_date;
    } else {
        if (date_diff_in_days > 0) {
            //pickup date & return date both are good
            new_pickup_date = pickup_date;
            new_return_date = return_date;
        } else {
            //pickup date & return date both are same
            new_pickup_date = pickup_date;
            new_return_date = pickup_date;
        }
    }

    //check "Driver" checkbox is clicked or not
    let driver_checkbox_id = $(`#${parent}`).children('div').eq(4).children('input').eq(0).attr('id');
    let driver = $(`#${driver_checkbox_id}`).is(":checked") ? 'yes' : 'no';

    let isUserLogged = checkIsUserLogged();
    if (isUserLogged) {
        let brand = $(`#${parent}`).children('p').eq(0).text();
        let ct_id = $(`#${parent}`).children('p').eq(1).children('span').eq(0).text();
        let qty = parseInt($(`#${parent}`).children('span').eq(1).text());
        let ldw_fee = parseFloat($(`#${parent}`).children('p').eq(7).children('span').eq(0).text());
        let rental_fee = parseFloat($(`#${parent}`).children('p').eq(10).children('span').eq(0).text());


        if (rental_fee !== 0) {
            if (cart_items_count < 3) {
                $('#cart-items-container').append(
                    `
                 <div class="item" id="item${cart_items_count + 1}">
                    <span class="btn-remove-item" id="btn-remove-item${cart_items_count + 1}" onclick="removeItemFromCart(this.id)">
                        <i class="fas fa-minus-circle"></i>
                    </span>
                    <p class="car-brand" id="car-brand${cart_items_count + 1}">${brand}</p>
                    <p class="car-ct-id" id="car-ct-id${cart_items_count + 1}">CT-ID:<span>${ct_id}</span></p>
                    <p class="qty" id="qty${cart_items_count + 1}">QTY:<span>${qty}</span></p>
                    <p class="cart-rental-fee" id="cart-rental-fee${cart_items_count + 1}">Rental Fee:<span>${rental_fee}</span></p>
                    <p class="cart-ldw-fee" id="cart-ldw-fee${cart_items_count + 1}">LDW Fee:<span>${ldw_fee}</span></p>
                </div>
                `
                );

                //set cart total rental fee
                let old_value = parseFloat($('#cart_total_rental_fee').text());
                $('#cart_total_rental_fee').text((old_value + rental_fee) + ".00");

                cart_items_count += 1;

                //add booking details into array list
                request_details_list.push({
                    pk: {
                        'rid': request_id,
                        'vid': 'V001'
                    },
                    qty: qty,
                    driver: driver,
                    pickup_date: new_pickup_date.toLocaleDateString(),
                    return_date: new_return_date.toLocaleDateString(),
                    rental_fee: rental_fee,
                    ldw_fee: ldw_fee
                });

                alert('Your vehicle is added to the cart!');
                $('#cart-item-count').css('display', 'flex');
                $('#cart-item-count').text(cart_items_count);

                //reset pickup date
                document.getElementById(`${pickup_date_id}`).valueAsDate = null;
                //reset return date
                document.getElementById(`${return_date_id}`).valueAsDate = null;
                //disable return date
                $(`#${return_date_id}`).prop("disabled", true);
                //disable driver checkbox
                $(`#${parent}`).children('div').eq(4).children('input').eq(0).prop("disabled", true);
                //uncheck driver checkbox
                $(`#${driver_checkbox_id}`).prop('checked', false);
                //disable add to cart button
                $(`#${parent}`).children('button').eq(2).prop('disabled', true);
                //reset qty
                $(`#${parent}`).children('span').eq(1).text(1);
                //rest rental fee
                $(`#${parent}`).children('p').eq(10).children('span').eq(0).text('0.00');

            } else {
                alert('You have already reached the maximum number limit of items per one booking!');
            }
        } else {
            alert('Select a pickup & return date!');
        }

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

//add booking
let request;
$('#btn-proceed').click(function () {
    //get cart items count
    let count = $("#cart-items-container").children().length;

    //get user id;
    let user_id = $('#user-id').text();

    //get cart total rental fee
    let total_rental_fee = parseFloat($('#cart_total_rental_fee').text());


    try {
        //get bank slip image
        let fileObject = $("#bankSlip")[0].files[0];//access file object from input field
        let fileName = user_id + "-" + $("#bankSlip")[0].files[0].name; //get file name


        //add request data & request details list's data into the request_list
        request = {
            rid: request_id,
            customer: {
                id: user_id
            },
            total_fee: total_rental_fee,
            bank_slip: fileName,
            message: 'Your request is being processed. Thanks for connecting with us!',
            status: 'show',
            request_detail_list: request_details_list
        };


        $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/request',
            method: 'post',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify(request),
            success: function (response) {
                uploadBankSlip(fileObject, fileName)
                alert(response.message);
                generateRequestID();
            }
        });

    } catch (e) {
        alert('Upload a bank slip image!');
    }
});


//upload bank slip
function uploadBankSlip(image, fileName) {
    let bank_slip = new FormData(); //setup form data object to send file data
    bank_slip.append("bankSlip", image, fileName); //append data

    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/request/upload_bank_slip',
        method: 'post',
        async: true,
        processData: false,
        contentType: false,
        data: bank_slip,
        success: function (response) {
        }
    });
}


//generate RID
let request_id;

function generateRequestID() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/request/lastrid',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_rid = response.data;
                let newId = parseInt(last_rid.substring(1, 4)) + 1;
                if (newId < 10) {
                    request_id = "R00" + newId;
                } else if (newId < 100) {
                    request_id = "R0" + newId;
                } else {
                    request_id = "R" + newId;
                }

            } catch (e) {
                request_id = "R001";
            }
        }
    });
}

generateRequestID();


$('#btn-sign-in').click(function () {
    //get email
    let email = $('#txtEmail').val();
    //get password
    let password = $('#password').val();

    window.location.replace('https://lochanathiwanka.github.io/Easy_Car_Rental_Admin_Dashboard/');


    /*    $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/login',
            method: 'get',
            async: true,
            data: {
                email: email,
                password: password
            },
            dataType: 'json',
            success: function (response) {
                if (response.data.role === 'admin') {
                    window.location.replace('https://lochanathiwanka.github.io/Easy_Car_Rental_Admin_Dashboard/');
                }
            }
        });*/
});
