

setInterval(function () {
    let elements = document.querySelectorAll(".thanhtienss");
    let total = 0;

    for (let i = 0; i < elements.length; i++) {
        if (!isNaN(parseFloat(elements[i].textContent))) {
            console.log(elements[i].textContent)
            total += parseFloat(elements[i].textContent);

        }
    }


    document.getElementById("tongtiencanthanhtoan").innerHTML = "Tổng tiền phải thanh toán  : " + "<span style='color:red ; font-size:30px'>" + total + "000" + "</span>" + " nghìn đồng" + "<br>" + "<span id='click' style='color:#2980b9' >" + " Click Vào đây để thanh toán " + "</span>" + "<ion-icon name='checkmark-done-circle-outline'></ion-icon>";
    document.getElementById("thanhtoans").innerHTML = "Tổng tiền phải thanh toán  : " + "<span style='color:red ; font-size:30px'>" + total + "000" + "</span>" + " nghìn đồng"
}, 1000)


var tongtiencanthanhtoan = document.getElementById("tongtiencanthanhtoan");
if (tongtiencanthanhtoan) {
    tongtiencanthanhtoan.addEventListener("click", function () {
        document.getElementById("hoptinhtien").classList.toggle("classaddhoptinhtien");
        document.getElementById("huybo").addEventListener("click", function () {
            document.getElementById("hoptinhtien").classList.remove("classaddhoptinhtien");
        })

    })
}

//biểu thức chính quy
let nameInput = document.getElementById("name");
let saiTen = document.getElementById("saiten");
let sdtInput = document.getElementById("sdt");
let saiSdt = document.getElementById("saisodienthoai");
let diaChiInput = document.getElementById("diachi");
let saiDiaChi = document.getElementById("saidiachi");
let xacNhanButton = document.getElementById("xacnhan");
let thanhToanDiv = document.getElementById("thanhtoans");

// Hàm kiểm tra tên có hợp lệ hay không

function checkTen() {
    if (!/^[\p{L} ,.'-]+$/u.test(nameInput.value)) {
        saiTen.innerHTML = "Tên không hợp lệ";
        return false;
    } else {
        saiTen.innerHTML = "";
        return true;
    }
}


// Hàm kiểm tra số điện thoại có hợp lệ hay không
function checkSdt() {
    if (/^\d{10,11}$/g.test(sdtInput.value)) {
        saiSdt.innerHTML = "";
        return true;
    } else {
        saiSdt.innerHTML = "Số điện thoại không hợp lệ";
        return false;
    }
}

// Hàm kiểm tra địa chỉ có hợp lệ hay không
function checkDiaChi() {
    if (diaChiInput.value.trim() !== "") {
        saiDiaChi.innerHTML = "";
        return true;
    } else {
        saiDiaChi.innerHTML = "Địa chỉ không hợp lệ";
        return false;
    }
}

// Bắt sự kiện click nút xác nhận
xacNhanButton.addEventListener("click", function () {
    if (checkTen() && checkSdt() && checkDiaChi()) {
        thanhToanDiv.innerHTML = "Thanh toán thành công!";
    } else {
        thanhToanDiv.innerHTML = "";
    }
});

// Bắt sự kiện khi người dùng nhập vào ô tên
nameInput.addEventListener("input", function () {
    checkTen();
});

// Bắt sự kiện khi người dùng nhập vào ô số điện thoại
sdtInput.addEventListener("input", function () {
    checkSdt();
});

// Bắt sự kiện khi người dùng nhập vào ô địa chỉ
diaChiInput.addEventListener("input", function () {
    checkDiaChi();
});


