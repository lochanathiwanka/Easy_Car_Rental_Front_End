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

            /*images.push('data:image/jpg;base64,' + btoa(binary));*/
            let image_source = 'data:image/jpg;base64,' + btoa(binary);
            $("#home").css("background-image", "url(" + image_source + ")");
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

getImage1();

/*function getImage2() {
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

            images.push('data:image/jpg;base64,' + btoa(binary));
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

            images.push('data:image/jpg;base64,' + btoa(binary));
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

            images.push('data:image/jpg;base64,' + btoa(binary));
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}*/

/*getImage2();
getImage3();
getImage4();
function nextBackground() {
    $("#home").css("background-image", "url(" + images[x] + ")");
    x = x + 1;
    if (x === images.length) {
        x = 0;
    }
}
setInterval(nextBackground, 8000);*/

/*------------------------------------------------------------------------------------------*/

//Vehicles section
//-----------------------Vehicle view--------------------

//get all vehicles
let vehicle_list = [];
function loadAllVehicles() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/vehicle/available_vehicles',
        method: 'get',
        async: true,
        dataType: "json",
        success: function (response) {
            vehicle_list = response.data;
            $('#luxury-cars-category').empty();
            for (let i = 0; i < vehicle_list.length; i++) {
                //load general cars
                if (vehicle_list[i].type.toLowerCase() === 'general') {
                    if (vehicle_list[i].vehicleDetailList.length > 0) {
                        $('#general-cars-category').append(
                            `
                        <div id="general-car${i}" onclick="carDivOnClick(this.id)">
                            <div class="image" id="gn-image${i}"></div>
                            <p class="brand" id="general-brand${i}">${vehicle_list[i].brand}</p>
                        </div>
                        `
                        );
                        //load general car's images
                        setVehicleImage(vehicle_list[i].vehicleDetailList[0].image1, 'gn-image', (i));
                    }
                }

                //load luxury cars
                if (vehicle_list[i].type.toLowerCase() === 'premium') {
                    if (vehicle_list[i].vehicleDetailList.length > 0) {
                        $('#premium-cars-category').append(
                            `
                        <div id="premium-car${i}" onclick="carDivOnClick(this.id)">
                            <div class="image" id="pr-image${i}"></div>
                            <p class="brand" id="premium-brand${i}">${vehicle_list[i].brand}</p>
                        </div>
                        `
                        );
                        //load premium car's images
                        setVehicleImage(vehicle_list[i].vehicleDetailList[0].image1, 'pr-image', (i));
                    }
                }

                //load luxury cars
                if (vehicle_list[i].type.toLowerCase() === 'luxury') {
                    if (vehicle_list[i].vehicleDetailList.length > 0) {
                        $('#luxury-cars-category').append(
                            `
                        <div id="luxury-car${i}" onclick="carDivOnClick(this.id)">
                            <div class="image" id="lx-image${i}"></div>
                            <p class="brand" id="luxury-brand${i}">${vehicle_list[i].brand}</p>
                        </div>
                        `
                        );
                        //load luxury car's images
                        setVehicleImage(vehicle_list[i].vehicleDetailList[0].image1, 'lx-image', (i));
                    }
                }
            }

            //check if general cars category is not empty & then set general car details container image
            if ($('#general-cars-category').children().length > 0) {
                $('#general-cars-title-container').css('display', 'grid');
                $('#general-cars-category').css('display', 'grid');
                $('#general-car-details-container').css('display', 'grid');

                for (let i = 0; i < vehicle_list.length; i++) {
                    if (vehicle_list[i].type.toLowerCase() === 'general') {
                        resetVehicleDetailContainerValues('general-car-details-container', 'gn');
                        let image_details = [vehicle_list[i].vehicleDetailList[0].image1, 'gn-car-image'];
                        setVehicleDetailsContainerValues('gn', image_details, vehicle_list[i].brand, vehicle_list[i].vid, vehicle_list[i].transmission_type,
                            vehicle_list[i].fuel_type, vehicle_list[i].no_of_passenger, vehicle_list[i].daily_rate, vehicle_list[i].monthly_rate,
                            vehicle_list[i].ldw_fee, vehicle_list[i].free_mileage, vehicle_list[i].extra_km_price, vehicle_list[i].vehicleDetailList.length);
                        break;
                    }
                }
            } else {
                $('#general-cars-title-container').css('display', 'none');
                $('#general-cars-category').css('display', 'none');
                $('#general-car-details-container').css('display', 'none');
            }

            //check if premium cars category is not empty & then set premium car details container image
            if ($('#premium-cars-category').children().length > 0) {
                $('#premium-cars-title-container').css('display', 'grid');
                $('#premium-cars-category').css('display', 'grid');
                $('#premium-car-details-container').css('display', 'grid');

                for (let i = 0; i < vehicle_list.length; i++) {
                    if (vehicle_list[i].type.toLowerCase() === 'premium') {
                        resetVehicleDetailContainerValues('premium-car-details-container', 'pr');
                        let image_details = [vehicle_list[i].vehicleDetailList[0].image1, 'pr-car-image'];
                        setVehicleDetailsContainerValues('pr', image_details, vehicle_list[i].brand, vehicle_list[i].vid, vehicle_list[i].transmission_type,
                            vehicle_list[i].fuel_type, vehicle_list[i].no_of_passenger, vehicle_list[i].daily_rate, vehicle_list[i].monthly_rate,
                            vehicle_list[i].ldw_fee, vehicle_list[i].free_mileage, vehicle_list[i].extra_km_price, vehicle_list[i].vehicleDetailList.length);
                        break;
                    }
                }
            } else {
                $('#premium-cars-title-container').css('display', 'none');
                $('#premium-cars-category').css('display', 'none');
                $('#premium-car-details-container').css('display', 'none');
            }

            //check if luxury cars category is not empty & then set luxury car details container image
            if ($('#luxury-cars-category').children().length > 0) {
                for (let i = 0; i < vehicle_list.length; i++) {
                    $('#luxury-cars-title-container').css('display', 'grid');
                    $('#luxury-cars-category').css('display', 'grid');
                    $('#luxury-car-details-container').css('display', 'grid');

                    if (vehicle_list[i].type.toLowerCase() === 'luxury') {
                        resetVehicleDetailContainerValues('luxury-car-details-container', 'lx');
                        let image_details = [vehicle_list[i].vehicleDetailList[0].image1, 'lx-car-image'];
                        setVehicleDetailsContainerValues('lx', image_details, vehicle_list[i].brand, vehicle_list[i].vid, vehicle_list[i].transmission_type,
                            vehicle_list[i].fuel_type, vehicle_list[i].no_of_passenger, vehicle_list[i].daily_rate, vehicle_list[i].monthly_rate,
                            vehicle_list[i].ldw_fee, vehicle_list[i].free_mileage, vehicle_list[i].extra_km_price, vehicle_list[i].vehicleDetailList.length);
                        break;
                    }
                }
            } else {
                $('#luxury-cars-title-container').css('display', 'none');
                $('#luxury-cars-category').css('display', 'none');
                $('#luxury-car-details-container').css('display', 'none');
            }

            console.log(response.data);
        }
    });
}
loadAllVehicles();

