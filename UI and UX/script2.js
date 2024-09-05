(function(){
    const fonts = ["cursive"];
    let captchaValue = "";

    function gencaptcha() {
        let value = btoa(Math.random()*1000000000);
        value = value.substr(0,5 + Math.random()*5);
        captchaValue = value;
    }

    function setcaptcha() {
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span style="transform:rotate(${rotate}deg);font-family:${fonts[font]};">${char}</span>`;
        }).join("");
        document.querySelector("#captcha1 .preview1").innerHTML = html;
    }

    function initCaptcha() {
        document.querySelector("#captcha1 .captcha_refersh1").addEventListener("click",function(){
            gencaptcha();
            setcaptcha();
        });
        gencaptcha();
        setcaptcha();
    }
    initCaptcha();

    document.querySelector(".form_button1").addEventListener("click",function(){
        let inputcaptchavalue = document.querySelector("#captcha_form1").value;

        if (inputcaptchavalue === captchaValue) {
            alert("Successful");
        } else {
            alert("Invalid Captcha");
        }
    });
})();
