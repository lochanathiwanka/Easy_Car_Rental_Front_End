/*document.getElementById('photo1').style.backgroundImage = "url('https://i.ibb.co/6gG9W4K/car1.jpg')";
document.getElementById('photo2').style.backgroundImage = "url('https://i.ibb.co/SQdxKSF/car2.jpg')";
document.getElementById('photo3').style.backgroundImage = "url('https://i.ibb.co/GM5RHcS/car3.jpg')";
document.getElementById('photo4').style.backgroundImage = "url('https://i.ibb.co/Ph5K8zS/car4.jpg')";*/

/*
let images = [
    "https://i.ibb.co/6gG9W4K/car1.jpg",
    "https://i.ibb.co/SQdxKSF/car2.jpg",
    "https://i.ibb.co/GM5RHcS/car3.jpg",
    "https://i.ibb.co/Ph5K8zS/car4.jpg"
];

let home = document.getElementById("home");

let i = 0;
setInterval(function() {
    home.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i === images.length) {
        i =  0;
    }
}, 10000);*/


/*let images = [
    "https://i.ibb.co/6gG9W4K/car1.jpg",
    "https://i.ibb.co/SQdxKSF/car2.jpg",
    "https://i.ibb.co/GM5RHcS/car3.jpg",
    "https://i.ibb.co/Ph5K8zS/car4.jpg"
];
let i = 0;
function changeBg() {
    $('#home').css('background-image', 'url(' + images[i] + ')');
    $('#home').fadeIn(10); //this is new, will fade in smoothly
    i = i + 1;
    if (i === images.length) {
        i =  0;
    }
}
function changeBackgroundSmoothly() {
    $('#home').fadeOut(10, changeBg); //this is new, will fade out smoothly
}
setInterval(changeBackgroundSmoothly,5000);*/


let images = [
    "https://i.ibb.co/6gG9W4K/car1.jpg",
    "https://i.ibb.co/SQdxKSF/car2.jpg",
    "https://i.ibb.co/GM5RHcS/car3.jpg",
    "https://i.ibb.co/Ph5K8zS/car4.jpg"
];
let i = 0;

function nextBackground() {
    $("#home").css("background-image", "url(" + images[i] + ")");
    i = i + 1;
    if (i === images.length) {
        i = 0;
    }
}

setInterval(nextBackground, 8000);