//get vehicle's image from the server and set it to vehicle div
function setVehicleImage(image, div, div_index) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/get_images/" + image,
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

            //set image's url to the div
            let image_url = 'data:image/jpg;base64,' + btoa(binary);
            $(`#${div}${div_index}`).css('background-image', `url("${image_url}")`);
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

//load vehicle details container values
function setVehicleDetailsContainerValues(id, image_details, brand, vid, transmission_type, fuel_type, no_of_passenger, daily_rate, monthly_rate, ldw_fee, free_mileage, extra_km_price, length) {
    setVehicleDetailsContainerImage(image_details[0], image_details[1]);
    $(`#${id}-car-brand`).text(brand);
    $(`#${id}-category-id`).children('span').eq(0).text(vid);
    $(`#${id}-transmission-type`).children('span').eq(0).text(transmission_type);
    $(`#${id}-fuel-type`).children('span').eq(0).text(fuel_type);
    $(`#${id}-no-of-passenger`).children('span').eq(0).text(no_of_passenger);
    $(`#${id}-daily-rate`).children('span').eq(0).text(daily_rate + ".00");
    $(`#${id}-monthly-rate`).children('span').eq(0).text(monthly_rate + ".00");
    $(`#${id}-ldw-fee`).children('span').eq(0).text(ldw_fee + ".00");
    $(`#${id}-free-mileage`).children('span').eq(0).text(free_mileage);
    $(`#${id}-extra-km-price`).children('span').eq(0).text(extra_km_price + ".00 per KM");
    $(`#${id}-left-cars`).text(length + " Left");
}

