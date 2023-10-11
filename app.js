// Lấy modal
var modal = document.getElementsByClassName("canvas-customer-login")[0];

var modalMenu = document.getElementsByClassName("header-canvas-menu")[0];

// Lấy button mở modal
var btn = document.getElementsByClassName("header-account")[0];

var overLay = document.getElementsByClassName("header-overlay")[0];


// Lay btn close modal

var btnClose = document.getElementsByClassName("close")[0];
var btnClose2 = document.getElementsByClassName("header-overlay")[0];




// Khi người dùng nhấp vào nút, mở modal
btn.onclick = function () {
  modal.style.right = "50%";
  modal.style.transform  = "translateX(50%)"
  overLay.style.display = "block";
};


// Khi người dùng nhấp vào nút, mở modal
btnClose.onclick = function () {
  modal.style.right = "-500px";
  overLay.style.display = "none";

};

btnClose2.onclick = function () {
  modal.style.right = "-500px";
  overLay.style.display = "none";

};

btnCloseMenu.onclick = function () {
  modalMenu.style.left = "-450px";
  overLay.style.display = "none";

};

btnClose2.onclick = function () {
  modal.style.right = "-500px";
  modalMenu.style.left = "-450px";
  overLay.style.display = "none";
};






