var indexsc = 0;

// Hàm tính tổng số sản phẩm trong giỏ hàng
function tongso() {
    indexsc = 0; // Reset giá trị biến indexsc khi tính tổng số lượng sản phẩm
    for (var i = 0; i <= 51; i++) {
        var themvaogiohang = localStorage.getItem('themvaogiohang' + i);
        if (themvaogiohang) {
            indexsc++;
        }
    }
    localStorage.setItem("tongsogiohang", indexsc);
    document.getElementById("tongsanpham").innerHTML = localStorage.getItem("tongsogiohang");
}

// Gọi hàm tính tổng số sản phẩm trong giỏ hàng mỗi khi trang được tải hoặc có sự thay đổi trong localStorage
// tongso();

// function giohang0() {
//     let themvaogiohang0 = localStorage.getItem('themvaogiohang0');
//     if (themvaogiohang0) {
//         var themvaogiohang0m = document.createElement('div');
//         themvaogiohang0m.setAttribute('id', 'giohang0');
//         themvaogiohang0m.setAttribute('class', 'giohangm');
//         document.getElementById('hopgiohang').appendChild(themvaogiohang0m);
//         document.getElementById('giohang0').innerHTML = themvaogiohang0;
//         var input0m = document.createElement('input');
//         input0m.setAttribute('id', 'input0m');
//         input0m.setAttribute('class', 'inputs')
//         input0m.setAttribute('type', 'number');
//         input0m.setAttribute('min', '1');
//         input0m.setAttribute('value', '1');
//         var thanhtien0m = document.createElement('div');
//         thanhtien0m.setAttribute('id', 'thanhtien0');
//         thanhtien0m.setAttribute('class', 'thanhtienss');
//         var chutongtien = document.createElement('span');
//         chutongtien.setAttribute('id', 'tongtien0');
//         document.getElementById('giohang0').appendChild(input0m);
//         document.getElementById('giohang0').appendChild(chutongtien);
//         document.getElementById('giohang0').appendChild(thanhtien0m);
//         document.getElementById('tongtien0').innerText = 'Tong Tien';

//         var cc0 = document.getElementById("love0");
//         if (cc0) {

//             var dongia = cc0.getAttribute('data-price');
//             document.getElementById('thanhtien0').innerText = dongia * input0m.value;
//         }

//         const loveButton = document.querySelector('#themvaogiohang0');
//         if (loveButton) {
//             loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
//             loveButton.addEventListener('click', function () {
//                 thongbaos();
//                 localStorage.removeItem('themvaogiohang0');
//             })
//         } tontaithixoahop();
//     }

// }
// giohang0();
// function c0m() {
//     var cc0 = document.getElementById("love0");
//     if (cc0) {
//         input0m.addEventListener('input', function () {
//             var dongia = cc0.getAttribute('data-price');
//             document.getElementById('thanhtien0').innerText = dongia * input0m.value;

//         });