//vehicle details container image set
function setVehicleDetailsContainerImage(image, image_div) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/Easy_Car_Rental_Server/vehicle_detail/get_images/" + image,
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

            //set image's url to the div
            let image_url = 'data:image/jpg;base64,' + btoa(binary);
            $(`#${image_div}`).css('background-image', `url("${image_url}")`);
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error in getting document " + textStatus);
        }
    });
}

//car div on click
function carDivOnClick(id) {
    //split vehicle div id
    let split = id.split('-');

    //get vehicle div's brand
    let brand = $(`#${id}`).children('p').eq(0).text();

    for (let i = 0; i < vehicle_list.length; i++) {
        //check if car div's brand is equal to vehicle_list's brand
        if (vehicle_list[i].brand === brand) {

            //check if vehicle div is a category of the General, then add data to vehicle details container
            if (split[0].toLowerCase() === 'general') {

                //first: reset vehicle details container values every time when click a vehicle div
                resetVehicleDetailContainerValues('general-car-details-container', 'gn');

                //get image data
                let image_details = [vehicle_list[i].vehicleDetailList[0].image1, 'gn-car-image'];

                //second: set vehicle details container values every time when click a vehicle div
                setVehicleDetailsContainerValues('gn', image_details, vehicle_list[i].brand, vehicle_list[i].vid, vehicle_list[i].transmission_type,
                    vehicle_list[i].fuel_type, vehicle_list[i].no_of_passenger, vehicle_list[i].daily_rate, vehicle_list[i].monthly_rate,
                    vehicle_list[i].ldw_fee, vehicle_list[i].free_mileage, vehicle_list[i].extra_km_price, vehicle_list[i].vehicleDetailList.length);
            }

            //check if vehicle div is a category of the Premium, then add data to vehicle details container
            if (split[0].toLowerCase() === 'premium') {

                //first: reset vehicle details container values every time when click a vehicle div
                resetVehicleDetailContainerValues('premium-car-details-container', 'pr');

                //get image data
                let image_details = [vehicle_list[i].vehicleDetailList[0].image1, 'pr-car-image'];

                //second: set vehicle details container values every time when click a vehicle div
                setVehicleDetailsContainerValues('pr', image_details, vehicle_list[i].brand, vehicle_list[i].vid, vehicle_list[i].transmission_type,
                    vehicle_list[i].fuel_type, vehicle_list[i].no_of_passenger, vehicle_list[i].daily_rate, vehicle_list[i].monthly_rate,
                    vehicle_list[i].ldw_fee, vehicle_list[i].free_mileage, vehicle_list[i].extra_km_price, vehicle_list[i].vehicleDetailList.length);
            }

            //check if vehicle div is a category of the Luxury, then add data to vehicle details container
            if (split[0].toLowerCase() === 'luxury') {

                //first: reset vehicle details container values every time when click a vehicle div
                resetVehicleDetailContainerValues('luxury-car-details-container', 'lx');

                //get image data
                let image_details = [vehicle_list[i].vehicleDetailList[0].image1, 'lx-car-image'];

                //second: set vehicle details container values every time when click a vehicle div
                setVehicleDetailsContainerValues('lx', image_details, vehicle_list[i].brand, vehicle_list[i].vid, vehicle_list[i].transmission_type,
                    vehicle_list[i].fuel_type, vehicle_list[i].no_of_passenger, vehicle_list[i].daily_rate, vehicle_list[i].monthly_rate,
                    vehicle_list[i].ldw_fee, vehicle_list[i].free_mileage, vehicle_list[i].extra_km_price, vehicle_list[i].vehicleDetailList.length);
            }
        }
    }
}

//reset vehicle detail container values
function resetVehicleDetailContainerValues(parent, vehicle_ct) {
    //reset pickup date
    document.getElementById(`${vehicle_ct}-pickup-date`).valueAsDate = null;
    //reset return date
    document.getElementById(`${vehicle_ct}-return-date`).valueAsDate = null;
    //disable return date
    $(`#${vehicle_ct}-return-date`).prop("disabled", true);
    //disable driver checkbox
    $(`#${vehicle_ct}-driver`).prop("disabled", true);
    //uncheck driver checkbox
    $(`#${vehicle_ct}-driver`).prop('checked', false);
    //disable add to cart button
    $(`#${vehicle_ct}-btn-add-to-cart`).prop('disabled', true);
    //reset qty
    $(`#${vehicle_ct}-qty`).text(1);
    //rest rental fee
    $(`#${vehicle_ct}-rental-fee`).children('span').eq(0).text('0.00');
}

