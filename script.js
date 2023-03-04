
var nav = document.getElementById("navBar");
window.addEventListener('resize', cent);
function cent() {
    var a = document.getElementById("navMain").clientWidth;
    if(a > "719"){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
    }
}
var b = 3;
function navbar(){
    if(b != 4){
        nav.style.display = "block";
        b = 4;
    }else{
        nav.style.display = "none";
        b = 3;
    }
}

var page = document.getElementById("main-page");
page.addEventListener("click",pageMain);
function pageMain(){
    window.open('/', '_self');
}
