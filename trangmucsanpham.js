








































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
        nodecon[index].setAttribute("class", "hello");
        var slideImage = document.getElementById("anhhhhh");
        slideImage.style.opacity = 0;
        setTimeout(function () {
            slideImage.src = anhs[index].src;
            slideImage.style.opacity = 1;
        }, 200); // 0.3s for transition


    }
    else if (index == 3) {
        document.getElementById("anhhhhh").src = anhs[index].src;
        index = 0;
        document.getElementById("anhhhhh").src = anhs[index].src;
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello");
        var slideImage = document.getElementById("anhhhhh");
        slideImage.style.opacity = 0;
        setTimeout(function () {
            slideImage.src = anhs[index].src;
            slideImage.style.opacity = 1;
        }, 200); // 0.3s for transition
    }
}



function prev() {
    if (index == 0) {
        index = 3;
        document.getElementById("anhhhhh").src = anhs[index].src;
        console.log(index);
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello");

        var slideImage = document.getElementById("anhhhhh");
        slideImage.style.opacity = 0;
        setTimeout(function () {
            slideImage.src = anhs[index].src;
            slideImage.style.opacity = 1;
        }, 200); // 0.3s for transition

    }
    else if (index > 0) {
        index--;
        document.getElementById("anhhhhh").src = anhs[index].src;
        //
        document.querySelector(".hello").classList.remove("hello");
        nodecon[index].setAttribute("class", "hello")
        var slideImage = document.getElementById("anhhhhh");
        slideImage.style.opacity = 0;
        setTimeout(function () {
            slideImage.src = anhs[index].src;
            slideImage.style.opacity = 1;
        }, 200); // 0.3s for transition
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
}, 6000);




// kết thúc slide 1

document.getElementById("dong").addEventListener("click", function () {
    document.querySelector(".hopchuchays").classList.toggle("addclassdong");
})


var countDownDate = new Date("may 31, 2023 23:59:59").getTime();

var interval = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hopsale").innerHTML = "<span style=' background-color: aliceblue; padding:5px ; font-size:40px;border-radius:40%;color:#2980b9  '>" + days + "</span>" + " Ngày " + "<span style=' background-color: aliceblue; padding:5px;font-size:40px;border-radius:40%;color:#2980b9 '>" + hours + "</span>" + " Giờ " + "<span style=' background-color: aliceblue; padding:5px;font-size:40px;border-radius:40%;color:#2980b9 '>"
        + minutes + "</span>" + " Phút " + "<span style=' background-color: aliceblue; padding:5px;font-size:40px;border-radius:40%;color:#2980b9 '>" + seconds + "</span>" + " Giây ⏰" + "<br></br>" + " <span style='color:black ;font-family: 'Tillana', cursive;'>   </span> " + "<br>" + "<span style='color:black;font-family: 'Tillana', cursive;font-size:20px'>Gọi ngay để được tư vấn <ion-icon name='call-outline'></ion-icon> </span> " + "<h5 style='color:red;font-size:50px'> HotLine: 090519072004</h5>";

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("hopsale").innerHTML = "Đã Hết Thời Gian Giảm Giá cho Tất Cả Các Sản Phẩm";
    }
}, 1000);

///

function thongbaos() {
    document.getElementById("thongbaosanphamvaoyeuthich").classList.add("addthongbaosanphamvaoyeuthich");

    setTimeout(function thongbaoss() {
        document.getElementById("thongbaosanphamvaoyeuthich").classList.remove("addthongbaosanphamvaoyeuthich");
        location.reload();
    }, 1000
    )





}


document.getElementById("love0").addEventListener("click", love0);
function love0() {
    // Lấy đối tượng hành động yêu thích
    let anh11 = document.getElementById('anh11');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh11', anh11.outerHTML);

    thongbaos();

}
document.getElementById("love1").addEventListener("click", love1);
function love1() {
    // Lấy đối tượng hành động yêu thích
    let anh22 = document.getElementById('anh22');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh22', anh22.outerHTML);

    thongbaos();

}
document.getElementById("love2").addEventListener("click", love2);
function love2() {
    // Lấy đối tượng hành động yêu thích
    let anh33 = document.getElementById('anh33');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh33', anh33.outerHTML);
    thongbaos();

}