/*-----------------------------------------------------------------------------------------------------------------------*/


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
    $('#btn-reg-as-customer').css({
        background: 'none',
        color: 'black'
    });
    $('#btn-reg-as-driver').css({
        background: 'none',
        color: 'black'
    });
});
//registration view close
$('#btn-close-registration-view').click(function () {
    $('#registration-popup').css("display", "none");
    $('#popup-container').css('height', '550px');
});

//registration form loading
let user_role = 'customer';
//btn customer click
$('#btn-reg-as-customer').click(function () {
    $('#btn-reg-as-customer').css({
        background: 'gray',
        color: 'white'
    });
    $('#btn-reg-as-driver').css({
        background: 'none',
        color: 'black'
    });

    $('#popup-container').css('height', '690px');
    loadRegistrationForm();
    user_role = 'customer';
});
//btn driver click
$('#btn-reg-as-driver').click(function () {
    $('#btn-reg-as-driver').css({
        background: 'gray',
        color: 'white'
    });
    $('#btn-reg-as-customer').css({
        background: 'none',
        color: 'black'
    });

    $('#popup-container').css('height', '690px');
    loadRegistrationForm();
    user_role = 'driver';
});

function loadRegistrationForm() {
    $.ajax({
        method: 'GET',
        async: true,
        url: './views/userRegistrationForm.html',
        contentType: 'text/html',
        success: (data) => {
            $('#registration-form-container').html(data);
        }
    });
}


