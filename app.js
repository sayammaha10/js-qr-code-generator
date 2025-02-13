const container = document.querySelector(".container");
const qrInput = container.querySelector(".input-wrapper input");
const btn = container.querySelector(".input-wrapper button");
const qrImg = container.querySelector(".qr-code img");

btn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  btn.textContent = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    container.classList.add("show");
    btn.textContent = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    container.classList.remove("show");
  }
});