//     }
// }
// c0m();
function giohang0() {
    let themvaogiohang0 = localStorage.getItem('themvaogiohang0');
    if (themvaogiohang0) {
        var themvaogiohang0m = document.createElement('div');
        themvaogiohang0m.setAttribute('id', 'giohang0');
        themvaogiohang0m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang0m);
        document.getElementById('giohang0').innerHTML = themvaogiohang0;
        var input0m = document.createElement('input');
        input0m.setAttribute('id', 'input0m');
        input0m.setAttribute('class', 'inputs')
        input0m.setAttribute('type', 'number');
        input0m.setAttribute('min', '1');
        input0m.setAttribute('value', '1');
        var thanhtien0m = document.createElement('div');
        thanhtien0m.setAttribute('id', 'thanhtien0');
        thanhtien0m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien0');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang0').appendChild(input0m);
        document.getElementById('giohang0').appendChild(chutongtien);
        document.getElementById('giohang0').appendChild(thanhtien0m);
        var cc0 = document.getElementById('love0');
        if (cc0) {
            var dongia = cc0.getAttribute('data-price');
            document.getElementById('thanhtien0').innerText = dongia * input0m.value;
        }
        tongtien();
        document.getElementById('tongtien0').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang0');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang0');
            })
        } tontaithixoahop();
    }
}
giohang0();
function c0m() {

    var cc0 = document.getElementById('love0');
    if (cc0) {
        input0m.addEventListener('input', function () {
            var dongia = cc0.getAttribute('data-price');
            document.getElementById('thanhtien0').innerText = dongia * input0m.value;
        });
    }
}
c0m();
function giohang1() {
    let themvaogiohang1 = localStorage.getItem('themvaogiohang1');
    if (themvaogiohang1) {
        var themvaogiohang1m = document.createElement('div');
        themvaogiohang1m.setAttribute('id', 'giohang1');
        themvaogiohang1m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang1m);
        document.getElementById('giohang1').innerHTML = themvaogiohang1;
        var input1m = document.createElement('input');
        input1m.setAttribute('id', 'input1m');
        input1m.setAttribute('class', 'inputs')
        input1m.setAttribute('type', 'number');
        input1m.setAttribute('min', '1');
        input1m.setAttribute('value', '1');
        var thanhtien1m = document.createElement('div');
        thanhtien1m.setAttribute('id', 'thanhtien1');
        thanhtien1m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien1');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang1').appendChild(input1m);
        document.getElementById('giohang1').appendChild(chutongtien);
        document.getElementById('giohang1').appendChild(thanhtien1m);
        var cc1 = document.getElementById('love1');
        if (cc1) {
            var dongia = cc1.getAttribute('data-price');
            document.getElementById('thanhtien1').innerText = dongia * input1m.value;
        }
        tongtien();
        document.getElementById('tongtien1').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang1');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang1');
            })
        } tontaithixoahop();
    }
}
giohang1();
function c1m() {

    var cc1 = document.getElementById('love1');
    if (cc1) {
        input1m.addEventListener('input', function () {
            var dongia = cc1.getAttribute('data-price');
            document.getElementById('thanhtien1').innerText = dongia * input1m.value;
        });
    }
}
c1m();
function giohang2() {
    let themvaogiohang2 = localStorage.getItem('themvaogiohang2');
    if (themvaogiohang2) {
        var themvaogiohang2m = document.createElement('div');
        themvaogiohang2m.setAttribute('id', 'giohang2');
        themvaogiohang2m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang2m);
        document.getElementById('giohang2').innerHTML = themvaogiohang2;
        var input2m = document.createElement('input');
        input2m.setAttribute('id', 'input2m');
        input2m.setAttribute('class', 'inputs')
        input2m.setAttribute('type', 'number');
        input2m.setAttribute('min', '1');
        input2m.setAttribute('value', '1');
        var thanhtien2m = document.createElement('div');
        thanhtien2m.setAttribute('id', 'thanhtien2');
        thanhtien2m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien2');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang2').appendChild(input2m);
        document.getElementById('giohang2').appendChild(chutongtien);
        document.getElementById('giohang2').appendChild(thanhtien2m);
        var cc2 = document.getElementById('love2');
        if (cc2) {
            var dongia = cc2.getAttribute('data-price');
            document.getElementById('thanhtien2').innerText = dongia * input2m.value;
        }
        tongtien();
        document.getElementById('tongtien2').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang2');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang2');
            })
        } tontaithixoahop();
    }
}
giohang2();
function c2m() {

    var cc2 = document.getElementById('love2');
    if (cc2) {
        input2m.addEventListener('input', function () {
            var dongia = cc2.getAttribute('data-price');
            document.getElementById('thanhtien2').innerText = dongia * input2m.value;
        });
    }
}
c2m();
function giohang3() {
    let themvaogiohang3 = localStorage.getItem('themvaogiohang3');
    if (themvaogiohang3) {
        var themvaogiohang3m = document.createElement('div');
        themvaogiohang3m.setAttribute('id', 'giohang3');
        themvaogiohang3m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang3m);
        document.getElementById('giohang3').innerHTML = themvaogiohang3;
        var input3m = document.createElement('input');
        input3m.setAttribute('id', 'input3m');
        input3m.setAttribute('class', 'inputs')
        input3m.setAttribute('type', 'number');
        input3m.setAttribute('min', '1');
        input3m.setAttribute('value', '1');
        var thanhtien3m = document.createElement('div');
        thanhtien3m.setAttribute('id', 'thanhtien3');
        thanhtien3m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien3');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang3').appendChild(input3m);
        document.getElementById('giohang3').appendChild(chutongtien);
        document.getElementById('giohang3').appendChild(thanhtien3m);
        var cc3 = document.getElementById('love3');
        if (cc3) {
            var dongia = cc3.getAttribute('data-price');
            document.getElementById('thanhtien3').innerText = dongia * input3m.value;
        }
        tongtien();
        document.getElementById('tongtien3').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang3');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang3');
            })
        } tontaithixoahop();
    }
}
giohang3();
function c3m() {

    var cc3 = document.getElementById('love3');
    if (cc3) {
        input3m.addEventListener('input', function () {
            var dongia = cc3.getAttribute('data-price');
            document.getElementById('thanhtien3').innerText = dongia * input3m.value;
        });
    }
}
c3m();
function giohang4() {
    let themvaogiohang4 = localStorage.getItem('themvaogiohang4');
    if (themvaogiohang4) {
        var themvaogiohang4m = document.createElement('div');
        themvaogiohang4m.setAttribute('id', 'giohang4');
        themvaogiohang4m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang4m);
        document.getElementById('giohang4').innerHTML = themvaogiohang4;
        var input4m = document.createElement('input');
        input4m.setAttribute('id', 'input4m');
        input4m.setAttribute('class', 'inputs')
        input4m.setAttribute('type', 'number');
        input4m.setAttribute('min', '1');
        input4m.setAttribute('value', '1');
        var thanhtien4m = document.createElement('div');
        thanhtien4m.setAttribute('id', 'thanhtien4');
        thanhtien4m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien4');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang4').appendChild(input4m);
        document.getElementById('giohang4').appendChild(chutongtien);
        document.getElementById('giohang4').appendChild(thanhtien4m);
        var cc4 = document.getElementById('love4');
        if (cc4) {
            var dongia = cc4.getAttribute('data-price');
            document.getElementById('thanhtien4').innerText = dongia * input4m.value;
        }
        tongtien();
        document.getElementById('tongtien4').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang4');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang4');
            })
        } tontaithixoahop();
    }
}
giohang4();
function c4m() {

    var cc4 = document.getElementById('love4');
    if (cc4) {
        input4m.addEventListener('input', function () {
            var dongia = cc4.getAttribute('data-price');
            document.getElementById('thanhtien4').innerText = dongia * input4m.value;
        });
    }
}
c4m();
function giohang5() {
    let themvaogiohang5 = localStorage.getItem('themvaogiohang5');
    if (themvaogiohang5) {
        var themvaogiohang5m = document.createElement('div');
        themvaogiohang5m.setAttribute('id', 'giohang5');
        themvaogiohang5m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang5m);
        document.getElementById('giohang5').innerHTML = themvaogiohang5;
        var input5m = document.createElement('input');
        input5m.setAttribute('id', 'input5m');
        input5m.setAttribute('class', 'inputs')
        input5m.setAttribute('type', 'number');
        input5m.setAttribute('min', '1');
        input5m.setAttribute('value', '1');
        var thanhtien5m = document.createElement('div');
        thanhtien5m.setAttribute('id', 'thanhtien5');
        thanhtien5m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien5');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang5').appendChild(input5m);
        document.getElementById('giohang5').appendChild(chutongtien);
        document.getElementById('giohang5').appendChild(thanhtien5m);
        var cc5 = document.getElementById('love5');
        if (cc5) {
            var dongia = cc5.getAttribute('data-price');
            document.getElementById('thanhtien5').innerText = dongia * input5m.value;
        }
        tongtien();
        document.getElementById('tongtien5').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang5');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang5');
            })
        } tontaithixoahop();
    }
}
giohang5();
function c5m() {

    var cc5 = document.getElementById('love5');
    if (cc5) {
        input5m.addEventListener('input', function () {
            var dongia = cc5.getAttribute('data-price');
            document.getElementById('thanhtien5').innerText = dongia * input5m.value;
        });
    }
}
c5m();
function giohang6() {
    let themvaogiohang6 = localStorage.getItem('themvaogiohang6');
    if (themvaogiohang6) {
        var themvaogiohang6m = document.createElement('div');
        themvaogiohang6m.setAttribute('id', 'giohang6');
        themvaogiohang6m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang6m);
        document.getElementById('giohang6').innerHTML = themvaogiohang6;
        var input6m = document.createElement('input');
        input6m.setAttribute('id', 'input6m');
        input6m.setAttribute('class', 'inputs')
        input6m.setAttribute('type', 'number');
        input6m.setAttribute('min', '1');
        input6m.setAttribute('value', '1');
        var thanhtien6m = document.createElement('div');
        thanhtien6m.setAttribute('id', 'thanhtien6');
        thanhtien6m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien6');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang6').appendChild(input6m);
        document.getElementById('giohang6').appendChild(chutongtien);
        document.getElementById('giohang6').appendChild(thanhtien6m);
        var cc6 = document.getElementById('love6');
        if (cc6) {
            var dongia = cc6.getAttribute('data-price');
            document.getElementById('thanhtien6').innerText = dongia * input6m.value;
        }
        tongtien();
        document.getElementById('tongtien6').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang6');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang6');
            })
        } tontaithixoahop();
    }
}
giohang6();
function c6m() {

    var cc6 = document.getElementById('love6');
    if (cc6) {
        input6m.addEventListener('input', function () {
            var dongia = cc6.getAttribute('data-price');
            document.getElementById('thanhtien6').innerText = dongia * input6m.value;
        });
    }
}
c6m();
function giohang7() {
    let themvaogiohang7 = localStorage.getItem('themvaogiohang7');
    if (themvaogiohang7) {
        var themvaogiohang7m = document.createElement('div');
        themvaogiohang7m.setAttribute('id', 'giohang7');
        themvaogiohang7m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang7m);
        document.getElementById('giohang7').innerHTML = themvaogiohang7;
        var input7m = document.createElement('input');
        input7m.setAttribute('id', 'input7m');
        input7m.setAttribute('class', 'inputs')
        input7m.setAttribute('type', 'number');
        input7m.setAttribute('min', '1');
        input7m.setAttribute('value', '1');
        var thanhtien7m = document.createElement('div');
        thanhtien7m.setAttribute('id', 'thanhtien7');
        thanhtien7m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien7');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang7').appendChild(input7m);
        document.getElementById('giohang7').appendChild(chutongtien);
        document.getElementById('giohang7').appendChild(thanhtien7m);
        var cc7 = document.getElementById('love7');
        if (cc7) {
            var dongia = cc7.getAttribute('data-price');
            document.getElementById('thanhtien7').innerText = dongia * input7m.value;
        }
        tongtien();
        document.getElementById('tongtien7').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang7');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang7');
            })
        } tontaithixoahop();
    }
}
giohang7();
function c7m() {

    var cc7 = document.getElementById('love7');
    if (cc7) {
        input7m.addEventListener('input', function () {
            var dongia = cc7.getAttribute('data-price');
            document.getElementById('thanhtien7').innerText = dongia * input7m.value;
        });
    }
}
c7m();
function giohang8() {
    let themvaogiohang8 = localStorage.getItem('themvaogiohang8');
    if (themvaogiohang8) {
        var themvaogiohang8m = document.createElement('div');
        themvaogiohang8m.setAttribute('id', 'giohang8');
        themvaogiohang8m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang8m);
        document.getElementById('giohang8').innerHTML = themvaogiohang8;
        var input8m = document.createElement('input');
        input8m.setAttribute('id', 'input8m');
        input8m.setAttribute('class', 'inputs')
        input8m.setAttribute('type', 'number');
        input8m.setAttribute('min', '1');
        input8m.setAttribute('value', '1');
        var thanhtien8m = document.createElement('div');
        thanhtien8m.setAttribute('id', 'thanhtien8');
        thanhtien8m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien8');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang8').appendChild(input8m);
        document.getElementById('giohang8').appendChild(chutongtien);
        document.getElementById('giohang8').appendChild(thanhtien8m);
        var cc8 = document.getElementById('love8');
        if (cc8) {
            var dongia = cc8.getAttribute('data-price');
            document.getElementById('thanhtien8').innerText = dongia * input8m.value;
        }
        tongtien();
        document.getElementById('tongtien8').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang8');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang8');
            })
        } tontaithixoahop();
    }
}
giohang8();
function c8m() {

    var cc8 = document.getElementById('love8');
    if (cc8) {
        input8m.addEventListener('input', function () {
            var dongia = cc8.getAttribute('data-price');
            document.getElementById('thanhtien8').innerText = dongia * input8m.value;
        });
    }
}
c8m();
function giohang9() {
    let themvaogiohang9 = localStorage.getItem('themvaogiohang9');
    if (themvaogiohang9) {
        var themvaogiohang9m = document.createElement('div');
        themvaogiohang9m.setAttribute('id', 'giohang9');
        themvaogiohang9m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang9m);
        document.getElementById('giohang9').innerHTML = themvaogiohang9;
        var input9m = document.createElement('input');
        input9m.setAttribute('id', 'input9m');
        input9m.setAttribute('class', 'inputs')
        input9m.setAttribute('type', 'number');
        input9m.setAttribute('min', '1');
        input9m.setAttribute('value', '1');
        var thanhtien9m = document.createElement('div');
        thanhtien9m.setAttribute('id', 'thanhtien9');
        thanhtien9m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien9');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang9').appendChild(input9m);
        document.getElementById('giohang9').appendChild(chutongtien);
        document.getElementById('giohang9').appendChild(thanhtien9m);
        var cc9 = document.getElementById('love9');
        if (cc9) {
            var dongia = cc9.getAttribute('data-price');
            document.getElementById('thanhtien9').innerText = dongia * input9m.value;
        }
        tongtien();
        document.getElementById('tongtien9').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang9');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang9');
            })
        } tontaithixoahop();
    }
}
giohang9();
function c9m() {

    var cc9 = document.getElementById('love9');
    if (cc9) {
        input9m.addEventListener('input', function () {
            var dongia = cc9.getAttribute('data-price');
            document.getElementById('thanhtien9').innerText = dongia * input9m.value;
        });
    }
}
c9m();
function giohang10() {
    let themvaogiohang10 = localStorage.getItem('themvaogiohang10');
    if (themvaogiohang10) {
        var themvaogiohang10m = document.createElement('div');
        themvaogiohang10m.setAttribute('id', 'giohang10');
        themvaogiohang10m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang10m);
        document.getElementById('giohang10').innerHTML = themvaogiohang10;
        var input10m = document.createElement('input');
        input10m.setAttribute('id', 'input10m');
        input10m.setAttribute('class', 'inputs')
        input10m.setAttribute('type', 'number');
        input10m.setAttribute('min', '1');
        input10m.setAttribute('value', '1');
        var thanhtien10m = document.createElement('div');
        thanhtien10m.setAttribute('id', 'thanhtien10');
        thanhtien10m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien10');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang10').appendChild(input10m);
        document.getElementById('giohang10').appendChild(chutongtien);
        document.getElementById('giohang10').appendChild(thanhtien10m);
        var cc10 = document.getElementById('love10');
        if (cc10) {
            var dongia = cc10.getAttribute('data-price');
            document.getElementById('thanhtien10').innerText = dongia * input10m.value;
        }
        tongtien();
        document.getElementById('tongtien10').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang10');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang10');
            })
        } tontaithixoahop();
    }
}
giohang10();
function c10m() {

    var cc10 = document.getElementById('love10');
    if (cc10) {
        input10m.addEventListener('input', function () {
            var dongia = cc10.getAttribute('data-price');
            document.getElementById('thanhtien10').innerText = dongia * input10m.value;
        });
    }
}
c10m();
function giohang11() {
    let themvaogiohang11 = localStorage.getItem('themvaogiohang11');
    if (themvaogiohang11) {
        var themvaogiohang11m = document.createElement('div');
        themvaogiohang11m.setAttribute('id', 'giohang11');
        themvaogiohang11m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang11m);
        document.getElementById('giohang11').innerHTML = themvaogiohang11;
        var input11m = document.createElement('input');
        input11m.setAttribute('id', 'input11m');
        input11m.setAttribute('class', 'inputs')
        input11m.setAttribute('type', 'number');
        input11m.setAttribute('min', '1');
        input11m.setAttribute('value', '1');
        var thanhtien11m = document.createElement('div');
        thanhtien11m.setAttribute('id', 'thanhtien11');
        thanhtien11m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien11');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang11').appendChild(input11m);
        document.getElementById('giohang11').appendChild(chutongtien);
        document.getElementById('giohang11').appendChild(thanhtien11m);
        var cc11 = document.getElementById('love11');
        if (cc11) {
            var dongia = cc11.getAttribute('data-price');
            document.getElementById('thanhtien11').innerText = dongia * input11m.value;
        }
        tongtien();
        document.getElementById('tongtien11').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang11');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang11');
            })
        } tontaithixoahop();
    }
}
giohang11();
function c11m() {

    var cc11 = document.getElementById('love11');
    if (cc11) {
        input11m.addEventListener('input', function () {
            var dongia = cc11.getAttribute('data-price');
            document.getElementById('thanhtien11').innerText = dongia * input11m.value;
        });
    }
}
c11m();
function giohang12() {
    let themvaogiohang12 = localStorage.getItem('themvaogiohang12');
    if (themvaogiohang12) {
        var themvaogiohang12m = document.createElement('div');
        themvaogiohang12m.setAttribute('id', 'giohang12');
        themvaogiohang12m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang12m);
        document.getElementById('giohang12').innerHTML = themvaogiohang12;
        var input12m = document.createElement('input');
        input12m.setAttribute('id', 'input12m');
        input12m.setAttribute('class', 'inputs')
        input12m.setAttribute('type', 'number');
        input12m.setAttribute('min', '1');
        input12m.setAttribute('value', '1');
        var thanhtien12m = document.createElement('div');
        thanhtien12m.setAttribute('id', 'thanhtien12');
        thanhtien12m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien12');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang12').appendChild(input12m);
        document.getElementById('giohang12').appendChild(chutongtien);
        document.getElementById('giohang12').appendChild(thanhtien12m);
        var cc12 = document.getElementById('love12');
        if (cc12) {
            var dongia = cc12.getAttribute('data-price');
            document.getElementById('thanhtien12').innerText = dongia * input12m.value;
        }
        tongtien();
        document.getElementById('tongtien12').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang12');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang12');
            })
        } tontaithixoahop();
    }
}
giohang12();
function c12m() {

    var cc12 = document.getElementById('love12');
    if (cc12) {
        input12m.addEventListener('input', function () {
            var dongia = cc12.getAttribute('data-price');
            document.getElementById('thanhtien12').innerText = dongia * input12m.value;
        });
    }
}
c12m();
function giohang13() {
    let themvaogiohang13 = localStorage.getItem('themvaogiohang13');
    if (themvaogiohang13) {
        var themvaogiohang13m = document.createElement('div');
        themvaogiohang13m.setAttribute('id', 'giohang13');
        themvaogiohang13m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang13m);
        document.getElementById('giohang13').innerHTML = themvaogiohang13;
        var input13m = document.createElement('input');
        input13m.setAttribute('id', 'input13m');
        input13m.setAttribute('class', 'inputs')
        input13m.setAttribute('type', 'number');
        input13m.setAttribute('min', '1');
        input13m.setAttribute('value', '1');
        var thanhtien13m = document.createElement('div');
        thanhtien13m.setAttribute('id', 'thanhtien13');
        thanhtien13m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien13');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang13').appendChild(input13m);
        document.getElementById('giohang13').appendChild(chutongtien);
        document.getElementById('giohang13').appendChild(thanhtien13m);
        var cc13 = document.getElementById('love13');
        if (cc13) {
            var dongia = cc13.getAttribute('data-price');
            document.getElementById('thanhtien13').innerText = dongia * input13m.value;
        }
        tongtien();
        document.getElementById('tongtien13').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang13');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang13');
            })
        } tontaithixoahop();
    }
}
giohang13();
function c13m() {

    var cc13 = document.getElementById('love13');
    if (cc13) {
        input13m.addEventListener('input', function () {
            var dongia = cc13.getAttribute('data-price');
            document.getElementById('thanhtien13').innerText = dongia * input13m.value;
        });
    }
}
c13m();
function giohang14() {
    let themvaogiohang14 = localStorage.getItem('themvaogiohang14');
    if (themvaogiohang14) {
        var themvaogiohang14m = document.createElement('div');
        themvaogiohang14m.setAttribute('id', 'giohang14');
        themvaogiohang14m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang14m);
        document.getElementById('giohang14').innerHTML = themvaogiohang14;
        var input14m = document.createElement('input');
        input14m.setAttribute('id', 'input14m');
        input14m.setAttribute('class', 'inputs')
        input14m.setAttribute('type', 'number');
        input14m.setAttribute('min', '1');
        input14m.setAttribute('value', '1');
        var thanhtien14m = document.createElement('div');
        thanhtien14m.setAttribute('id', 'thanhtien14');
        thanhtien14m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien14');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang14').appendChild(input14m);
        document.getElementById('giohang14').appendChild(chutongtien);
        document.getElementById('giohang14').appendChild(thanhtien14m);
        var cc14 = document.getElementById('love14');
        if (cc14) {
            var dongia = cc14.getAttribute('data-price');
            document.getElementById('thanhtien14').innerText = dongia * input14m.value;
        }
        tongtien();
        document.getElementById('tongtien14').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang14');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang14');
            })
        } tontaithixoahop();
    }
}
giohang14();
function c14m() {

    var cc14 = document.getElementById('love14');
    if (cc14) {
        input14m.addEventListener('input', function () {
            var dongia = cc14.getAttribute('data-price');
            document.getElementById('thanhtien14').innerText = dongia * input14m.value;
        });
    }
}
c14m();
function giohang15() {
    let themvaogiohang15 = localStorage.getItem('themvaogiohang15');
    if (themvaogiohang15) {
        var themvaogiohang15m = document.createElement('div');
        themvaogiohang15m.setAttribute('id', 'giohang15');
        themvaogiohang15m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang15m);
        document.getElementById('giohang15').innerHTML = themvaogiohang15;
        var input15m = document.createElement('input');
        input15m.setAttribute('id', 'input15m');
        input15m.setAttribute('class', 'inputs')
        input15m.setAttribute('type', 'number');
        input15m.setAttribute('min', '1');
        input15m.setAttribute('value', '1');
        var thanhtien15m = document.createElement('div');
        thanhtien15m.setAttribute('id', 'thanhtien15');
        thanhtien15m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien15');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang15').appendChild(input15m);
        document.getElementById('giohang15').appendChild(chutongtien);
        document.getElementById('giohang15').appendChild(thanhtien15m);
        var cc15 = document.getElementById('love15');
        if (cc15) {
            var dongia = cc15.getAttribute('data-price');
            document.getElementById('thanhtien15').innerText = dongia * input15m.value;
        }
        tongtien();
        document.getElementById('tongtien15').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang15');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang15');
            })
        } tontaithixoahop();
    }
}
giohang15();
function c15m() {

    var cc15 = document.getElementById('love15');
    if (cc15) {
        input15m.addEventListener('input', function () {
            var dongia = cc15.getAttribute('data-price');
            document.getElementById('thanhtien15').innerText = dongia * input15m.value;
        });
    }
}
c15m();
function giohang16() {
    let themvaogiohang16 = localStorage.getItem('themvaogiohang16');
    if (themvaogiohang16) {
        var themvaogiohang16m = document.createElement('div');
        themvaogiohang16m.setAttribute('id', 'giohang16');
        themvaogiohang16m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang16m);
        document.getElementById('giohang16').innerHTML = themvaogiohang16;
        var input16m = document.createElement('input');
        input16m.setAttribute('id', 'input16m');
        input16m.setAttribute('class', 'inputs')
        input16m.setAttribute('type', 'number');
        input16m.setAttribute('min', '1');
        input16m.setAttribute('value', '1');
        var thanhtien16m = document.createElement('div');
        thanhtien16m.setAttribute('id', 'thanhtien16');
        thanhtien16m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien16');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang16').appendChild(input16m);
        document.getElementById('giohang16').appendChild(chutongtien);
        document.getElementById('giohang16').appendChild(thanhtien16m);
        var cc16 = document.getElementById('love16');
        if (cc16) {
            var dongia = cc16.getAttribute('data-price');
            document.getElementById('thanhtien16').innerText = dongia * input16m.value;
        }
        tongtien();
        document.getElementById('tongtien16').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang16');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang16');
            })
        } tontaithixoahop();
    }
}
giohang16();
function c16m() {

    var cc16 = document.getElementById('love16');
    if (cc16) {
        input16m.addEventListener('input', function () {
            var dongia = cc16.getAttribute('data-price');
            document.getElementById('thanhtien16').innerText = dongia * input16m.value;
        });
    }
}
c16m();
function giohang17() {
    let themvaogiohang17 = localStorage.getItem('themvaogiohang17');
    if (themvaogiohang17) {
        var themvaogiohang17m = document.createElement('div');
        themvaogiohang17m.setAttribute('id', 'giohang17');
        themvaogiohang17m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang17m);
        document.getElementById('giohang17').innerHTML = themvaogiohang17;
        var input17m = document.createElement('input');
        input17m.setAttribute('id', 'input17m');
        input17m.setAttribute('class', 'inputs')
        input17m.setAttribute('type', 'number');
        input17m.setAttribute('min', '1');
        input17m.setAttribute('value', '1');
        var thanhtien17m = document.createElement('div');
        thanhtien17m.setAttribute('id', 'thanhtien17');
        thanhtien17m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien17');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang17').appendChild(input17m);
        document.getElementById('giohang17').appendChild(chutongtien);
        document.getElementById('giohang17').appendChild(thanhtien17m);
        var cc17 = document.getElementById('love17');
        if (cc17) {
            var dongia = cc17.getAttribute('data-price');
            document.getElementById('thanhtien17').innerText = dongia * input17m.value;
        }
        tongtien();
        document.getElementById('tongtien17').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang17');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang17');
            })
        } tontaithixoahop();
    }
}
giohang17();
function c17m() {

    var cc17 = document.getElementById('love17');
    if (cc17) {
        input17m.addEventListener('input', function () {
            var dongia = cc17.getAttribute('data-price');
            document.getElementById('thanhtien17').innerText = dongia * input17m.value;
        });
    }
}
c17m();
function giohang18() {
    let themvaogiohang18 = localStorage.getItem('themvaogiohang18');
    if (themvaogiohang18) {
        var themvaogiohang18m = document.createElement('div');
        themvaogiohang18m.setAttribute('id', 'giohang18');
        themvaogiohang18m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang18m);
        document.getElementById('giohang18').innerHTML = themvaogiohang18;
        var input18m = document.createElement('input');
        input18m.setAttribute('id', 'input18m');
        input18m.setAttribute('class', 'inputs')
        input18m.setAttribute('type', 'number');
        input18m.setAttribute('min', '1');
        input18m.setAttribute('value', '1');
        var thanhtien18m = document.createElement('div');
        thanhtien18m.setAttribute('id', 'thanhtien18');
        thanhtien18m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien18');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang18').appendChild(input18m);
        document.getElementById('giohang18').appendChild(chutongtien);
        document.getElementById('giohang18').appendChild(thanhtien18m);
        var cc18 = document.getElementById('love18');
        if (cc18) {
            var dongia = cc18.getAttribute('data-price');
            document.getElementById('thanhtien18').innerText = dongia * input18m.value;
        }
        tongtien();
        document.getElementById('tongtien18').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang18');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang18');
            })
        } tontaithixoahop();
    }
}
giohang18();
function c18m() {

    var cc18 = document.getElementById('love18');
    if (cc18) {
        input18m.addEventListener('input', function () {
            var dongia = cc18.getAttribute('data-price');
            document.getElementById('thanhtien18').innerText = dongia * input18m.value;
        });
    }
}
c18m();
function giohang19() {
    let themvaogiohang19 = localStorage.getItem('themvaogiohang19');
    if (themvaogiohang19) {
        var themvaogiohang19m = document.createElement('div');
        themvaogiohang19m.setAttribute('id', 'giohang19');
        themvaogiohang19m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang19m);
        document.getElementById('giohang19').innerHTML = themvaogiohang19;
        var input19m = document.createElement('input');
        input19m.setAttribute('id', 'input19m');
        input19m.setAttribute('class', 'inputs')
        input19m.setAttribute('type', 'number');
        input19m.setAttribute('min', '1');
        input19m.setAttribute('value', '1');
        var thanhtien19m = document.createElement('div');
        thanhtien19m.setAttribute('id', 'thanhtien19');
        thanhtien19m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien19');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang19').appendChild(input19m);
        document.getElementById('giohang19').appendChild(chutongtien);
        document.getElementById('giohang19').appendChild(thanhtien19m);
        var cc19 = document.getElementById('love19');
        if (cc19) {
            var dongia = cc19.getAttribute('data-price');
            document.getElementById('thanhtien19').innerText = dongia * input19m.value;
        }
        tongtien();
        document.getElementById('tongtien19').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang19');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang19');
            })
        } tontaithixoahop();
    }
}
giohang19();
function c19m() {

    var cc19 = document.getElementById('love19');
    if (cc19) {
        input19m.addEventListener('input', function () {
            var dongia = cc19.getAttribute('data-price');
            document.getElementById('thanhtien19').innerText = dongia * input19m.value;
        });
    }
}
c19m();
function giohang20() {
    let themvaogiohang20 = localStorage.getItem('themvaogiohang20');
    if (themvaogiohang20) {
        var themvaogiohang20m = document.createElement('div');
        themvaogiohang20m.setAttribute('id', 'giohang20');
        themvaogiohang20m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang20m);
        document.getElementById('giohang20').innerHTML = themvaogiohang20;
        var input20m = document.createElement('input');
        input20m.setAttribute('id', 'input20m');
        input20m.setAttribute('class', 'inputs')
        input20m.setAttribute('type', 'number');
        input20m.setAttribute('min', '1');
        input20m.setAttribute('value', '1');
        var thanhtien20m = document.createElement('div');
        thanhtien20m.setAttribute('id', 'thanhtien20');
        thanhtien20m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien20');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang20').appendChild(input20m);
        document.getElementById('giohang20').appendChild(chutongtien);
        document.getElementById('giohang20').appendChild(thanhtien20m);
        var cc20 = document.getElementById('love20');
        if (cc20) {
            var dongia = cc20.getAttribute('data-price');
            document.getElementById('thanhtien20').innerText = dongia * input20m.value;
        }
        tongtien();
        document.getElementById('tongtien20').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang20');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang20');
            })
        } tontaithixoahop();
    }
}
giohang20();
function c20m() {

    var cc20 = document.getElementById('love20');
    if (cc20) {
        input20m.addEventListener('input', function () {
            var dongia = cc20.getAttribute('data-price');
            document.getElementById('thanhtien20').innerText = dongia * input20m.value;
        });
    }
}
c20m();
function giohang21() {
    let themvaogiohang21 = localStorage.getItem('themvaogiohang21');
    if (themvaogiohang21) {
        var themvaogiohang21m = document.createElement('div');
        themvaogiohang21m.setAttribute('id', 'giohang21');
        themvaogiohang21m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang21m);
        document.getElementById('giohang21').innerHTML = themvaogiohang21;
        var input21m = document.createElement('input');
        input21m.setAttribute('id', 'input21m');
        input21m.setAttribute('class', 'inputs')
        input21m.setAttribute('type', 'number');
        input21m.setAttribute('min', '1');
        input21m.setAttribute('value', '1');
        var thanhtien21m = document.createElement('div');
        thanhtien21m.setAttribute('id', 'thanhtien21');
        thanhtien21m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien21');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang21').appendChild(input21m);
        document.getElementById('giohang21').appendChild(chutongtien);
        document.getElementById('giohang21').appendChild(thanhtien21m);
        var cc21 = document.getElementById('love21');
        if (cc21) {
            var dongia = cc21.getAttribute('data-price');
            document.getElementById('thanhtien21').innerText = dongia * input21m.value;
        }
        tongtien();
        document.getElementById('tongtien21').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang21');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang21');
            })
        } tontaithixoahop();
    }
}
giohang21();
function c21m() {

    var cc21 = document.getElementById('love21');
    if (cc21) {
        input21m.addEventListener('input', function () {
            var dongia = cc21.getAttribute('data-price');
            document.getElementById('thanhtien21').innerText = dongia * input21m.value;
        });
    }
}
c21m();
function giohang22() {
    let themvaogiohang22 = localStorage.getItem('themvaogiohang22');
    if (themvaogiohang22) {
        var themvaogiohang22m = document.createElement('div');
        themvaogiohang22m.setAttribute('id', 'giohang22');
        themvaogiohang22m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang22m);
        document.getElementById('giohang22').innerHTML = themvaogiohang22;
        var input22m = document.createElement('input');
        input22m.setAttribute('id', 'input22m');
        input22m.setAttribute('class', 'inputs')
        input22m.setAttribute('type', 'number');
        input22m.setAttribute('min', '1');
        input22m.setAttribute('value', '1');
        var thanhtien22m = document.createElement('div');
        thanhtien22m.setAttribute('id', 'thanhtien22');
        thanhtien22m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien22');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang22').appendChild(input22m);
        document.getElementById('giohang22').appendChild(chutongtien);
        document.getElementById('giohang22').appendChild(thanhtien22m);
        var cc22 = document.getElementById('love22');
        if (cc22) {
            var dongia = cc22.getAttribute('data-price');
            document.getElementById('thanhtien22').innerText = dongia * input22m.value;
        }
        tongtien();
        document.getElementById('tongtien22').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang22');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang22');
            })
        } tontaithixoahop();
    }
}
giohang22();
function c22m() {

    var cc22 = document.getElementById('love22');
    if (cc22) {
        input22m.addEventListener('input', function () {
            var dongia = cc22.getAttribute('data-price');
            document.getElementById('thanhtien22').innerText = dongia * input22m.value;
        });
    }
}
c22m();
function giohang23() {
    let themvaogiohang23 = localStorage.getItem('themvaogiohang23');
    if (themvaogiohang23) {
        var themvaogiohang23m = document.createElement('div');
        themvaogiohang23m.setAttribute('id', 'giohang23');
        themvaogiohang23m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang23m);
        document.getElementById('giohang23').innerHTML = themvaogiohang23;
        var input23m = document.createElement('input');
        input23m.setAttribute('id', 'input23m');
        input23m.setAttribute('class', 'inputs')
        input23m.setAttribute('type', 'number');
        input23m.setAttribute('min', '1');
        input23m.setAttribute('value', '1');
        var thanhtien23m = document.createElement('div');
        thanhtien23m.setAttribute('id', 'thanhtien23');
        thanhtien23m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien23');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang23').appendChild(input23m);
        document.getElementById('giohang23').appendChild(chutongtien);
        document.getElementById('giohang23').appendChild(thanhtien23m);
        var cc23 = document.getElementById('love23');
        if (cc23) {
            var dongia = cc23.getAttribute('data-price');
            document.getElementById('thanhtien23').innerText = dongia * input23m.value;
        }
        tongtien();
        document.getElementById('tongtien23').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang23');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang23');
            })
        } tontaithixoahop();
    }
}
giohang23();
function c23m() {

    var cc23 = document.getElementById('love23');
    if (cc23) {
        input23m.addEventListener('input', function () {
            var dongia = cc23.getAttribute('data-price');
            document.getElementById('thanhtien23').innerText = dongia * input23m.value;
        });
    }
}
c23m();
function giohang24() {
    let themvaogiohang24 = localStorage.getItem('themvaogiohang24');
    if (themvaogiohang24) {
        var themvaogiohang24m = document.createElement('div');
        themvaogiohang24m.setAttribute('id', 'giohang24');
        themvaogiohang24m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang24m);
        document.getElementById('giohang24').innerHTML = themvaogiohang24;
        var input24m = document.createElement('input');
        input24m.setAttribute('id', 'input24m');
        input24m.setAttribute('class', 'inputs')
        input24m.setAttribute('type', 'number');
        input24m.setAttribute('min', '1');
        input24m.setAttribute('value', '1');
        var thanhtien24m = document.createElement('div');
        thanhtien24m.setAttribute('id', 'thanhtien24');
        thanhtien24m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien24');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang24').appendChild(input24m);
        document.getElementById('giohang24').appendChild(chutongtien);
        document.getElementById('giohang24').appendChild(thanhtien24m);
        var cc24 = document.getElementById('love24');
        if (cc24) {
            var dongia = cc24.getAttribute('data-price');
            document.getElementById('thanhtien24').innerText = dongia * input24m.value;
        }
        tongtien();
        document.getElementById('tongtien24').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang24');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang24');
            })
        } tontaithixoahop();
    }
}
giohang24();
function c24m() {

    var cc24 = document.getElementById('love24');
    if (cc24) {
        input24m.addEventListener('input', function () {
            var dongia = cc24.getAttribute('data-price');
            document.getElementById('thanhtien24').innerText = dongia * input24m.value;
        });
    }
}
c24m();
function giohang25() {
    let themvaogiohang25 = localStorage.getItem('themvaogiohang25');
    if (themvaogiohang25) {
        var themvaogiohang25m = document.createElement('div');
        themvaogiohang25m.setAttribute('id', 'giohang25');
        themvaogiohang25m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang25m);
        document.getElementById('giohang25').innerHTML = themvaogiohang25;
        var input25m = document.createElement('input');
        input25m.setAttribute('id', 'input25m');
        input25m.setAttribute('class', 'inputs')
        input25m.setAttribute('type', 'number');
        input25m.setAttribute('min', '1');
        input25m.setAttribute('value', '1');
        var thanhtien25m = document.createElement('div');
        thanhtien25m.setAttribute('id', 'thanhtien25');
        thanhtien25m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien25');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang25').appendChild(input25m);
        document.getElementById('giohang25').appendChild(chutongtien);
        document.getElementById('giohang25').appendChild(thanhtien25m);
        var cc25 = document.getElementById('love25');
        if (cc25) {
            var dongia = cc25.getAttribute('data-price');
            document.getElementById('thanhtien25').innerText = dongia * input25m.value;
        }
        tongtien();
        document.getElementById('tongtien25').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang25');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang25');
            })
        } tontaithixoahop();
    }
}
giohang25();
function c25m() {

    var cc25 = document.getElementById('love25');
    if (cc25) {
        input25m.addEventListener('input', function () {
            var dongia = cc25.getAttribute('data-price');
            document.getElementById('thanhtien25').innerText = dongia * input25m.value;
        });
    }
}
c25m();
function giohang26() {
    let themvaogiohang26 = localStorage.getItem('themvaogiohang26');
    if (themvaogiohang26) {
        var themvaogiohang26m = document.createElement('div');
        themvaogiohang26m.setAttribute('id', 'giohang26');
        themvaogiohang26m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang26m);
        document.getElementById('giohang26').innerHTML = themvaogiohang26;
        var input26m = document.createElement('input');
        input26m.setAttribute('id', 'input26m');
        input26m.setAttribute('class', 'inputs')
        input26m.setAttribute('type', 'number');
        input26m.setAttribute('min', '1');
        input26m.setAttribute('value', '1');
        var thanhtien26m = document.createElement('div');
        thanhtien26m.setAttribute('id', 'thanhtien26');
        thanhtien26m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien26');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang26').appendChild(input26m);
        document.getElementById('giohang26').appendChild(chutongtien);
        document.getElementById('giohang26').appendChild(thanhtien26m);
        var cc26 = document.getElementById('love26');
        if (cc26) {
            var dongia = cc26.getAttribute('data-price');
            document.getElementById('thanhtien26').innerText = dongia * input26m.value;
        }
        tongtien();
        document.getElementById('tongtien26').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang26');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang26');
            })
        } tontaithixoahop();
    }
}
giohang26();
function c26m() {

    var cc26 = document.getElementById('love26');
    if (cc26) {
        input26m.addEventListener('input', function () {
            var dongia = cc26.getAttribute('data-price');
            document.getElementById('thanhtien26').innerText = dongia * input26m.value;
        });
    }
}
c26m();
function giohang27() {
    let themvaogiohang27 = localStorage.getItem('themvaogiohang27');
    if (themvaogiohang27) {
        var themvaogiohang27m = document.createElement('div');
        themvaogiohang27m.setAttribute('id', 'giohang27');
        themvaogiohang27m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang27m);
        document.getElementById('giohang27').innerHTML = themvaogiohang27;
        var input27m = document.createElement('input');
        input27m.setAttribute('id', 'input27m');
        input27m.setAttribute('class', 'inputs')
        input27m.setAttribute('type', 'number');
        input27m.setAttribute('min', '1');
        input27m.setAttribute('value', '1');
        var thanhtien27m = document.createElement('div');
        thanhtien27m.setAttribute('id', 'thanhtien27');
        thanhtien27m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien27');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang27').appendChild(input27m);
        document.getElementById('giohang27').appendChild(chutongtien);
        document.getElementById('giohang27').appendChild(thanhtien27m);
        var cc27 = document.getElementById('love27');
        if (cc27) {
            var dongia = cc27.getAttribute('data-price');
            document.getElementById('thanhtien27').innerText = dongia * input27m.value;
        }
        tongtien();
        document.getElementById('tongtien27').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang27');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang27');
            })
        } tontaithixoahop();
    }
}
giohang27();
function c27m() {

    var cc27 = document.getElementById('love27');
    if (cc27) {
        input27m.addEventListener('input', function () {
            var dongia = cc27.getAttribute('data-price');
            document.getElementById('thanhtien27').innerText = dongia * input27m.value;
        });
    }
}
c27m();
function giohang28() {
    let themvaogiohang28 = localStorage.getItem('themvaogiohang28');
    if (themvaogiohang28) {
        var themvaogiohang28m = document.createElement('div');
        themvaogiohang28m.setAttribute('id', 'giohang28');
        themvaogiohang28m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang28m);
        document.getElementById('giohang28').innerHTML = themvaogiohang28;
        var input28m = document.createElement('input');
        input28m.setAttribute('id', 'input28m');
        input28m.setAttribute('class', 'inputs')
        input28m.setAttribute('type', 'number');
        input28m.setAttribute('min', '1');
        input28m.setAttribute('value', '1');
        var thanhtien28m = document.createElement('div');
        thanhtien28m.setAttribute('id', 'thanhtien28');
        thanhtien28m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien28');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang28').appendChild(input28m);
        document.getElementById('giohang28').appendChild(chutongtien);
        document.getElementById('giohang28').appendChild(thanhtien28m);
        var cc28 = document.getElementById('love28');
        if (cc28) {
            var dongia = cc28.getAttribute('data-price');
            document.getElementById('thanhtien28').innerText = dongia * input28m.value;
        }
        tongtien();
        document.getElementById('tongtien28').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang28');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang28');
            })
        } tontaithixoahop();
    }
}
giohang28();
function c28m() {

    var cc28 = document.getElementById('love28');
    if (cc28) {
        input28m.addEventListener('input', function () {
            var dongia = cc28.getAttribute('data-price');
            document.getElementById('thanhtien28').innerText = dongia * input28m.value;
        });
    }
}
c28m();
function giohang29() {
    let themvaogiohang29 = localStorage.getItem('themvaogiohang29');
    if (themvaogiohang29) {
        var themvaogiohang29m = document.createElement('div');
        themvaogiohang29m.setAttribute('id', 'giohang29');
        themvaogiohang29m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang29m);
        document.getElementById('giohang29').innerHTML = themvaogiohang29;
        var input29m = document.createElement('input');
        input29m.setAttribute('id', 'input29m');
        input29m.setAttribute('class', 'inputs')
        input29m.setAttribute('type', 'number');
        input29m.setAttribute('min', '1');
        input29m.setAttribute('value', '1');
        var thanhtien29m = document.createElement('div');
        thanhtien29m.setAttribute('id', 'thanhtien29');
        thanhtien29m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien29');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang29').appendChild(input29m);
        document.getElementById('giohang29').appendChild(chutongtien);
        document.getElementById('giohang29').appendChild(thanhtien29m);
        var cc29 = document.getElementById('love29');
        if (cc29) {
            var dongia = cc29.getAttribute('data-price');
            document.getElementById('thanhtien29').innerText = dongia * input29m.value;
        }
        tongtien();
        document.getElementById('tongtien29').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang29');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang29');
            })
        } tontaithixoahop();
    }
}
giohang29();
function c29m() {

    var cc29 = document.getElementById('love29');
    if (cc29) {
        input29m.addEventListener('input', function () {
            var dongia = cc29.getAttribute('data-price');
            document.getElementById('thanhtien29').innerText = dongia * input29m.value;
        });
    }
}
c29m();
function giohang30() {
    let themvaogiohang30 = localStorage.getItem('themvaogiohang30');
    if (themvaogiohang30) {
        var themvaogiohang30m = document.createElement('div');
        themvaogiohang30m.setAttribute('id', 'giohang30');
        themvaogiohang30m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang30m);
        document.getElementById('giohang30').innerHTML = themvaogiohang30;
        var input30m = document.createElement('input');
        input30m.setAttribute('id', 'input30m');
        input30m.setAttribute('class', 'inputs')
        input30m.setAttribute('type', 'number');
        input30m.setAttribute('min', '1');
        input30m.setAttribute('value', '1');
        var thanhtien30m = document.createElement('div');
        thanhtien30m.setAttribute('id', 'thanhtien30');
        thanhtien30m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien30');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang30').appendChild(input30m);
        document.getElementById('giohang30').appendChild(chutongtien);
        document.getElementById('giohang30').appendChild(thanhtien30m);
        var cc30 = document.getElementById('love30');
        if (cc30) {
            var dongia = cc30.getAttribute('data-price');
            document.getElementById('thanhtien30').innerText = dongia * input30m.value;
        }
        tongtien();
        document.getElementById('tongtien30').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang30');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang30');
            })
        } tontaithixoahop();
    }
}
giohang30();
function c30m() {

    var cc30 = document.getElementById('love30');
    if (cc30) {
        input30m.addEventListener('input', function () {
            var dongia = cc30.getAttribute('data-price');
            document.getElementById('thanhtien30').innerText = dongia * input30m.value;
        });
    }
}
c30m();
function giohang31() {
    let themvaogiohang31 = localStorage.getItem('themvaogiohang31');
    if (themvaogiohang31) {
        var themvaogiohang31m = document.createElement('div');
        themvaogiohang31m.setAttribute('id', 'giohang31');
        themvaogiohang31m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang31m);
        document.getElementById('giohang31').innerHTML = themvaogiohang31;
        var input31m = document.createElement('input');
        input31m.setAttribute('id', 'input31m');
        input31m.setAttribute('class', 'inputs')
        input31m.setAttribute('type', 'number');
        input31m.setAttribute('min', '1');
        input31m.setAttribute('value', '1');
        var thanhtien31m = document.createElement('div');
        thanhtien31m.setAttribute('id', 'thanhtien31');
        thanhtien31m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien31');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang31').appendChild(input31m);
        document.getElementById('giohang31').appendChild(chutongtien);
        document.getElementById('giohang31').appendChild(thanhtien31m);
        var cc31 = document.getElementById('love31');
        if (cc31) {
            var dongia = cc31.getAttribute('data-price');
            document.getElementById('thanhtien31').innerText = dongia * input31m.value;
        }
        tongtien();
        document.getElementById('tongtien31').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang31');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang31');
            })
        } tontaithixoahop();
    }
}
giohang31();
function c31m() {

    var cc31 = document.getElementById('love31');
    if (cc31) {
        input31m.addEventListener('input', function () {
            var dongia = cc31.getAttribute('data-price');
            document.getElementById('thanhtien31').innerText = dongia * input31m.value;
        });
    }
}
c31m();
function giohang32() {
    let themvaogiohang32 = localStorage.getItem('themvaogiohang32');
    if (themvaogiohang32) {
        var themvaogiohang32m = document.createElement('div');
        themvaogiohang32m.setAttribute('id', 'giohang32');
        themvaogiohang32m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang32m);
        document.getElementById('giohang32').innerHTML = themvaogiohang32;
        var input32m = document.createElement('input');
        input32m.setAttribute('id', 'input32m');
        input32m.setAttribute('class', 'inputs')
        input32m.setAttribute('type', 'number');
        input32m.setAttribute('min', '1');
        input32m.setAttribute('value', '1');
        var thanhtien32m = document.createElement('div');
        thanhtien32m.setAttribute('id', 'thanhtien32');
        thanhtien32m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien32');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang32').appendChild(input32m);
        document.getElementById('giohang32').appendChild(chutongtien);
        document.getElementById('giohang32').appendChild(thanhtien32m);
        var cc32 = document.getElementById('love32');
        if (cc32) {
            var dongia = cc32.getAttribute('data-price');
            document.getElementById('thanhtien32').innerText = dongia * input32m.value;
        }
        tongtien();
        document.getElementById('tongtien32').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang32');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang32');
            })
        } tontaithixoahop();
    }
}
giohang32();
function c32m() {

    var cc32 = document.getElementById('love32');
    if (cc32) {
        input32m.addEventListener('input', function () {
            var dongia = cc32.getAttribute('data-price');
            document.getElementById('thanhtien32').innerText = dongia * input32m.value;
        });
    }
}
c32m();
function giohang33() {
    let themvaogiohang33 = localStorage.getItem('themvaogiohang33');
    if (themvaogiohang33) {
        var themvaogiohang33m = document.createElement('div');
        themvaogiohang33m.setAttribute('id', 'giohang33');
        themvaogiohang33m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang33m);
        document.getElementById('giohang33').innerHTML = themvaogiohang33;
        var input33m = document.createElement('input');
        input33m.setAttribute('id', 'input33m');
        input33m.setAttribute('class', 'inputs')
        input33m.setAttribute('type', 'number');
        input33m.setAttribute('min', '1');
        input33m.setAttribute('value', '1');
        var thanhtien33m = document.createElement('div');
        thanhtien33m.setAttribute('id', 'thanhtien33');
        thanhtien33m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien33');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang33').appendChild(input33m);
        document.getElementById('giohang33').appendChild(chutongtien);
        document.getElementById('giohang33').appendChild(thanhtien33m);
        var cc33 = document.getElementById('love33');
        if (cc33) {
            var dongia = cc33.getAttribute('data-price');
            document.getElementById('thanhtien33').innerText = dongia * input33m.value;
        }
        tongtien();
        document.getElementById('tongtien33').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang33');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang33');
            })
        } tontaithixoahop();
    }
}
giohang33();
function c33m() {

    var cc33 = document.getElementById('love33');
    if (cc33) {
        input33m.addEventListener('input', function () {
            var dongia = cc33.getAttribute('data-price');
            document.getElementById('thanhtien33').innerText = dongia * input33m.value;
        });
    }
}
c33m();
function giohang34() {
    let themvaogiohang34 = localStorage.getItem('themvaogiohang34');
    if (themvaogiohang34) {
        var themvaogiohang34m = document.createElement('div');
        themvaogiohang34m.setAttribute('id', 'giohang34');
        themvaogiohang34m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang34m);
        document.getElementById('giohang34').innerHTML = themvaogiohang34;
        var input34m = document.createElement('input');
        input34m.setAttribute('id', 'input34m');
        input34m.setAttribute('class', 'inputs')
        input34m.setAttribute('type', 'number');
        input34m.setAttribute('min', '1');
        input34m.setAttribute('value', '1');
        var thanhtien34m = document.createElement('div');
        thanhtien34m.setAttribute('id', 'thanhtien34');
        thanhtien34m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien34');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang34').appendChild(input34m);
        document.getElementById('giohang34').appendChild(chutongtien);
        document.getElementById('giohang34').appendChild(thanhtien34m);
        var cc34 = document.getElementById('love34');
        if (cc34) {
            var dongia = cc34.getAttribute('data-price');
            document.getElementById('thanhtien34').innerText = dongia * input34m.value;
        }
        tongtien();
        document.getElementById('tongtien34').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang34');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang34');
            })
        } tontaithixoahop();
    }
}
giohang34();
function c34m() {

    var cc34 = document.getElementById('love34');
    if (cc34) {
        input34m.addEventListener('input', function () {
            var dongia = cc34.getAttribute('data-price');
            document.getElementById('thanhtien34').innerText = dongia * input34m.value;
        });
    }
}
c34m();
function giohang35() {
    let themvaogiohang35 = localStorage.getItem('themvaogiohang35');
    if (themvaogiohang35) {
        var themvaogiohang35m = document.createElement('div');
        themvaogiohang35m.setAttribute('id', 'giohang35');
        themvaogiohang35m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang35m);
        document.getElementById('giohang35').innerHTML = themvaogiohang35;
        var input35m = document.createElement('input');
        input35m.setAttribute('id', 'input35m');
        input35m.setAttribute('class', 'inputs')
        input35m.setAttribute('type', 'number');
        input35m.setAttribute('min', '1');
        input35m.setAttribute('value', '1');
        var thanhtien35m = document.createElement('div');
        thanhtien35m.setAttribute('id', 'thanhtien35');
        thanhtien35m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien35');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang35').appendChild(input35m);
        document.getElementById('giohang35').appendChild(chutongtien);
        document.getElementById('giohang35').appendChild(thanhtien35m);
        var cc35 = document.getElementById('love35');
        if (cc35) {
            var dongia = cc35.getAttribute('data-price');
            document.getElementById('thanhtien35').innerText = dongia * input35m.value;
        }
        tongtien();
        document.getElementById('tongtien35').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang35');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang35');
            })
        } tontaithixoahop();
    }
}
giohang35();
function c35m() {

    var cc35 = document.getElementById('love35');
    if (cc35) {
        input35m.addEventListener('input', function () {
            var dongia = cc35.getAttribute('data-price');
            document.getElementById('thanhtien35').innerText = dongia * input35m.value;
        });
    }
}
c35m();
function giohang36() {
    let themvaogiohang36 = localStorage.getItem('themvaogiohang36');
    if (themvaogiohang36) {
        var themvaogiohang36m = document.createElement('div');
        themvaogiohang36m.setAttribute('id', 'giohang36');
        themvaogiohang36m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang36m);
        document.getElementById('giohang36').innerHTML = themvaogiohang36;
        var input36m = document.createElement('input');
        input36m.setAttribute('id', 'input36m');
        input36m.setAttribute('class', 'inputs')
        input36m.setAttribute('type', 'number');
        input36m.setAttribute('min', '1');
        input36m.setAttribute('value', '1');
        var thanhtien36m = document.createElement('div');
        thanhtien36m.setAttribute('id', 'thanhtien36');
        thanhtien36m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien36');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang36').appendChild(input36m);
        document.getElementById('giohang36').appendChild(chutongtien);
        document.getElementById('giohang36').appendChild(thanhtien36m);
        var cc36 = document.getElementById('love36');
        if (cc36) {
            var dongia = cc36.getAttribute('data-price');
            document.getElementById('thanhtien36').innerText = dongia * input36m.value;
        }
        tongtien();
        document.getElementById('tongtien36').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang36');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang36');
            })
        } tontaithixoahop();
    }
}
giohang36();
function c36m() {

    var cc36 = document.getElementById('love36');
    if (cc36) {
        input36m.addEventListener('input', function () {
            var dongia = cc36.getAttribute('data-price');
            document.getElementById('thanhtien36').innerText = dongia * input36m.value;
        });
    }
}
c36m();
function giohang37() {
    let themvaogiohang37 = localStorage.getItem('themvaogiohang37');
    if (themvaogiohang37) {
        var themvaogiohang37m = document.createElement('div');
        themvaogiohang37m.setAttribute('id', 'giohang37');
        themvaogiohang37m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang37m);
        document.getElementById('giohang37').innerHTML = themvaogiohang37;
        var input37m = document.createElement('input');
        input37m.setAttribute('id', 'input37m');
        input37m.setAttribute('class', 'inputs')
        input37m.setAttribute('type', 'number');
        input37m.setAttribute('min', '1');
        input37m.setAttribute('value', '1');
        var thanhtien37m = document.createElement('div');
        thanhtien37m.setAttribute('id', 'thanhtien37');
        thanhtien37m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien37');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang37').appendChild(input37m);
        document.getElementById('giohang37').appendChild(chutongtien);
        document.getElementById('giohang37').appendChild(thanhtien37m);
        var cc37 = document.getElementById('love37');
        if (cc37) {
            var dongia = cc37.getAttribute('data-price');
            document.getElementById('thanhtien37').innerText = dongia * input37m.value;
        }
        tongtien();
        document.getElementById('tongtien37').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang37');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang37');
            })
        } tontaithixoahop();
    }
}
giohang37();
function c37m() {

    var cc37 = document.getElementById('love37');
    if (cc37) {
        input37m.addEventListener('input', function () {
            var dongia = cc37.getAttribute('data-price');
            document.getElementById('thanhtien37').innerText = dongia * input37m.value;
        });
    }
}
c37m();
function giohang38() {
    let themvaogiohang38 = localStorage.getItem('themvaogiohang38');
    if (themvaogiohang38) {
        var themvaogiohang38m = document.createElement('div');
        themvaogiohang38m.setAttribute('id', 'giohang38');
        themvaogiohang38m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang38m);
        document.getElementById('giohang38').innerHTML = themvaogiohang38;
        var input38m = document.createElement('input');
        input38m.setAttribute('id', 'input38m');
        input38m.setAttribute('class', 'inputs')
        input38m.setAttribute('type', 'number');
        input38m.setAttribute('min', '1');
        input38m.setAttribute('value', '1');
        var thanhtien38m = document.createElement('div');
        thanhtien38m.setAttribute('id', 'thanhtien38');
        thanhtien38m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien38');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang38').appendChild(input38m);
        document.getElementById('giohang38').appendChild(chutongtien);
        document.getElementById('giohang38').appendChild(thanhtien38m);
        var cc38 = document.getElementById('love38');
        if (cc38) {
            var dongia = cc38.getAttribute('data-price');
            document.getElementById('thanhtien38').innerText = dongia * input38m.value;
        }
        tongtien();
        document.getElementById('tongtien38').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang38');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang38');
            })
        } tontaithixoahop();
    }
}
giohang38();
function c38m() {

    var cc38 = document.getElementById('love38');
    if (cc38) {
        input38m.addEventListener('input', function () {
            var dongia = cc38.getAttribute('data-price');
            document.getElementById('thanhtien38').innerText = dongia * input38m.value;
        });
    }
}
c38m();
function giohang39() {
    let themvaogiohang39 = localStorage.getItem('themvaogiohang39');
    if (themvaogiohang39) {
        var themvaogiohang39m = document.createElement('div');
        themvaogiohang39m.setAttribute('id', 'giohang39');
        themvaogiohang39m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang39m);
        document.getElementById('giohang39').innerHTML = themvaogiohang39;
        var input39m = document.createElement('input');
        input39m.setAttribute('id', 'input39m');
        input39m.setAttribute('class', 'inputs')
        input39m.setAttribute('type', 'number');
        input39m.setAttribute('min', '1');
        input39m.setAttribute('value', '1');
        var thanhtien39m = document.createElement('div');
        thanhtien39m.setAttribute('id', 'thanhtien39');
        thanhtien39m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien39');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang39').appendChild(input39m);
        document.getElementById('giohang39').appendChild(chutongtien);
        document.getElementById('giohang39').appendChild(thanhtien39m);
        var cc39 = document.getElementById('love39');
        if (cc39) {
            var dongia = cc39.getAttribute('data-price');
            document.getElementById('thanhtien39').innerText = dongia * input39m.value;
        }
        tongtien();
        document.getElementById('tongtien39').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang39');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang39');
            })
        } tontaithixoahop();
    }
}
giohang39();
function c39m() {

    var cc39 = document.getElementById('love39');
    if (cc39) {
        input39m.addEventListener('input', function () {
            var dongia = cc39.getAttribute('data-price');
            document.getElementById('thanhtien39').innerText = dongia * input39m.value;
        });
    }
}
c39m();
function giohang40() {
    let themvaogiohang40 = localStorage.getItem('themvaogiohang40');
    if (themvaogiohang40) {
        var themvaogiohang40m = document.createElement('div');
        themvaogiohang40m.setAttribute('id', 'giohang40');
        themvaogiohang40m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang40m);
        document.getElementById('giohang40').innerHTML = themvaogiohang40;
        var input40m = document.createElement('input');
        input40m.setAttribute('id', 'input40m');
        input40m.setAttribute('class', 'inputs')
        input40m.setAttribute('type', 'number');
        input40m.setAttribute('min', '1');
        input40m.setAttribute('value', '1');
        var thanhtien40m = document.createElement('div');
        thanhtien40m.setAttribute('id', 'thanhtien40');
        thanhtien40m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien40');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang40').appendChild(input40m);
        document.getElementById('giohang40').appendChild(chutongtien);
        document.getElementById('giohang40').appendChild(thanhtien40m);
        var cc40 = document.getElementById('love40');
        if (cc40) {
            var dongia = cc40.getAttribute('data-price');
            document.getElementById('thanhtien40').innerText = dongia * input40m.value;
        }
        tongtien();
        document.getElementById('tongtien40').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang40');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang40');
            })
        } tontaithixoahop();
    }
}
giohang40();
function c40m() {

    var cc40 = document.getElementById('love40');
    if (cc40) {
        input40m.addEventListener('input', function () {
            var dongia = cc40.getAttribute('data-price');
            document.getElementById('thanhtien40').innerText = dongia * input40m.value;
        });
    }
}
c40m();
function giohang41() {
    let themvaogiohang41 = localStorage.getItem('themvaogiohang41');
    if (themvaogiohang41) {
        var themvaogiohang41m = document.createElement('div');
        themvaogiohang41m.setAttribute('id', 'giohang41');
        themvaogiohang41m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang41m);
        document.getElementById('giohang41').innerHTML = themvaogiohang41;
        var input41m = document.createElement('input');
        input41m.setAttribute('id', 'input41m');
        input41m.setAttribute('class', 'inputs')
        input41m.setAttribute('type', 'number');
        input41m.setAttribute('min', '1');
        input41m.setAttribute('value', '1');
        var thanhtien41m = document.createElement('div');
        thanhtien41m.setAttribute('id', 'thanhtien41');
        thanhtien41m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien41');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang41').appendChild(input41m);
        document.getElementById('giohang41').appendChild(chutongtien);
        document.getElementById('giohang41').appendChild(thanhtien41m);
        var cc41 = document.getElementById('love41');
        if (cc41) {
            var dongia = cc41.getAttribute('data-price');
            document.getElementById('thanhtien41').innerText = dongia * input41m.value;
        }
        tongtien();
        document.getElementById('tongtien41').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang41');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang41');
            })
        } tontaithixoahop();
    }
}
giohang41();
function c41m() {

    var cc41 = document.getElementById('love41');
    if (cc41) {
        input41m.addEventListener('input', function () {
            var dongia = cc41.getAttribute('data-price');
            document.getElementById('thanhtien41').innerText = dongia * input41m.value;
        });
    }
}
c41m();
function giohang42() {
    let themvaogiohang42 = localStorage.getItem('themvaogiohang42');
    if (themvaogiohang42) {
        var themvaogiohang42m = document.createElement('div');
        themvaogiohang42m.setAttribute('id', 'giohang42');
        themvaogiohang42m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang42m);
        document.getElementById('giohang42').innerHTML = themvaogiohang42;
        var input42m = document.createElement('input');
        input42m.setAttribute('id', 'input42m');
        input42m.setAttribute('class', 'inputs')
        input42m.setAttribute('type', 'number');
        input42m.setAttribute('min', '1');
        input42m.setAttribute('value', '1');
        var thanhtien42m = document.createElement('div');
        thanhtien42m.setAttribute('id', 'thanhtien42');
        thanhtien42m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien42');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang42').appendChild(input42m);
        document.getElementById('giohang42').appendChild(chutongtien);
        document.getElementById('giohang42').appendChild(thanhtien42m);
        var cc42 = document.getElementById('love42');
        if (cc42) {
            var dongia = cc42.getAttribute('data-price');
            document.getElementById('thanhtien42').innerText = dongia * input42m.value;
        }
        tongtien();
        document.getElementById('tongtien42').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang42');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang42');
            })
        } tontaithixoahop();
    }
}
giohang42();
function c42m() {

    var cc42 = document.getElementById('love42');
    if (cc42) {
        input42m.addEventListener('input', function () {
            var dongia = cc42.getAttribute('data-price');
            document.getElementById('thanhtien42').innerText = dongia * input42m.value;
        });
    }
}
c42m();
function giohang43() {
    let themvaogiohang43 = localStorage.getItem('themvaogiohang43');
    if (themvaogiohang43) {
        var themvaogiohang43m = document.createElement('div');
        themvaogiohang43m.setAttribute('id', 'giohang43');
        themvaogiohang43m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang43m);
        document.getElementById('giohang43').innerHTML = themvaogiohang43;
        var input43m = document.createElement('input');
        input43m.setAttribute('id', 'input43m');
        input43m.setAttribute('class', 'inputs')
        input43m.setAttribute('type', 'number');
        input43m.setAttribute('min', '1');
        input43m.setAttribute('value', '1');
        var thanhtien43m = document.createElement('div');
        thanhtien43m.setAttribute('id', 'thanhtien43');
        thanhtien43m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien43');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang43').appendChild(input43m);
        document.getElementById('giohang43').appendChild(chutongtien);
        document.getElementById('giohang43').appendChild(thanhtien43m);
        var cc43 = document.getElementById('love43');
        if (cc43) {
            var dongia = cc43.getAttribute('data-price');
            document.getElementById('thanhtien43').innerText = dongia * input43m.value;
        }
        tongtien();
        document.getElementById('tongtien43').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang43');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang43');
            })
        } tontaithixoahop();
    }
}
giohang43();
function c43m() {

    var cc43 = document.getElementById('love43');
    if (cc43) {
        input43m.addEventListener('input', function () {
            var dongia = cc43.getAttribute('data-price');
            document.getElementById('thanhtien43').innerText = dongia * input43m.value;
        });
    }
}
c43m();
function giohang44() {
    let themvaogiohang44 = localStorage.getItem('themvaogiohang44');
    if (themvaogiohang44) {
        var themvaogiohang44m = document.createElement('div');
        themvaogiohang44m.setAttribute('id', 'giohang44');
        themvaogiohang44m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang44m);
        document.getElementById('giohang44').innerHTML = themvaogiohang44;
        var input44m = document.createElement('input');
        input44m.setAttribute('id', 'input44m');
        input44m.setAttribute('class', 'inputs')
        input44m.setAttribute('type', 'number');
        input44m.setAttribute('min', '1');
        input44m.setAttribute('value', '1');
        var thanhtien44m = document.createElement('div');
        thanhtien44m.setAttribute('id', 'thanhtien44');
        thanhtien44m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien44');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang44').appendChild(input44m);
        document.getElementById('giohang44').appendChild(chutongtien);
        document.getElementById('giohang44').appendChild(thanhtien44m);
        var cc44 = document.getElementById('love44');
        if (cc44) {
            var dongia = cc44.getAttribute('data-price');
            document.getElementById('thanhtien44').innerText = dongia * input44m.value;
        }
        tongtien();
        document.getElementById('tongtien44').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang44');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang44');
            })
        } tontaithixoahop();
    }
}
giohang44();
function c44m() {

    var cc44 = document.getElementById('love44');
    if (cc44) {
        input44m.addEventListener('input', function () {
            var dongia = cc44.getAttribute('data-price');
            document.getElementById('thanhtien44').innerText = dongia * input44m.value;
        });
    }
}
c44m();
function giohang45() {
    let themvaogiohang45 = localStorage.getItem('themvaogiohang45');
    if (themvaogiohang45) {
        var themvaogiohang45m = document.createElement('div');
        themvaogiohang45m.setAttribute('id', 'giohang45');
        themvaogiohang45m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang45m);
        document.getElementById('giohang45').innerHTML = themvaogiohang45;
        var input45m = document.createElement('input');
        input45m.setAttribute('id', 'input45m');
        input45m.setAttribute('class', 'inputs')
        input45m.setAttribute('type', 'number');
        input45m.setAttribute('min', '1');
        input45m.setAttribute('value', '1');
        var thanhtien45m = document.createElement('div');
        thanhtien45m.setAttribute('id', 'thanhtien45');
        thanhtien45m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien45');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang45').appendChild(input45m);
        document.getElementById('giohang45').appendChild(chutongtien);
        document.getElementById('giohang45').appendChild(thanhtien45m);
        var cc45 = document.getElementById('love45');
        if (cc45) {
            var dongia = cc45.getAttribute('data-price');
            document.getElementById('thanhtien45').innerText = dongia * input45m.value;
        }
        tongtien();
        document.getElementById('tongtien45').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang45');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang45');
            })
        } tontaithixoahop();
    }
}
giohang45();
function c45m() {

    var cc45 = document.getElementById('love45');
    if (cc45) {
        input45m.addEventListener('input', function () {
            var dongia = cc45.getAttribute('data-price');
            document.getElementById('thanhtien45').innerText = dongia * input45m.value;
        });
    }
}
c45m();
function giohang46() {
    let themvaogiohang46 = localStorage.getItem('themvaogiohang46');
    if (themvaogiohang46) {
        var themvaogiohang46m = document.createElement('div');
        themvaogiohang46m.setAttribute('id', 'giohang46');
        themvaogiohang46m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang46m);
        document.getElementById('giohang46').innerHTML = themvaogiohang46;
        var input46m = document.createElement('input');
        input46m.setAttribute('id', 'input46m');
        input46m.setAttribute('class', 'inputs')
        input46m.setAttribute('type', 'number');
        input46m.setAttribute('min', '1');
        input46m.setAttribute('value', '1');
        var thanhtien46m = document.createElement('div');
        thanhtien46m.setAttribute('id', 'thanhtien46');
        thanhtien46m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien46');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang46').appendChild(input46m);
        document.getElementById('giohang46').appendChild(chutongtien);
        document.getElementById('giohang46').appendChild(thanhtien46m);
        var cc46 = document.getElementById('love46');
        if (cc46) {
            var dongia = cc46.getAttribute('data-price');
            document.getElementById('thanhtien46').innerText = dongia * input46m.value;
        }
        tongtien();
        document.getElementById('tongtien46').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang46');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang46');
            })
        } tontaithixoahop();
    }
}
giohang46();
function c46m() {

    var cc46 = document.getElementById('love46');
    if (cc46) {
        input46m.addEventListener('input', function () {
            var dongia = cc46.getAttribute('data-price');
            document.getElementById('thanhtien46').innerText = dongia * input46m.value;
        });
    }
}
c46m();
function giohang47() {
    let themvaogiohang47 = localStorage.getItem('themvaogiohang47');
    if (themvaogiohang47) {
        var themvaogiohang47m = document.createElement('div');
        themvaogiohang47m.setAttribute('id', 'giohang47');
        themvaogiohang47m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang47m);
        document.getElementById('giohang47').innerHTML = themvaogiohang47;
        var input47m = document.createElement('input');
        input47m.setAttribute('id', 'input47m');
        input47m.setAttribute('class', 'inputs')
        input47m.setAttribute('type', 'number');
        input47m.setAttribute('min', '1');
        input47m.setAttribute('value', '1');
        var thanhtien47m = document.createElement('div');
        thanhtien47m.setAttribute('id', 'thanhtien47');
        thanhtien47m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien47');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang47').appendChild(input47m);
        document.getElementById('giohang47').appendChild(chutongtien);
        document.getElementById('giohang47').appendChild(thanhtien47m);
        var cc47 = document.getElementById('love47');
        if (cc47) {
            var dongia = cc47.getAttribute('data-price');
            document.getElementById('thanhtien47').innerText = dongia * input47m.value;
        }
        tongtien();
        document.getElementById('tongtien47').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang47');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang47');
            })
        } tontaithixoahop();
    }
}
giohang47();
function c47m() {

    var cc47 = document.getElementById('love47');
    if (cc47) {
        input47m.addEventListener('input', function () {
            var dongia = cc47.getAttribute('data-price');
            document.getElementById('thanhtien47').innerText = dongia * input47m.value;
        });
    }
}
c47m();
function giohang48() {
    let themvaogiohang48 = localStorage.getItem('themvaogiohang48');
    if (themvaogiohang48) {
        var themvaogiohang48m = document.createElement('div');
        themvaogiohang48m.setAttribute('id', 'giohang48');
        themvaogiohang48m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang48m);
        document.getElementById('giohang48').innerHTML = themvaogiohang48;
        var input48m = document.createElement('input');
        input48m.setAttribute('id', 'input48m');
        input48m.setAttribute('class', 'inputs')
        input48m.setAttribute('type', 'number');
        input48m.setAttribute('min', '1');
        input48m.setAttribute('value', '1');
        var thanhtien48m = document.createElement('div');
        thanhtien48m.setAttribute('id', 'thanhtien48');
        thanhtien48m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien48');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang48').appendChild(input48m);
        document.getElementById('giohang48').appendChild(chutongtien);
        document.getElementById('giohang48').appendChild(thanhtien48m);
        var cc48 = document.getElementById('love48');
        if (cc48) {
            var dongia = cc48.getAttribute('data-price');
            document.getElementById('thanhtien48').innerText = dongia * input48m.value;
        }
        tongtien();
        document.getElementById('tongtien48').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang48');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang48');
            })
        } tontaithixoahop();
    }
}
giohang48();
function c48m() {

    var cc48 = document.getElementById('love48');
    if (cc48) {
        input48m.addEventListener('input', function () {
            var dongia = cc48.getAttribute('data-price');
            document.getElementById('thanhtien48').innerText = dongia * input48m.value;
        });
    }
}
c48m();
function giohang49() {
    let themvaogiohang49 = localStorage.getItem('themvaogiohang49');
    if (themvaogiohang49) {
        var themvaogiohang49m = document.createElement('div');
        themvaogiohang49m.setAttribute('id', 'giohang49');
        themvaogiohang49m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang49m);
        document.getElementById('giohang49').innerHTML = themvaogiohang49;
        var input49m = document.createElement('input');
        input49m.setAttribute('id', 'input49m');
        input49m.setAttribute('class', 'inputs')
        input49m.setAttribute('type', 'number');
        input49m.setAttribute('min', '1');
        input49m.setAttribute('value', '1');
        var thanhtien49m = document.createElement('div');
        thanhtien49m.setAttribute('id', 'thanhtien49');
        thanhtien49m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien49');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang49').appendChild(input49m);
        document.getElementById('giohang49').appendChild(chutongtien);
        document.getElementById('giohang49').appendChild(thanhtien49m);
        var cc49 = document.getElementById('love49');
        if (cc49) {
            var dongia = cc49.getAttribute('data-price');
            document.getElementById('thanhtien49').innerText = dongia * input49m.value;
        }
        tongtien();
        document.getElementById('tongtien49').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang49');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang49');
            })
        } tontaithixoahop();
    }
}
giohang49();
function c49m() {

    var cc49 = document.getElementById('love49');
    if (cc49) {
        input49m.addEventListener('input', function () {
            var dongia = cc49.getAttribute('data-price');
            document.getElementById('thanhtien49').innerText = dongia * input49m.value;
        });
    }
}
c49m();
function giohang50() {
    let themvaogiohang50 = localStorage.getItem('themvaogiohang50');
    if (themvaogiohang50) {
        var themvaogiohang50m = document.createElement('div');
        themvaogiohang50m.setAttribute('id', 'giohang50');
        themvaogiohang50m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang50m);
        document.getElementById('giohang50').innerHTML = themvaogiohang50;
        var input50m = document.createElement('input');
        input50m.setAttribute('id', 'input50m');
        input50m.setAttribute('class', 'inputs')
        input50m.setAttribute('type', 'number');
        input50m.setAttribute('min', '1');
        input50m.setAttribute('value', '1');
        var thanhtien50m = document.createElement('div');
        thanhtien50m.setAttribute('id', 'thanhtien50');
        thanhtien50m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien50');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang50').appendChild(input50m);
        document.getElementById('giohang50').appendChild(chutongtien);
        document.getElementById('giohang50').appendChild(thanhtien50m);
        var cc50 = document.getElementById('love50');
        if (cc50) {
            var dongia = cc50.getAttribute('data-price');
            document.getElementById('thanhtien50').innerText = dongia * input50m.value;
        }
        tongtien();
        document.getElementById('tongtien50').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang50');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang50');
            })
        } tontaithixoahop();
    }
}
giohang50();
function c50m() {

    var cc50 = document.getElementById('love50');
    if (cc50) {
        input50m.addEventListener('input', function () {
            var dongia = cc50.getAttribute('data-price');
            document.getElementById('thanhtien50').innerText = dongia * input50m.value;
        });
    }
}
c50m();
function giohang51() {
    let themvaogiohang51 = localStorage.getItem('themvaogiohang51');
    if (themvaogiohang51) {
        var themvaogiohang51m = document.createElement('div');
        themvaogiohang51m.setAttribute('id', 'giohang51');
        themvaogiohang51m.setAttribute('class', 'giohangm');
        document.getElementById('hopgiohang').appendChild(themvaogiohang51m);
        document.getElementById('giohang51').innerHTML = themvaogiohang51;
        var input51m = document.createElement('input');
        input51m.setAttribute('id', 'input51m');
        input51m.setAttribute('class', 'inputs')
        input51m.setAttribute('type', 'number');
        input51m.setAttribute('min', '1');
        input51m.setAttribute('value', '1');
        var thanhtien51m = document.createElement('div');
        thanhtien51m.setAttribute('id', 'thanhtien51');
        thanhtien51m.setAttribute('class', 'thanhtienss');
        var chutongtien = document.createElement('span');
        chutongtien.setAttribute('id', 'tongtien51');
        chutongtien.setAttribute('class', 'chutongtien');
        document.getElementById('giohang51').appendChild(input51m);
        document.getElementById('giohang51').appendChild(chutongtien);
        document.getElementById('giohang51').appendChild(thanhtien51m);
        var cc51 = document.getElementById('love51');
        if (cc51) {
            var dongia = cc51.getAttribute('data-price');
            document.getElementById('thanhtien51').innerText = dongia * input51m.value;
        }
        tongtien();
        document.getElementById('tongtien51').innerText = 'Tong Tien';
        const loveButton = document.querySelector('#themvaogiohang51');
        if (loveButton) {
            loveButton.innerHTML = `<ion-icon name='bag-remove-outline'></ion-icon>`;
            loveButton.addEventListener('click', function () {
                thongbaos();
                localStorage.removeItem('themvaogiohang51');
            })
        } tontaithixoahop();
    }
}
giohang51();
function c51m() {

    var cc51 = document.getElementById('love51');
    if (cc51) {
        input51m.addEventListener('input', function () {
            var dongia = cc51.getAttribute('data-price');
            document.getElementById('thanhtien51').innerText = dongia * input51m.value;
        });
    }
}
c51m();

function tontaithixoahop() {
    document.getElementById("hopthongbaoyeuthichtontai").style.display = "none";
}

function tongtien() {
    document.getElementById("tongtiencanthanhtoan").style.display = "block";
}