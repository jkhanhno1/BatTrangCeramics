document.getElementById("love0").addEventListener("click",love0);
function love0(){
// lấy đối tượng hành động yêu thích
let anh11 = document.getElementById('anh11');
//lưu đối tượng hành động yêu thích vào localLstorage
localStorage.setItem('anh11',anh11.outerHTML);

thongbaos();
thongbaoss();

}
document.getElementById("love1").addEventListener('click',love1);
function love1(){
    // lấy đối tượng hành động yêu thích
    let anh22 = document.getElementById('anh22');
    //lấy đối tượng hành động yêu thích vào localstorage
    localStorage.setItem('anh22',anh22.outerHTML);
    thongbaos();
    thongbaoss();

}
document.getElementById("love2").addEventListener('click',love2);
function love2(){
    // lấy đối tượng hành động yêu thích
    let anh33 = document.getElementById('anh33');
    //lấy đối tượng hành động yêu thích vào localstorage
    localStorage.setItem('anh33',anh33.outerHTML);
    thongbaos();
    thongbaoss();

}


// banner-30
document.getElementById("love3").addEventListener("click", love3);
function love3() {
    // Lấy đối tượng hành động yêu thích
    let anh44 = document.getElementById('hopsp30-3');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh44', anh44.outerHTML);
    thongbaos();
    thongbaoss();
}

document.getElementById("love4").addEventListener("click", love4);
function love4() {
    // Lấy đối tượng hành động yêu thích
    let anh55 = document.getElementById('hopsp30-4');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh55', anh55.outerHTML);
    thongbaos();
    thongbaoss();
}

document.getElementById("love5").addEventListener("click", love5);
function love5() {
    // Lấy đối tượng hành động yêu thích
    let anh66 = document.getElementById('hopsp30-5');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh66', anh66.outerHTML);
    thongbaos();
    thongbaoss();
}

document.getElementById("love6").addEventListener("click", love6);
function love6() {
    // Lấy đối tượng hành động yêu thích
    let anh77 = document.getElementById('hopsp30-6');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh77', anh77.outerHTML);
    thongbaos();
    thongbaoss();
}
document.getElementById("love7").addEventListener("click", love7);
function love7() {
    // Lấy đối tượng hành động yêu thích
    let anh88 = document.getElementById('hopsp30-7');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh88', anh88.outerHTML);
    thongbaos();
    thongbaoss();
}

document.getElementById("love8").addEventListener("click", love8);
function love8() {
    // Lấy đối tượng hành động yêu thích
    let anh99 = document.getElementById('hopsp30-8');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh99', anh99.outerHTML);
    thongbaos();
    thongbaoss();
}
document.getElementById("love9").addEventListener("click", love9);
function love9() {
    // Lấy đối tượng hành động yêu thích
    let anh110 = document.getElementById('hopsp30-9');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh110', anh110.outerHTML);
    thongbaos();
    thongbaoss();
}

document.getElementById("love10").addEventListener("click", love10);
function love10() {
    // Lấy đối tượng hành động yêu thích
    let anh120 = document.getElementById('hopsp30-10');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh120', anh120.outerHTML);
    thongbaos();
    thongbaoss();
}

document.getElementById("love11").addEventListener("click", love11);
function love11() {
    // Lấy đối tượng hành động yêu thích
    let anh130 = document.getElementById('hopsp30-11');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh130', anh130.outerHTML);
    thongbaos();
    thongbaoss();
}
var love12 = document.getElementById("love12");
if (love12) {
    love12.addEventListener("click", love12);
}
function love12() {
    // Lấy đối tượng hành động yêu thích
    let anh140 = document.getElementById('hopsp30-12');
    // Lưu đối tượng hành động yêu thích vào LocalStorage
    localStorage.setItem('anh140', anh140.outerHTML);
    thongbaos();
    thongbaoss();
}




function thongbaos() {
    document.getElementById("thongbaosanphamvaoyeuthich").classList.add("addthongbaosanphamvaoyeuthich");
    document.querySelector(".thanhthoigian").classList.add("thanhthoigiannganlai");

    setTimeout(function thongbaoss() {
        document.getElementById("thongbaosanphamvaoyeuthich").classList.remove("addthongbaosanphamvaoyeuthich");
        document.querySelector(".thanhthoigian").classList.remove("thanhthoigiannganlai");


    }, 1000
    )


}