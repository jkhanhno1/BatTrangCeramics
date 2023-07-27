
function chuyensang(chinhno) {
    var chinhno1 = chinhno.parentElement.parentElement.cloneNode(true);;

    localStorage.setItem("chinhno1", chinhno1.outerHTML);

    window.open('file:///F:/JS%20BASIC/WEB1043/ass1/chitietsanpham.html', '_blank');
}


let chinhno = localStorage.getItem('chinhno1');
if (chinhno) {
    var chinhno1 = document.createElement('div');

    chinhno1.setAttribute("id", "yeuthich1");
    chinhno1.setAttribute("class", "yeuthich1");

    var goc = document.createElement('div');
    goc.setAttribute("id", "gocanh");

    var mota = document.createElement('div');
    mota.setAttribute("id", "mota");


    var chitiet = document.createElement('div');
    chitiet.setAttribute("id", "chitiet");



    document.getElementById("hopchitietsanpham").appendChild(chinhno1);
    document.getElementById("hopchitietsanpham").appendChild(goc);
    document.getElementById("hopchitietsanpham").appendChild(mota);
    document.getElementById("hopchitietsanpham").appendChild(chitiet);

    document.getElementById("yeuthich1").innerHTML = chinhno


    var xemchitiet = document.getElementById("xemchi");
    var goc1 = xemchitiet.getAttribute("data-goc1");
    var goc2 = xemchitiet.getAttribute("data-goc2");
    var goc3 = xemchitiet.getAttribute("data-goc3");
    var goc4 = xemchitiet.getAttribute("data-goc4");
    document.getElementById("gocanh").innerHTML = "<img src='" + goc1 + "'>" + "<img src='" + goc2 + "'>" + "<img src='" + goc3 + "'>" + "<img src='" + goc4 + "'>";

    var chitietsanpham = xemchitiet.getAttribute("data-chitiet");
    document.getElementById("chitiet").innerHTML = chitietsanpham;

    document.getElementById("mota").innerHTML = " <ion-icon name='document-text-outline'></ion-icon> MÔ TẢ SẢN PHẨM "

}
