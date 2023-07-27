

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
tongso();



// Xử lý sự kiện click cho nút "Thêm vào giỏ hàng" đối với các sản phẩm


var themvaogiohang0n = document.getElementById('themvaogiohang0');
if (themvaogiohang0n) { themvaogiohang0n.addEventListener('click', themvaogiohang0); }
function themvaogiohang0() { let anh5550 = document.getElementById('anh11'); localStorage.setItem('themvaogiohang0', anh5550.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang1n = document.getElementById('themvaogiohang1');
if (themvaogiohang1n) { themvaogiohang1n.addEventListener('click', themvaogiohang1); }
function themvaogiohang1() { let anh5551 = document.getElementById('anh22'); localStorage.setItem('themvaogiohang1', anh5551.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang2n = document.getElementById('themvaogiohang2');
if (themvaogiohang2n) { themvaogiohang2n.addEventListener('click', themvaogiohang2); }
function themvaogiohang2() { let anh5552 = document.getElementById('anh33'); localStorage.setItem('themvaogiohang2', anh5552.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang3n = document.getElementById('themvaogiohang3');
if (themvaogiohang3n) { themvaogiohang3n.addEventListener('click', themvaogiohang3); }
function themvaogiohang3() { let anh5553 = document.getElementById('hopsp30-3'); localStorage.setItem('themvaogiohang3', anh5553.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang4n = document.getElementById('themvaogiohang4');
if (themvaogiohang4n) { themvaogiohang4n.addEventListener('click', themvaogiohang4); }
function themvaogiohang4() { let anh5554 = document.getElementById('hopsp30-4'); localStorage.setItem('themvaogiohang4', anh5554.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang5n = document.getElementById('themvaogiohang5');
if (themvaogiohang5n) { themvaogiohang5n.addEventListener('click', themvaogiohang5); }
function themvaogiohang5() { let anh5555 = document.getElementById('hopsp30-5'); localStorage.setItem('themvaogiohang5', anh5555.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang6n = document.getElementById('themvaogiohang6');
if (themvaogiohang6n) { themvaogiohang6n.addEventListener('click', themvaogiohang6); }
function themvaogiohang6() { let anh5556 = document.getElementById('hopsp30-6'); localStorage.setItem('themvaogiohang6', anh5556.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang7n = document.getElementById('themvaogiohang7');
if (themvaogiohang7n) { themvaogiohang7n.addEventListener('click', themvaogiohang7); }
function themvaogiohang7() { let anh5557 = document.getElementById('hopsp30-7'); localStorage.setItem('themvaogiohang7', anh5557.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang8n = document.getElementById('themvaogiohang8');
if (themvaogiohang8n) { themvaogiohang8n.addEventListener('click', themvaogiohang8); }
function themvaogiohang8() { let anh5558 = document.getElementById('hopsp30-8'); localStorage.setItem('themvaogiohang8', anh5558.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang9n = document.getElementById('themvaogiohang9');
if (themvaogiohang9n) { themvaogiohang9n.addEventListener('click', themvaogiohang9); }
function themvaogiohang9() { let anh5559 = document.getElementById('hopsp30-9'); localStorage.setItem('themvaogiohang9', anh5559.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang10n = document.getElementById('themvaogiohang10');
if (themvaogiohang10n) { themvaogiohang10n.addEventListener('click', themvaogiohang10); }
function themvaogiohang10() { let anh55510 = document.getElementById('hopsp30-10'); localStorage.setItem('themvaogiohang10', anh55510.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang11n = document.getElementById('themvaogiohang11');
if (themvaogiohang11n) { themvaogiohang11n.addEventListener('click', themvaogiohang11); }
function themvaogiohang11() { let anh55511 = document.getElementById('hopsp30-11'); localStorage.setItem('themvaogiohang11', anh55511.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang12n = document.getElementById('themvaogiohang12');
if (themvaogiohang12n) { themvaogiohang12n.addEventListener('click', themvaogiohang12); }
function themvaogiohang12() { let anh55512 = document.getElementById('hopsp30-12'); localStorage.setItem('themvaogiohang12', anh55512.outerHTML); tongso(); thongbaoremove(); }

var themvaogiohang13n = document.getElementById('themvaogiohang13');
if (themvaogiohang13n) { themvaogiohang13n.addEventListener('click', themvaogiohang13); }
function themvaogiohang13() { let anh55513 = document.getElementById('hopsp30-13'); localStorage.setItem('themvaogiohang13', anh55513.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang14n = document.getElementById('themvaogiohang14');
if (themvaogiohang14n) { themvaogiohang14n.addEventListener('click', themvaogiohang14); }
function themvaogiohang14() { let anh55514 = document.getElementById('hopsp30-14'); localStorage.setItem('themvaogiohang14', anh55514.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang15n = document.getElementById('themvaogiohang15');
if (themvaogiohang15n) { themvaogiohang15n.addEventListener('click', themvaogiohang15); }
function themvaogiohang15() { let anh55515 = document.getElementById('hopsp30-15'); localStorage.setItem('themvaogiohang15', anh55515.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang16n = document.getElementById('themvaogiohang16');
if (themvaogiohang16n) { themvaogiohang16n.addEventListener('click', themvaogiohang16); }
function themvaogiohang16() { let anh55516 = document.getElementById('hopsp30-16'); localStorage.setItem('themvaogiohang16', anh55516.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang17n = document.getElementById('themvaogiohang17');
if (themvaogiohang17n) { themvaogiohang17n.addEventListener('click', themvaogiohang17); }
function themvaogiohang17() { let anh55517 = document.getElementById('hopsp30-17'); localStorage.setItem('themvaogiohang17', anh55517.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang18n = document.getElementById('themvaogiohang18');
if (themvaogiohang18n) { themvaogiohang18n.addEventListener('click', themvaogiohang18); }
function themvaogiohang18() { let anh55518 = document.getElementById('hopsp30-18'); localStorage.setItem('themvaogiohang18', anh55518.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang19n = document.getElementById('themvaogiohang19');
if (themvaogiohang19n) { themvaogiohang19n.addEventListener('click', themvaogiohang19); }
function themvaogiohang19() { let anh55519 = document.getElementById('hopsp30-19'); localStorage.setItem('themvaogiohang19', anh55519.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang20n = document.getElementById('themvaogiohang20');
if (themvaogiohang20n) { themvaogiohang20n.addEventListener('click', themvaogiohang20); }
function themvaogiohang20() { let anh55520 = document.getElementById('hopsp30-20'); localStorage.setItem('themvaogiohang20', anh55520.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang21n = document.getElementById('themvaogiohang21');
if (themvaogiohang21n) { themvaogiohang21n.addEventListener('click', themvaogiohang21); }
function themvaogiohang21() { let anh55521 = document.getElementById('hopsp30-21'); localStorage.setItem('themvaogiohang21', anh55521.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang22n = document.getElementById('themvaogiohang22');
if (themvaogiohang22n) { themvaogiohang22n.addEventListener('click', themvaogiohang22); }
function themvaogiohang22() { let anh55522 = document.getElementById('hopsp30-22'); localStorage.setItem('themvaogiohang22', anh55522.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang23n = document.getElementById('themvaogiohang23');
if (themvaogiohang23n) { themvaogiohang23n.addEventListener('click', themvaogiohang23); }
function themvaogiohang23() { let anh55523 = document.getElementById('hopsp30-23'); localStorage.setItem('themvaogiohang23', anh55523.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang24n = document.getElementById('themvaogiohang24');
if (themvaogiohang24n) { themvaogiohang24n.addEventListener('click', themvaogiohang24); }
function themvaogiohang24() { let anh55524 = document.getElementById('hopsp30-24'); localStorage.setItem('themvaogiohang24', anh55524.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang25n = document.getElementById('themvaogiohang25');
if (themvaogiohang25n) { themvaogiohang25n.addEventListener('click', themvaogiohang25); }
function themvaogiohang25() { let anh55525 = document.getElementById('hopsp30-25'); localStorage.setItem('themvaogiohang25', anh55525.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang26n = document.getElementById('themvaogiohang26');
if (themvaogiohang26n) { themvaogiohang26n.addEventListener('click', themvaogiohang26); }
function themvaogiohang26() { let anh55526 = document.getElementById('hopsp30-26'); localStorage.setItem('themvaogiohang26', anh55526.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang27n = document.getElementById('themvaogiohang27');
if (themvaogiohang27n) { themvaogiohang27n.addEventListener('click', themvaogiohang27); }
function themvaogiohang27() { let anh55527 = document.getElementById('hopsp30-27'); localStorage.setItem('themvaogiohang27', anh55527.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang28n = document.getElementById('themvaogiohang28');
if (themvaogiohang28n) { themvaogiohang28n.addEventListener('click', themvaogiohang28); }
function themvaogiohang28() { let anh55528 = document.getElementById('hopsp30-28'); localStorage.setItem('themvaogiohang28', anh55528.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang29n = document.getElementById('themvaogiohang29');
if (themvaogiohang29n) { themvaogiohang29n.addEventListener('click', themvaogiohang29); }
function themvaogiohang29() { let anh55529 = document.getElementById('hopsp30-29'); localStorage.setItem('themvaogiohang29', anh55529.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang30n = document.getElementById('themvaogiohang30');
if (themvaogiohang30n) { themvaogiohang30n.addEventListener('click', themvaogiohang30); }
function themvaogiohang30() { let anh55530 = document.getElementById('hopsp30-30'); localStorage.setItem('themvaogiohang30', anh55530.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang31n = document.getElementById('themvaogiohang31');
if (themvaogiohang31n) { themvaogiohang31n.addEventListener('click', themvaogiohang31); }
function themvaogiohang31() { let anh55531 = document.getElementById('hopsp30-31'); localStorage.setItem('themvaogiohang31', anh55531.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang32n = document.getElementById('themvaogiohang32');
if (themvaogiohang32n) { themvaogiohang32n.addEventListener('click', themvaogiohang32); }
function themvaogiohang32() { let anh55532 = document.getElementById('hopsp30-32'); localStorage.setItem('themvaogiohang32', anh55532.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang33n = document.getElementById('themvaogiohang33');
if (themvaogiohang33n) { themvaogiohang33n.addEventListener('click', themvaogiohang33); }
function themvaogiohang33() { let anh55533 = document.getElementById('hopsp30-33'); localStorage.setItem('themvaogiohang33', anh55533.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang34n = document.getElementById('themvaogiohang34');
if (themvaogiohang34n) { themvaogiohang34n.addEventListener('click', themvaogiohang34); }
function themvaogiohang34() { let anh55534 = document.getElementById('hopsp30-34'); localStorage.setItem('themvaogiohang34', anh55534.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang35n = document.getElementById('themvaogiohang35');
if (themvaogiohang35n) { themvaogiohang35n.addEventListener('click', themvaogiohang35); }
function themvaogiohang35() { let anh55535 = document.getElementById('hopsp30-35'); localStorage.setItem('themvaogiohang35', anh55535.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang36n = document.getElementById('themvaogiohang36');
if (themvaogiohang36n) { themvaogiohang36n.addEventListener('click', themvaogiohang36); }
function themvaogiohang36() { let anh55536 = document.getElementById('hopsp30-36'); localStorage.setItem('themvaogiohang36', anh55536.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang37n = document.getElementById('themvaogiohang37');
if (themvaogiohang37n) { themvaogiohang37n.addEventListener('click', themvaogiohang37); }
function themvaogiohang37() { let anh55537 = document.getElementById('hopsp30-37'); localStorage.setItem('themvaogiohang37', anh55537.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang38n = document.getElementById('themvaogiohang38');
if (themvaogiohang38n) { themvaogiohang38n.addEventListener('click', themvaogiohang38); }
function themvaogiohang38() { let anh55538 = document.getElementById('hopsp30-38'); localStorage.setItem('themvaogiohang38', anh55538.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang39n = document.getElementById('themvaogiohang39');
if (themvaogiohang39n) { themvaogiohang39n.addEventListener('click', themvaogiohang39); }
function themvaogiohang39() { let anh55539 = document.getElementById('hopsp30-39'); localStorage.setItem('themvaogiohang39', anh55539.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang40n = document.getElementById('themvaogiohang40');
if (themvaogiohang40n) { themvaogiohang40n.addEventListener('click', themvaogiohang40); }
function themvaogiohang40() { let anh55540 = document.getElementById('hopsp30-40'); localStorage.setItem('themvaogiohang40', anh55540.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang41n = document.getElementById('themvaogiohang41');
if (themvaogiohang41n) { themvaogiohang41n.addEventListener('click', themvaogiohang41); }
function themvaogiohang41() { let anh55541 = document.getElementById('hopsp30-41'); localStorage.setItem('themvaogiohang41', anh55541.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang42n = document.getElementById('themvaogiohang42');
if (themvaogiohang42n) { themvaogiohang42n.addEventListener('click', themvaogiohang42); }
function themvaogiohang42() { let anh55542 = document.getElementById('hopsp30-42'); localStorage.setItem('themvaogiohang42', anh55542.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang43n = document.getElementById('themvaogiohang43');
if (themvaogiohang43n) { themvaogiohang43n.addEventListener('click', themvaogiohang43); }
function themvaogiohang43() { let anh55543 = document.getElementById('hopsp30-43'); localStorage.setItem('themvaogiohang43', anh55543.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang44n = document.getElementById('themvaogiohang44');
if (themvaogiohang44n) { themvaogiohang44n.addEventListener('click', themvaogiohang44); }
function themvaogiohang44() { let anh55544 = document.getElementById('hopsp30-44'); localStorage.setItem('themvaogiohang44', anh55544.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang45n = document.getElementById('themvaogiohang45');
if (themvaogiohang45n) { themvaogiohang45n.addEventListener('click', themvaogiohang45); }
function themvaogiohang45() { let anh55545 = document.getElementById('hopsp30-45'); localStorage.setItem('themvaogiohang45', anh55545.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang46n = document.getElementById('themvaogiohang46');
if (themvaogiohang46n) { themvaogiohang46n.addEventListener('click', themvaogiohang46); }
function themvaogiohang46() { let anh55546 = document.getElementById('hopsp30-46'); localStorage.setItem('themvaogiohang46', anh55546.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang47n = document.getElementById('themvaogiohang47');
if (themvaogiohang47n) { themvaogiohang47n.addEventListener('click', themvaogiohang47); }
function themvaogiohang47() { let anh55547 = document.getElementById('hopsp30-47'); localStorage.setItem('themvaogiohang47', anh55547.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang48n = document.getElementById('themvaogiohang48');
if (themvaogiohang48n) { themvaogiohang48n.addEventListener('click', themvaogiohang48); }
function themvaogiohang48() { let anh55548 = document.getElementById('hopsp30-48'); localStorage.setItem('themvaogiohang48', anh55548.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang49n = document.getElementById('themvaogiohang49');
if (themvaogiohang49n) { themvaogiohang49n.addEventListener('click', themvaogiohang49); }
function themvaogiohang49() { let anh55549 = document.getElementById('hopsp30-49'); localStorage.setItem('themvaogiohang49', anh55549.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang50n = document.getElementById('themvaogiohang50');
if (themvaogiohang50n) { themvaogiohang50n.addEventListener('click', themvaogiohang50); }
function themvaogiohang50() { let anh55550 = document.getElementById('hopsp30-50'); localStorage.setItem('themvaogiohang50', anh55550.outerHTML); tongso(); thongbaoremove(); }
var themvaogiohang51n = document.getElementById('themvaogiohang51');
if (themvaogiohang51n) { themvaogiohang51n.addEventListener('click', themvaogiohang51); }
function themvaogiohang51() { let anh55551 = document.getElementById('hopsp30-51'); localStorage.setItem('themvaogiohang51', anh55551.outerHTML); tongso(); thongbaoremove(); }


function thongbaoremove() {
    document.getElementById("giohangssss").classList.add("giohangssss1");

    setTimeout(function () {
        document.getElementById("giohangssss").classList.remove("giohangssss1");
    }, 1000); // 3000 là thời gian đợi trước khi thao tác remove class được thực hiện

}