// banner-30
document.getElementById("love3").addEventListener("click", love3);
function love3() {
    // Lấy đối tượng hành động yêu thích
    let anh44 = document.getElementById('hopsp30-3');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh44', anh44.outerHTML);
    thongbaos();

}

document.getElementById("love4").addEventListener("click", love4);
function love4() {
    // Lấy đối tượng hành động yêu thích
    let anh55 = document.getElementById('hopsp30-4');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh55', anh55.outerHTML);
    thongbaos();

}

document.getElementById("love5").addEventListener("click", love5);
function love5() {
    // Lấy đối tượng hành động yêu thích
    let anh66 = document.getElementById('hopsp30-5');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh66', anh66.outerHTML);
    thongbaos();

}

document.getElementById("love6").addEventListener("click", love6);
function love6() {
    // Lấy đối tượng hành động yêu thích
    let anh77 = document.getElementById('hopsp30-6');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh77', anh77.outerHTML);
    thongbaos();

}
document.getElementById("love7").addEventListener("click", love7);
function love7() {
    // Lấy đối tượng hành động yêu thích
    let anh88 = document.getElementById('hopsp30-7');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh88', anh88.outerHTML);
    thongbaos();

}

document.getElementById("love8").addEventListener("click", love8);
function love8() {
    // Lấy đối tượng hành động yêu thích
    let anh99 = document.getElementById('hopsp30-8');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh99', anh99.outerHTML);
    thongbaos();

}
document.getElementById("love9").addEventListener("click", love9);
function love9() {
    // Lấy đối tượng hành động yêu thích
    let anh110 = document.getElementById('hopsp30-9');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh110', anh110.outerHTML);
    thongbaos();

}

document.getElementById("love10").addEventListener("click", love10);
function love10() {
    // Lấy đối tượng hành động yêu thích
    let anh120 = document.getElementById('hopsp30-10');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh120', anh120.outerHTML);
    thongbaos();

}

document.getElementById("love11").addEventListener("click", love11);
function love11() {
    // Lấy đối tượng hành động yêu thích
    let anh130 = document.getElementById('hopsp30-11');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh130', anh130.outerHTML);
    thongbaos();

}
document.getElementById("love12").addEventListener("click", love12);
function love12() {
    // Lấy đối tượng hành động yêu thích
    let anh140 = document.getElementById('hopsp30-12');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh140', anh140.outerHTML);
    thongbaos();

}

