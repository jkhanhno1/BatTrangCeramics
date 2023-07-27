window.addEventListener("scroll", hienhop);
var vitribody = 0;
function hienhop() {
    vitribody = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(vitribody);
    if (vitribody >= 200) {
        document.querySelector("#iconmenu").classList.add("iconmenuhienra")

        document.querySelector(".hoplen").classList.add("hoplenhienra");
    }
    if (vitribody <= 200) {

        document.querySelector(".hoplen").classList.remove("hoplenhienra");
        document.querySelector('.hoplen').classList.remove("lenmauxanh")
    }
}

document.getElementById("hoplen").addEventListener("mouseover", hoplen);
document.getElementById("hoplen").addEventListener("click", cuonlentop);
document.getElementById("hoplen").addEventListener("mouseleave", hopxuong);

function hoplen() {
    document.querySelector('.hoplen').classList.add("lenmauxanh");
}
function hopxuong() {
    document.querySelector('.hoplen').classList.remove("lenmauxanh");
}
function cuonlentop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


//

document.getElementById("iconmenu").addEventListener("click", hienhopmenu);
function hienhopmenu() {
    document.getElementById("hopmenu").classList.toggle("anhien");
}








window.addEventListener("scroll", hienhop1);



function hienhop1() {
    vitribody1 = document.body.scrollTop || document.documentElement.scrollTop;

    if (vitribody >= 200) {

    }
    else {
        document.querySelector(".nav").classList.add("navss");
        document.querySelector("#iconmenu").classList.remove("iconmenuhienra")
    }


}

document.getElementById("iconmenu1").addEventListener("click", removehopmenu);
function removehopmenu() {
    document.querySelector(".anhien").classList.remove("anhien");
}




//sản phẩm bán chạy