//register user
//register customer
$('.right-side').on('click', '#reg-btn-user', function () {
    let user_name = $('#txtRegName').val();
    let user_address = $('#txtRegAddress').val();
    let user_email = $('#txtRegEmail').val();
    let user_nic = $('#txtRegNic').val();
    let user_dr_license = $('#txtRegLicense').val();
    let user_contact = $('#txtRegContact').val();
    let user_password = $('#reg-password').val();


    let user_name_input = $('#txtRegName')[0];
    let user_address_input = $('#txtRegAddress')[0];
    let user_email_input = $('#txtRegEmail')[0];
    let user_nic_input = $('#txtRegNic')[0];
    let user_nic_image_input = $('#uploadNicImage')[0];
    let user_dr_license_input = $('#txtRegLicense')[0];
    let user_dr_license_image_input = $('#uploadLicenseImage')[0];
    let user_contact_input = $('#txtRegContact')[0];
    let user_password_input = $('#reg-password')[0];


    if (input_validation(user_name_input) && input_validation(user_address_input) && input_validation(user_email_input) && input_validation(user_nic_input)
        && input_validation(user_dr_license_input) && input_validation(user_contact_input) && input_validation(user_password_input) && input_validation(user_nic_image_input)
        && input_validation(user_dr_license_image_input)) {
        //check if user is a customer or driver & then add user
        if (user_role === 'customer') {
            //get customer nic image
            let customer_nic_image = $("#uploadNicImage")[0].files[0];
            let customer_nic_image_name = generated_user_id + '-' + generated_customer_id + "-nic_image";

            //get customer driving license image
            let customer_dr_license_image = $("#uploadLicenseImage")[0].files[0];
            let customer_dr_license_image_name = generated_user_id + '-' + generated_customer_id + "-dr_license_image";

            //add customer
            let customer_object = {
                id: generated_customer_id,
                user: {
                    uid: generated_user_id,
                    email: user_email,
                    password: user_password,
                    role: user_role
                },
                name: user_name,
                address: user_address,
                nic: user_nic,
                nic_image: customer_nic_image_name,
                dr_license: user_dr_license,
                dr_license_image: customer_dr_license_image_name,
                contact: user_contact
            }
            addUser(user_role, customer_object, customer_nic_image, customer_nic_image_name, customer_dr_license_image, customer_dr_license_image_name);

        } else if (user_role === 'driver') {
            //get driver nic image
            let driver_nic_image = $("#uploadNicImage")[0].files[0];
            let driver_nic_image_name = generated_user_id + '-' + generated_driver_id + "-nic_image";

            //get driver driving license image
            let driver_dr_license_image = $("#uploadLicenseImage")[0].files[0];
            let driver_dr_license_image_name = generated_user_id + '-' + generated_driver_id + "-dr_license_image";

            //add driver
            let driver_object = {
                did: generated_driver_id,
                user: {
                    uid: generated_user_id,
                    email: user_email,
                    password: user_password,
                    role: user_role
                },
                name: user_name,
                address: user_address,
                nic: user_nic,
                nic_image: driver_nic_image_name,
                dr_license: user_dr_license,
                dr_license_image: driver_dr_license_image_name,
                contact: user_contact,
                availability: "Available"
            }
            addUser(user_role, driver_object, driver_nic_image, driver_nic_image_name, driver_dr_license_image, driver_dr_license_image_name);
        }
    }

    /*if ($('#uploadNicImage').get(0).files.length > 0 && $('#uploadLicenseImage').get(0).files.length > 0) {
        //check if user is a customer or driver & then add user
        if (user_role === 'customer') {
            //get customer nic image
            let customer_nic_image = $("#uploadNicImage")[0].files[0];
            let customer_nic_image_name = generated_user_id + '-' + generated_customer_id + "-nic_image";

            //get customer driving license image
            let customer_dr_license_image = $("#uploadLicenseImage")[0].files[0];
            let customer_dr_license_image_name = generated_user_id + '-' + generated_customer_id + "-dr_license_image";

            //add customer
            let customer_object = {
                id: generated_customer_id,
                user: {
                    uid: generated_user_id,
                    email: user_email,
                    password: user_password,
                    role: user_role
                },
                name: user_name,
                address: user_address,
                nic: user_nic,
                nic_image: customer_nic_image_name,
                dr_license: user_dr_license,
                dr_license_image: customer_dr_license_image_name,
                contact: user_contact
            }
            addUser(user_role, customer_object, customer_nic_image, customer_nic_image_name, customer_dr_license_image, customer_dr_license_image_name);

        } else if (user_role === 'driver') {
            //get driver nic image
            let driver_nic_image = $("#uploadNicImage")[0].files[0];
            let driver_nic_image_name = generated_user_id + '-' + generated_driver_id + "-nic_image";

            //get driver driving license image
            let driver_dr_license_image = $("#uploadLicenseImage")[0].files[0];
            let driver_dr_license_image_name = generated_user_id + '-' + generated_driver_id + "-dr_license_image";

            //add driver
            let driver_object = {
                did: generated_driver_id,
                user: {
                    uid: generated_user_id,
                    email: user_email,
                    password: user_password,
                    role: user_role
                },
                name: user_name,
                address: user_address,
                nic: user_nic,
                nic_image: driver_nic_image_name,
                dr_license: user_dr_license,
                dr_license_image: driver_dr_license_image_name,
                contact: user_contact,
                availability: "Available"
            }
            addUser(user_role, driver_object, driver_nic_image, driver_nic_image_name, driver_dr_license_image, driver_dr_license_image_name);
        }

    } else {
        alert('Upload NIC & Driving License images');
    }*/
});

//add user
function addUser(user_role, obj, user_nic_image, user_nic_image_name, user_dr_license_image, user_dr_license_image_name) {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/login/' + user_role,
        method: 'post',
        async: true,
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(obj),
        success: function (response) {
            alert(response.message);

            //upload user nic image
            uploadUserNicAndLicenseImage(user_role + '/upload_image', user_nic_image, user_nic_image_name);
            //upload user driving license image
            uploadUserNicAndLicenseImage(user_role + '/upload_image', user_dr_license_image, user_dr_license_image_name);

            generateUserId();
            generateCustomerId();
            generateDriverId();
            resetRegistrationFormDetails();

            //close registration view
            $('#registration-popup').css("display", "none");
            $('#popup-container').css('height', '550px');
        }
    });
}

//reset registration form details
function resetRegistrationFormDetails() {
    $('#txtRegName').val('');
    $('#txtRegAddress').val('');
    $('#txtRegEmail').val('');
    $('#txtRegNic').val('');
    $('#uploadNicImage').val('');
    $('#txtRegLicense').val('');
    $('#uploadLicenseImage').val('');
    $('#txtRegContact').val('');
    $('#reg-password').val('');
}

