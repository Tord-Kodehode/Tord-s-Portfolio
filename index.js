function disable_scroll() {
    document.body.classList.add("stop-scrolling");
}

function enable_scroll() {
    document.body.classList.remove("stop-scrolling");

}

const eye = document.getElementsByClassName("eye")[0];
const eyeball = document.getElementsByClassName("ball")[0];
const menuButton = document.getElementsByClassName("toggle")[0];

function Toggle() {
    document.getElementById("pageMenu").style.height = "650px";
    disable_scroll();
    setTimeout(() => {
    eye.style.opacity = "1.0"
    eyeball.style.opacity = "1.0"
    menuButton.style.opacity = "0"
    }, 200);
}

function Toggleback() {
    document.getElementById("pageMenu").style.height = "0px";
    enable_scroll();
    setTimeout (() => {
    eye.style.opacity = "0"
    eyeball.style.opacity = "0"
    menuButton.style.opacity = "1.0"
    }, 200);
}


var ball = document.getElementsByClassName("ball");
    document.onmousemove = function() {
        var x = event.clientX * 20 / window.innerWidth + "%";
        var y = event.clientY * 30 / window.innerHeight + "%";

        for (var i = 0; i < 2; i++) {
            ball[i].style.left = x / 2;
            ball[i].style.top = y / 2;
            ball[i].style.transform = "translate(" + x + "," + y + ")";
        }
    }

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    }