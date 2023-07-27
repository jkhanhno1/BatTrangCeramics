
window.addEventListener("scroll", hienhop);
var vitribody = 0;
function hienhop() {
    vitribody = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(vitribody);
    if (vitribody >= 200) {

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

document.getElementById("vitri6").addEventListener("click", cuonxuonghop6);
document.getElementById("vitri66").addEventListener("click", cuonxuonghop6);
function cuonxuonghop6() {
    var vitri6 = document.getElementById("container6").offsetTop;
    window.scrollTo({
        top: vitri6,
        behavior: "smooth"
    });




}
document.getElementById("vitri5").addEventListener("click", cuonxuonghop5);
document.getElementById("vitri55").addEventListener("click", cuonxuonghop5);
function cuonxuonghop5() {
    var vitri5 = document.getElementById("container5").offsetTop;
    window.scrollTo({
        top: vitri5,
        behavior: "smooth"
    });



}
document.getElementById("vitri1").addEventListener("click", cuonxuonghop1);
function cuonxuonghop1() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



document.getElementById("iconmenu").addEventListener("click", hienhopmenu);
function hienhopmenu() {
    document.getElementById("hopmenu").classList.toggle("anhien");
}


window.addEventListener("scroll", hienhop1);
var vitribody1 = 0;


function hienhop1() {
    vitribody1 = document.body.scrollTop || document.documentElement.scrollTop;

    if (vitribody >= 200) {
        document.querySelector("#iconmenu").classList.add("iconmenuhienra")

    }
    else {
        document.querySelector(".nav").classList.add("navss");
        document.querySelector("#iconmenu").classList.remove("iconmenuhienra")
    }
    if (vitribody1 >= 1000) {
        document.querySelector(".banner-30").classList.add("banner-30tuduoilen")
    }
    if (vitribody1 >= 3200) {
        document.querySelector(".banner-30").classList.remove("banner-30tuduoilen")
    }
    if (vitribody1 < 1000) {
        document.querySelector(".banner-30").classList.remove("banner-30tuduoilen")
    }
    if (vitribody1 >= 2400) {
        document.querySelector(".thongsosanpham").classList.add("thongsosanphamsss")
    }

    //chuyendongtrangweb
    if (vitribody1 >= 250) {
        document.querySelector("#thanhchancuaTopCategories").classList.add("daira")
    }
    else if (vitribody1 <= 250) {
        document.querySelector("#thanhchancuaTopCategories").classList.remove("daira")
    }

    if (vitribody1 >= 700 && vitribody1 <= 1600) {
        document.getElementById("thanh1s").style.width = "10%";
        document.getElementById("thanh2s").style.width = "7%";
        document.getElementById("hopgioithieu1").classList.add("hopgioithieu1");
    }
    else {
        document.getElementById("thanh1s").style.width = "5%";
        document.getElementById("thanh2s").style.width = "5%";
        document.getElementById("hopgioithieu1").classList.remove("hopgioithieu1");
    }


}

document.getElementById("iconmenu1").addEventListener("click", removehopmenu);
function removehopmenu() {
    document.querySelector(".anhien").classList.remove("anhien");
}


document.getElementById("hopchua1").addEventListener('mouseover', function () {
    document.getElementById("hopchuacon1").classList.add('zoomdam');
});

document.getElementById("hopchua1").addEventListener('mouseleave', function () {
    document.getElementById("hopchuacon1").classList.remove('zoomdam');
});
document.getElementById("hopchua2").addEventListener('mouseover', function () {
    document.getElementById("hopchuacon2").classList.add('zoomdam');
});

document.getElementById("hopchua2").addEventListener('mouseout', function () {
    document.getElementById("hopchuacon2").classList.remove('zoomdam');
});
document.getElementById("hopchua3").addEventListener('mouseover', function () {
    document.getElementById("hopchuacon3").classList.add('zoomdam');
});

document.getElementById("hopchua3").addEventListener('mouseout', function () {
    document.getElementById("hopchuacon3").classList.remove('zoomdam');
});
document.getElementById("hopchua4").addEventListener('mouseover', function () {
    document.getElementById("hopchuacon4").classList.add('zoomdam');
});

document.getElementById("hopchua4").addEventListener('mouseout', function () {
    document.getElementById("hopchuacon4").classList.remove('zoomdam');
});



document.getElementById("anh11").addEventListener("mouseover", function () {
    var brank1 = document.getElementById("brank1");
    brank1.classList.add("trantop");
    document.getElementById("brank1").innerText = brank1.getAttribute("data-brank");
    document.getElementById("hopmo").style.opacity = "0.4";
    document.getElementById("anh111").classList.add("zom");
    document.querySelector(".hopchuadanhmuc").classList.add("hopchuadanhmucs");
});
document.getElementById("anh11").addEventListener("mouseout", function () {
    brank1.classList.remove("trantop");
    document.getElementById("hopmo").style.opacity = "0";
    document.getElementById("anh111").classList.remove("zom");
    document.querySelector(".hopchuadanhmuc").classList.remove("hopchuadanhmucs");
});



//sản phẩm bán chạy


var brank1 = document.getElementById("brank1");
document.getElementById("brank1").innerText = brank1.getAttribute("data-brank");
var brank2 = document.getElementById("brank2");
document.getElementById("brank2").innerText = brank2.getAttribute("data-brank");
var brank3 = document.getElementById("brank3");
document.getElementById("brank3").innerText = brank3.getAttribute("data-brank");

document.getElementById("anh22").addEventListener("mouseover", function () {
    var brank2 = document.getElementById("brank2");
    brank2.classList.add("trantop1");
    document.getElementById("brank2").innerText = brank2.getAttribute("data-brank");
    document.getElementById("hopmo").style.opacity = "0.4";
    document.getElementById("anh222").classList.add("zom");
    document.querySelector(".hopchuadanhmuc1").classList.add("hopchuadanhmucs");
});
document.getElementById("anh22").addEventListener("mouseout", function () {
    brank2.classList.remove("trantop1");
    document.getElementById("hopmo").style.opacity = "0";
    document.getElementById("anh222").classList.remove("zom");
    document.querySelector(".hopchuadanhmuc1").classList.remove("hopchuadanhmucs");
});


document.getElementById("anh33").addEventListener("mouseover", function () {
    var brank3 = document.getElementById("brank3");
    brank3.classList.add("trantop2");
    document.getElementById("brank3").innerText = brank3.getAttribute("data-brank");
    document.getElementById("hopmo").style.opacity = "0.4";
    document.getElementById("anh333").classList.add("zom");
    document.querySelector(".hopchuadanhmuc2").classList.add("hopchuadanhmucs");
});
document.getElementById("anh33").addEventListener("mouseout", function () {
    brank3.classList.remove("trantop2");
    document.getElementById("hopmo").style.opacity = "0";
    document.getElementById("anh333").classList.remove("zom");
    document.querySelector(".hopchuadanhmuc2").classList.remove("hopchuadanhmucs");
});

//mở hộp trình kiếm


