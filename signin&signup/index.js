    const usernameEl = document.querySelector("#username");
    const usernameElregister = document.querySelector("#usernameregister");
    const passwordEl = document.querySelector("#password");
    const passwordElregister = document.querySelector("#passwordregister");
    const repasswordElregister = document.querySelector("#re-passwordregister");
    const emailEl = document.querySelector("#email");
    const phonenumberEl = document.querySelector("#phone");
    const captchaEl = document.querySelector("#captcha");
    const sendCaptchaEl = document.querySelector("#send-captcha");
    const submitEl = document.querySelector("#login");
    
    let x = document.getElementById("login");
    x.addEventListener("click", loginit);
    function loginit() {
        if(usernameEl.value == ""){
            alert("Please enter your username!");
            return;
        }
        if(passwordEl.value == ""){
            alert("Please enter your password!");
            return;
        }
        else{
            alert(`用户名：${usernameEl.value}\n密码：${passwordEl.value}\n\n\n登录成功！`);
        }
        x.removeEventListener("click", loginit);
    }

    let y = document.getElementById("register");
    y.addEventListener("click", register);
    function register() {
        if(usernameElregister.value == ""){
            alert("Please enter your username!");
        }
        else if(emailEl.value == ""){
            alert("Please enter your email!");
        }
        else if(phonenumberEl.value == ""){
            alert("Please enter your phone number!");
        }
        else if(phonenumberEl.value.length != 11){
            alert("Please enter your correct phone number!");
        }
        else if(passwordElregister.value == ""){
            alert("Please enter your password!");
        }
        else if(repasswordElregister.value == ""){
            alert("Please enter your password again!");
        }
        else if(captchaEl.value == ""){
            alert("Please enter your captcha!");
        }
        else if(passwordElregister.value != repasswordElregister.value){
            alert("The passwords you entered do not match!");
        }
        else{
            alert(`用户名：${usernameElregister.value}\n密码：${passwordElregister.value}\n邮箱：${emailEl.value}\n手机号：${phonenumberEl.value}\n验证码：${captchaEl.value}\n\n\n注册成功！`);
        }

    }
    let z = document.getElementById("send-captcha");
    z.addEventListener("click", sendCaptcha);
    function sendCaptcha() {
        if(phonenumberEl.value == ""){
            alert("Please enter your phone number!");
        }
        else if(phonenumberEl.value.length != 11){
            alert("Please enter your correct phone number!");
        }
        else if(phonenumberEl.value.length == 11){
            sendCMS();
            alert(`手机号：${phonenumberEl.value}\n\n验证码已发送！`);
            document.getElementById("send-captcha").disabled=true;
            for(let i = 1,k=180; i <= 180,k>=1; i++,k--){
                setTimeout(function(){
                    document.getElementById("send-captcha").value=k;
                    if(k == 1){
                        document.getElementById("send-captcha").disabled=false;
                        document.getElementById("send-captcha").value="发送验证码";
                    }
                }, i*1000);
            }
            
        }

    }
    //发送验证码
    function sendCMS(){
        return true;
    } 