document.getElementById("love13").addEventListener("click", love13);
function love13() {
    // Lấy đối tượng hành động yêu thích
    let anh150 = document.getElementById('hopsp30-13');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh150', anh150.outerHTML);
    thongbaos();

}
document.getElementById("love14").addEventListener("click", love14);
function love14() {
    // Lấy đối tượng hành động yêu thích
    let anh155 = document.getElementById('hopsp30-14');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh155', anh155.outerHTML);
    thongbaos();

}
document.getElementById("love15").addEventListener("click", love15);
function love15() {
    // Lấy đối tượng hành động yêu thích
    let anh160 = document.getElementById('hopsp30-15');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh160', anh160.outerHTML);
    thongbaos();

}
document.getElementById("love16").addEventListener("click", love16);
function love16() {
    // Lấy đối tượng hành động yêu thích
    let anh170 = document.getElementById('hopsp30-16');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh170', anh170.outerHTML);
    thongbaos();

}
document.getElementById("love17").addEventListener("click", love17);
function love17() {
    // Lấy đối tượng hành động yêu thích
    let anh180 = document.getElementById('hopsp30-17');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh180', anh180.outerHTML);
    thongbaos();

}
document.getElementById("love18").addEventListener("click", love18);
function love18() {
    // Lấy đối tượng hành động yêu thích
    let anh190 = document.getElementById('hopsp30-18');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh190', anh190.outerHTML);
    thongbaos();

}
document.getElementById("love19").addEventListener("click", love19);
function love19() {
    // Lấy đối tượng hành động yêu thích
    let anh200 = document.getElementById('hopsp30-19');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh200', anh200.outerHTML);
    thongbaos();

}
document.getElementById("love20").addEventListener("click", love20);
function love20() {
    // Lấy đối tượng hành động yêu thích
    let anh210 = document.getElementById('hopsp30-20');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh210', anh210.outerHTML);
    thongbaos();

}
document.getElementById("love21").addEventListener("click", love21);
function love21() {
    // Lấy đối tượng hành động yêu thích
    let anh220 = document.getElementById('hopsp30-21');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh220', anh220.outerHTML);
    thongbaos();

}
document.getElementById("love22").addEventListener("click", love22);
function love22() {
    // Lấy đối tượng hành động yêu thích
    let anh230 = document.getElementById('hopsp30-22');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh230', anh230.outerHTML);
    thongbaos();

}
document.getElementById("love23").addEventListener("click", love23);
function love23() {
    // Lấy đối tượng hành động yêu thích
    let anh240 = document.getElementById('hopsp30-23');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh240', anh240.outerHTML);
    thongbaos();

}
document.getElementById("love24").addEventListener("click", love24);
function love24() {
    // Lấy đối tượng hành động yêu thích
    let anh250 = document.getElementById('hopsp30-24');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh250', anh250.outerHTML);
    thongbaos();

}
document.getElementById("love25").addEventListener("click", love25);
function love25() {
    // Lấy đối tượng hành động yêu thích
    let anh260 = document.getElementById('hopsp30-25');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh260', anh260.outerHTML);
    thongbaos();

}
document.getElementById("love26").addEventListener("click", love26);
function love26() {
    // Lấy đối tượng hành động yêu thích
    let anh270 = document.getElementById('hopsp30-26');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh270', anh270.outerHTML);
    thongbaos();

}
document.getElementById("love27").addEventListener("click", love27);
function love27() {
    // Lấy đối tượng hành động yêu thích
    let anh280 = document.getElementById('hopsp30-27');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh280', anh280.outerHTML);
    thongbaos();

}
document.getElementById("love28").addEventListener("click", love28);
function love28() {
    // Lấy đối tượng hành động yêu thích
    let anh290 = document.getElementById('hopsp30-28');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh290', anh290.outerHTML);
    thongbaos();

}
document.getElementById("love29").addEventListener("click", love29);
function love29() {
    // Lấy đối tượng hành động yêu thích
    let anh300 = document.getElementById('hopsp30-29');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh300', anh300.outerHTML);
    thongbaos();

}
document.getElementById("love30").addEventListener("click", love30);
function love30() {
    // Lấy đối tượng hành động yêu thích
    let anh310 = document.getElementById('hopsp30-30');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh310', anh310.outerHTML);
    thongbaos();

}
document.getElementById("love31").addEventListener("click", love31);
function love31() {
    // Lấy đối tượng hành động yêu thích
    let anh320 = document.getElementById('hopsp30-31');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh320', anh320.outerHTML);
    thongbaos();

}
document.getElementById("love32").addEventListener("click", love32);
function love32() {
    // Lấy đối tượng hành động yêu thích
    let anh330 = document.getElementById('hopsp30-32');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh330', anh330.outerHTML);
    thongbaos();

}
document.getElementById("love33").addEventListener("click", love33);
function love33() {
    // Lấy đối tượng hành động yêu thích
    let anh340 = document.getElementById('hopsp30-33');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh340', anh340.outerHTML);
    thongbaos();

}
document.getElementById("love34").addEventListener("click", love34);
function love34() {
    // Lấy đối tượng hành động yêu thích
    let anh350 = document.getElementById('hopsp30-34');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh350', anh350.outerHTML);
    thongbaos();

}
document.getElementById("love35").addEventListener("click", love35);
function love35() {
    // Lấy đối tượng hành động yêu thích
    let anh360 = document.getElementById('hopsp30-35');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh360', anh360.outerHTML);
    thongbaos();

}
document.getElementById("love36").addEventListener("click", love36);
function love36() {
    // Lấy đối tượng hành động yêu thích
    let anh370 = document.getElementById('hopsp30-36');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh370', anh370.outerHTML);
    thongbaos();

}
document.getElementById("love37").addEventListener("click", love37);
function love37() {
    // Lấy đối tượng hành động yêu thích
    let anh380 = document.getElementById('hopsp30-37');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh380', anh380.outerHTML);
    thongbaos();

}
document.getElementById("love38").addEventListener("click", love38);
function love38() {
    // Lấy đối tượng hành động yêu thích
    let anh390 = document.getElementById('hopsp30-38');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh390', anh390.outerHTML);
    thongbaos();

}
document.getElementById("love39").addEventListener("click", love39);
function love39() {
    // Lấy đối tượng hành động yêu thích
    let anh400 = document.getElementById('hopsp30-39');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh400', anh400.outerHTML);
    thongbaos();

}
document.getElementById("love40").addEventListener("click", love40);
function love40() {
    // Lấy đối tượng hành động yêu thích
    let anh410 = document.getElementById('hopsp30-40');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh410', anh410.outerHTML);
    thongbaos();

}
document.getElementById("love41").addEventListener("click", love41);
function love41() {
    // Lấy đối tượng hành động yêu thích
    let anh420 = document.getElementById('hopsp30-41');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh420', anh420.outerHTML);
    thongbaos();

}
document.getElementById("love42").addEventListener("click", love42);
function love42() {
    // Lấy đối tượng hành động yêu thích
    let anh430 = document.getElementById('hopsp30-42');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh430', anh430.outerHTML);
    thongbaos();

}
document.getElementById("love43").addEventListener("click", love43);
function love43() {
    // Lấy đối tượng hành động yêu thích
    let anh440 = document.getElementById('hopsp30-43');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh440', anh440.outerHTML);
    thongbaos();

}
document.getElementById("love44").addEventListener("click", love44);
function love44() {
    // Lấy đối tượng hành động yêu thích
    let anh450 = document.getElementById('hopsp30-44');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh450', anh450.outerHTML);
    thongbaos();

}
document.getElementById("love45").addEventListener("click", love45);
function love45() {
    // Lấy đối tượng hành động yêu thích
    let anh460 = document.getElementById('hopsp30-45');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh460', anh460.outerHTML);
    thongbaos();

}
document.getElementById("love46").addEventListener("click", love46);
function love46() {
    // Lấy đối tượng hành động yêu thích
    let anh470 = document.getElementById('hopsp30-46');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh470', anh470.outerHTML);
    thongbaos();

}
document.getElementById("love47").addEventListener("click", love47);
function love47() {
    // Lấy đối tượng hành động yêu thích
    let anh480 = document.getElementById('hopsp30-47');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh480', anh480.outerHTML);
    thongbaos();

}
document.getElementById("love48").addEventListener("click", love48);
function love48() {
    // Lấy đối tượng hành động yêu thích
    let anh490 = document.getElementById('hopsp30-48');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh490', anh490.outerHTML);
    thongbaos();

}
document.getElementById("love49").addEventListener("click", love49);
function love49() {
    // Lấy đối tượng hành động yêu thích
    let anh500 = document.getElementById('hopsp30-49');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh500', anh500.outerHTML);
    thongbaos();

}
document.getElementById("love50").addEventListener("click", love50);
function love50() {
    // Lấy đối tượng hành động yêu thích
    let anh510 = document.getElementById('hopsp30-50');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh510', anh510.outerHTML);
    thongbaos();

}
document.getElementById("love51").addEventListener("click", love51);
function love51() {
    // Lấy đối tượng hành động yêu thích
    let anh520 = document.getElementById('hopsp30-51');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh520', anh520.outerHTML);
    thongbaos();

}
//
function thongbaos() {
    document.getElementById("thongbaosanphamvaoyeuthich").classList.add("addthongbaosanphamvaoyeuthich");


    setTimeout(function thongbaoss() {
        document.getElementById("thongbaosanphamvaoyeuthich").classList.remove("addthongbaosanphamvaoyeuthich");


    }, 1000
    )


}



