var nodecon = document.querySelector(".hopnut0000").children;
console.log(nodecon);
//su li slide 1
//load trước ảnh 

var anhs = [];
var index = 0;


function loadanh() {
    for (var i = 0; i <= 3; i++) {
        anhs[i] = new Image();
        anhs[i].src = "anh/banner" + i + ".jpg";
    }
}
loadanh();
console.log(anhs)
document.getElementById("thanhphai").addEventListener("click", next);
document.getElementById("thanhtrai").addEventListener("click", prev);
function next() {

    if (index < 3) {
        index++;
        document.getElementById("anhhhhh").src = anhs[index].src;
        console.log(index);
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello")


    }
    else if (index == 3) {
        document.getElementById("anhhhhh").src = anhs[index].src;
        index = 0;
        document.getElementById("anhhhhh").src = anhs[index].src;
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello")
    }
}
function prev() {
    if (index == 0) {
        index = 3;
        document.getElementById("anhhhhh").src = anhs[index].src;
        console.log(index);
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello")

    }
    else if (index > 0) {
        index--;
        document.getElementById("anhhhhh").src = anhs[index].src;
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello")
    }

}

var nodecon1 = document.getElementById("hopnut0000").children;
console.log(nodecon1);
//
nodecon1[0].addEventListener("click", hao);
function hao() {
    document.querySelector(".hello").classList.remove("hello");
    nodecon[0].setAttribute("class", "hello")
    document.getElementById("anhhhhh").src = anhs[0].src;
    index = 0;
}
//
nodecon1[1].addEventListener("click", hao1);
function hao1() {
    document.querySelector(".hello").classList.remove("hello");
    nodecon[1].setAttribute("class", "hello")
    document.getElementById("anhhhhh").src = anhs[1].src;
    index = 1;
}
//
nodecon1[2].addEventListener("click", hao2);
function hao2() {
    document.querySelector(".hello").classList.remove("hello");
    nodecon[2].setAttribute("class", "hello")
    document.getElementById("anhhhhh").src = anhs[2].src;
    index = 2;
}
//
nodecon1[3].addEventListener("click", hao3);
function hao3() {
    document.querySelector(".hello").classList.remove("hello");
    nodecon[3].setAttribute("class", "hello")
    document.getElementById("anhhhhh").src = anhs[3].src;
    index = 3;
}
//
nodecon[index].setAttribute("class", "hello");
setInterval(function () {
    document.getElementById("thanhphai").click();




    if (index >= 0) {
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello")
    }
}, 5000);



/// kết thúc slide show 1 


document.getElementById("nut11111").addEventListener("click", function () {
    var activess = document.querySelector(".activesss");
    var btnact = document.querySelector("#nut11111");
    document.querySelector(".btnact").classList.remove("btnact")
    btnact.classList.add("btnact");
    if (activess) {
        activess.classList.remove("activesss");
        document.getElementById("p1").classList.add("activesss")
    }
})

document.getElementById("nut11112").addEventListener("click", function () {
    var activess = document.querySelector(".activesss");
    document.querySelector(".btnact").classList.remove("btnact")
    var btnact = document.querySelector("#nut11112");
    btnact.classList.add("btnact");
    if (activess) {
        activess.classList.remove("activesss");
        document.getElementById("p2").classList.add("activesss");

    }
})

document.getElementById("nut11113").addEventListener("click", function () {
    var activess = document.querySelector(".activesss");
    document.querySelector(".btnact").classList.remove("btnact")
    var btnact = document.querySelector("#nut11113");
    btnact.classList.add("btnact");
    if (activess) {
        activess.classList.remove("activesss");
        document.getElementById("p3").classList.add("activesss");

    }
})


//
document.getElementById("cms-banner").addEventListener("mousemove", function () {
    document.querySelector(".activeimg").classList.remove("activeimg");
    document.querySelector("#img").classList.add("activeimg");
});


document.getElementById("cms-banner").addEventListener("mouseleave", function () {
    document.querySelector(".activeimg").classList.remove("activeimg");
    document.querySelector("#img1").classList.add("activeimg");
});


// tự động hover vào sau 3s 
setInterval(function () {
    var element = document.getElementById("cms-banner");
    var event = new MouseEvent('mousemove', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    element.dispatchEvent(event);
}, 5000);
// remove sau 6s
setInterval(function () {
    var element = document.getElementById("cms-banner");
    var event = new MouseEvent('mouseleave', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    element.dispatchEvent(event);
}, 10000);

//


var countDownDate = new Date("may 31, 2023 23:59:59").getTime();

var interval = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hopsale").innerHTML = "  Thời Gian Sale Còn lại là   " + "<span style=' background-color: aliceblue; padding:5px ; font-size:40px;border-radius:40%;color:#2980b9  '>" + days + "</span>" + " Ngày " + "<span style=' background-color: aliceblue; padding:5px;font-size:40px;border-radius:40%;color:#2980b9 '>" + hours + "</span>" + " Giờ " + "<span style=' background-color: aliceblue; padding:5px;font-size:40px;border-radius:40%;color:#2980b9 '>"
        + minutes + "</span>" + " Phút " + "<span style=' background-color: aliceblue; padding:5px;font-size:40px;border-radius:40%;color:#2980b9 '>" + seconds + "</span>" + " Giây ⏰" + "<br></br>" + " <span style='color:black ;font-family: 'Tillana', cursive;'>   </span> " + "<br>" + "<span style='color:black;font-family: 'Tillana', cursive;'>Gọi ngay để được tư vấn</span> " + "<h5 style='color:red;font-size:50px'> HotLine: 090519072004</h5>";

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("hopsale").innerHTML = "Đã Hết Thời Gian Giảm Giá cho Tất Cả Các Sản Phẩm";
    }
}, 1000);