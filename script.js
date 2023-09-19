const imgBox = document.getElementById("imgBox");
const inputElem = document.getElementById("js-input");
const buttonElem = document.getElementById("js-btn");
const imgElem = document.getElementById("qrImg");

// function to generate QR code
const generateQR = () => {
  if (inputElem.value.length > 0) {
    imgElem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputElem.value}`;
    imgBox.classList.add("show-img");
  } else {
    inputElem.classList.add("error");
    setTimeout(() => {
      inputElem.classList.remove("error");
    }, 1000);
  }
};

buttonElem.addEventListener("click", generateQR);