//upload user nic image & driving license image
function uploadUserNicAndLicenseImage(path, image, fileName) {
    let image_file = new FormData();
    image_file.append("image", image, fileName);

    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/' + path,
        method: 'post',
        async: true,
        processData: false,
        contentType: false,
        data: image_file,
        success: function (response) {
        }
    });
}

//generate user id
let generated_user_id;

function generateUserId() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/login/lastid',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_uid = response.data;
                let newId = parseInt(last_uid.substring(1, 4)) + 1;
                if (newId < 10) {
                    generated_user_id = "U00" + newId;
                } else if (newId < 100) {
                    generated_user_id = "U0" + newId;
                } else {
                    generated_user_id = "U" + newId;
                }

            } catch (e) {
                generated_user_id = "U001";
            }
        }
    });
}

generateUserId();

//generate customer id
let generated_customer_id;

function generateCustomerId() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/customer/lastid',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_cid = response.data;
                let newId = parseInt(last_cid.substring(1, 4)) + 1;
                if (newId < 10) {
                    generated_customer_id = "C00" + newId;
                } else if (newId < 100) {
                    generated_customer_id = "C0" + newId;
                } else {
                    generated_customer_id = "C" + newId;
                }

            } catch (e) {
                generated_customer_id = "C001";
            }
        }
    });
}

generateCustomerId();

//generate driver id
let generated_driver_id;

function generateDriverId() {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/driver/lastid',
        method: 'get',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_did = response.data;
                let newId = parseInt(last_did.substring(1, 4)) + 1;
                if (newId < 10) {
                    generated_driver_id = "D00" + newId;
                } else if (newId < 100) {
                    generated_driver_id = "D0" + newId;
                } else {
                    generated_driver_id = "D" + newId;
                }

            } catch (e) {
                generated_driver_id = "D001";
            }
        }
    });
}

generateDriverId();


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

    let old_count = $('#notification-item-count').text();
    $('#notification-item-count').text(old_count - 1);
}


//--------------------------------------------Add item to cart------------------------------------------------------
//increment vehicle qty
function incrementVehicleQTY(id) {
    let parent = $(`#${id}`).closest('div').attr('id');
    let qty_id = $(`#${parent}`).children('span').eq(1).attr('id');
    let old_qty_value = parseInt($(`#${qty_id}`).text());

    //get left cars
    let split = $(`#${parent}`).children('span').eq(0).text().split('Left');
    let left_cars = parseInt(split[0]);

    //increment qty if left car value is greater than old qty value
    if (left_cars > old_qty_value) {
        $(`#${qty_id}`).text(old_qty_value + 1);
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

//check if vehicle already in the cart or not
function checkVehicleIsExistInCart(brand) {
    let x = 0;
    if ($('#cart-items-container').children().length > 0) {
        for (let i = 0; i < $('#cart-items-container').children().length; i++) {
            if ($('#cart-items-container').children('div').eq(i).children('p').eq(0).text().toLowerCase() === brand.toLowerCase()) {
                x = i;
                break;
            }
            x = -1;
        }
    } else {
        x = -1;
    }

    return x;
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
            //check if cart item count is less than 3 & then add item into the cart
            if (cart_items_count < 3) {

                //check if vehicle is already in the cart or not
                let x = checkVehicleIsExistInCart(brand);

                //add vehicle into the cart if it is not in the cart yet
                if (x === -1) {
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
                            'vid': ct_id
                        },
                        qty: qty,
                        driver: driver,
                        pickup_date: new_pickup_date.toLocaleDateString(),
                        return_date: new_return_date.toLocaleDateString(),
                        rental_fee: rental_fee,
                        ldw_fee: ldw_fee,
                        message: 'Your request is being processed. Thanks for connecting with us!',
                        status: 'show',
                    });
                    alert('Your vehicle is added to the cart!');
                    $('#cart-item-count').css('display', 'flex');
                    $('#cart-item-count').text(cart_items_count);

                } else {
                    alert('Your vehicle is already in the cart!');
                }


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
        alert('You should be logged in to buy vehicles');
        //jump to Login page
        document.getElementById("login").scrollIntoView({behavior: 'auto'});
    }
}

