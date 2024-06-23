document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".button");
    btn.addEventListener("click", () => {
        const userInput = document.getElementById("input-txt").value;
        
        console.log(userInput)
        
        if(userInput)
          generate(userInput);
         
        else
        alert("Write Something for QR code")

    });
    
    const genrateQR = document.querySelector(".generateBTN")
    genrateQR.addEventListener("click",()=>{
        const userInput = document.getElementById("input-txt").value = ""

    })

    function generate(user_input) {
        const qr_code = document.querySelector(".qr-code");
        qr_code.innerHTML = ""; 
        qr_code.style.display = "block"; 

        let qrCode = new QRCode(qr_code, {
            text: user_input,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff"
        });

        console.log(qrCode);

        let download = document.querySelector(".download-btn");
        if (!download) {
            download = document.createElement("button");
            download.innerText = "Download";
            download.classList.add("download-btn");
        }
        
        let downloadLink = document.querySelector(".download-link");
        if (!downloadLink) {
            downloadLink = document.createElement("a");
            downloadLink.setAttribute("download", "qr_code_link.png");
            downloadLink.classList.add("download-link");
            qr_code.appendChild(downloadLink);
            downloadLink.appendChild(download)
        }

        setTimeout(() => {
            const qrImg = document.querySelector(".qr-code img");
            const qrCanvas = document.querySelector(".qr-code canvas");

            if (qrImg && qrImg.getAttribute("src") !== null) {
                downloadLink.setAttribute("href", qrImg.getAttribute("src"));
            } else if (qrCanvas) {
                downloadLink.setAttribute("href", qrCanvas.toDataURL());
            }
        }, 1000);
    }
});

