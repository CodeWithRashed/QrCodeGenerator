var inputText = document.getElementById('inputtext');
var qrImg = document.getElementById('qrimg');
var imgbox = document.getElementById('imagebox');


function generateQr(){

    if (inputText.value.length> 0) {
        var qrcode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        qrImg.src = qrcode;
        imgbox.classList.add("imageboxafter");
        document.getElementById('card').classList.add("cardafter");
    } else{
        alert("Please Enter Text or URL")
    }
};