//check if the user is logged in or not
function checkIsUserLogged() {
    let user_name = $('#user-name').text();
    if (user_name.length > 0) {
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
    let customer_id = $('#user-id').text();

    //get cart total rental fee
    let total_rental_fee = parseFloat($('#cart_total_rental_fee').text());

    if ($('#bankSlip').get(0).files.length > 0) {
        //get bank slip image
        let fileObject = $("#bankSlip")[0].files[0];//access file object from input field
        let fileName = customer_id + '-' + request_id + "-bankslip"; //get file name

        //add request data & request details list's data into the request_list
        request = {
            rid: request_id,
            customer: {
                id: customer_id
            },
            total_fee: total_rental_fee,
            bank_slip: fileName,
            request_detail_list: request_details_list
        };

        $.ajax({
            url: 'http://localhost:8080/Easy_Car_Rental_Server/request',
            method: 'post',
            async: true,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(request),
            success: function (response) {
                uploadBankSlip(fileObject, fileName)
                alert(response.message);
                generateRequestID();
                emptyCart();
                getNotifications($('#user-id').text());
            }
        });
    } else {
        alert('Upload a bank slip!');
    }

});

//empty cart
function emptyCart() {
    $('#cart-items-container').children().remove();
    cart_items_count = 0;
    $('#cart_total_rental_fee').text('0.00');
    $('#bankSlip').val('');
    $('#cart-popup').css('display', 'none');
    $('#cart-item-count').css('display', 'none');
}

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


//get request notifications
function getNotifications(cid) {
    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/request/get_request',
        method: 'get',
        async: true,
        dataType: 'json',
        data: {
            cid: cid
        },
        success: function (response) {
            let notification_list = response.data;
            $('#notification-content-container').empty();
            for (let i = 0; i < notification_list.length; i++) {
                for (let j = 0; j < notification_list[i].request_detail_list.length; j++) {
                    $('#notification-item-count').css('display', 'flex');
                    $('#notification-content-container').append(
                        `
                        <div class="notification" id="notification${j}">
                            <span class="btn-remove-notification" id="btn-remove-notification${j}" onclick="removeNotification(this.id)">
                                <i class="fas fa-minus-circle"></i>
                            </span>
                            <p id="notification-message"><span>${notification_list[i].request_detail_list[j].message}</span></p>
                            <p id="notifiocation-rid">RID:<span>${notification_list[i].rid}</span></p>
                            <p id="notification-rental-fee">Rental Fee:<span>${notification_list[i].request_detail_list[j].rental_fee}</span></p>
                        </div>  
                        `
                    );
                    $('#notification-item-count').text(j + 1);
                }
            }
        }
    });
}
getNotifications($('#user-id').text());


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

// sign in button click
$('#btn-sign-in').click(function () {
    //get email
    let email = $('#txtEmail').val();
    //get password
    let password = $('#password').val();

    $.ajax({
        url: 'http://localhost:8080/Easy_Car_Rental_Server/login',
        method: 'get',
        async: true,
        data: {
            email: email,
            password: password
        },
        dataType: 'json',
        success: function (response) {
            try {
                if (response.data.role === 'admin') {
                    window.location.replace('https://lochanathiwanka.github.io/Easy_Car_Rental_Admin_Dashboard/');
                } else if (response.data.role === 'customer') {

                    //get customer data
                    $.ajax({
                        url: 'http://localhost:8080/Easy_Car_Rental_Server/customer/' + response.data.uid,
                        method: 'get',
                        dataType: 'json',
                        success: function (response2) {
                            //set user profile details
                            $('#user-name').text(response2.data.name);
                            $('#user-email').text(response.data.email);
                            $('#user-id').text(response2.data.id);

                            //clear email & password fields
                            $('#txtEmail').val('');
                            $('#password').val('');

                            //get notifications
                            getNotifications(response2.data.id);
                        }
                    });
                }
            } catch (e) {
                alert('User not found!');
            }
        }
    });
});


//input validation
function input_validation(value) {
    let input = value;
    const validityState = input.validity;

    if (validityState.valueMissing) {
        input.setCustomValidity('You gotta fill this out, yo!');
        input.reportValidity();
        return false;
    } else if (validityState.patternMismatch) {
        input.setCustomValidity('Regex error');
        input.reportValidity();
        return false;
    } else {
        input.setCustomValidity('');
        input.reportValidity();
        return true;
    }
}
