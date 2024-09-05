
(function(){
    const fonts = ["cursive"];
    let captchaValue = "";
    function gencaptcha()
    {
        let value = btoa(Math.random()*1000000000);
        value = value.substr(0,5 + Math.random()*5);
        captchaValue = value;
    }


    function setcaptcha()
    {
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return`<span
            style="
            transform:rotate(${rotate}deg);
            font-family:${fonts[font]};
            "
           >${char} </span>`;
        }).join("");
        document.querySelector("#captcha .preview").innerHTML = html;
    }


    function initCaptcha()
    {
        document.querySelector("#captcha .captcha_refersh").addEventListener("click",function(){
            gencaptcha();
            setcaptcha();
        });


        gencaptcha();
        setcaptcha();
    }
    initCaptcha();


    document.querySelector(".form_button").addEventListener("click",function(){
        let inputcaptchavalue = document.querySelector(" #captcha input").value;


        if (inputcaptchavalue === captchaValue)
        {


            alert("Successfull");
        }
        else
        {


            alert("Invalid Captcha");
        }
    });
})();
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});











