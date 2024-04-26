"use strict";

let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let generateButton = document.querySelector("#generateButton");

// Here is a function that generates the QR code. I got the api used here from QR code Api website
// The commented code inside is a sample given on the site all I need to do is to replace the word example with the input value and it will create a Qrcode for that value inputed. in other words the sample is QRcode for the word example

let generator = function generateQR() {
  //https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error"); // for the anmation to work, I need to add the error class. which is where the animation was built.
    setTimeout(() => {
      qrText.classList.remove("error"); // here, I am saing after a second, remove the error class
    }, 1000);
  }
};

// CALLING THE FUNCTION
generateButton.addEventListener("click", generator);
