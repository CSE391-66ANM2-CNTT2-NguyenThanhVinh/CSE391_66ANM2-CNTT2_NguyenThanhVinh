const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");


const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
  //Doi toan bo chu sang mau trang
  document.body.style.color = "white";
});

const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});

document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});

