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


function pop(text) {
    let div = document.querySelector('#pop');
    div.style.display = 'block';
    for (let i = 0, k = 0; i < 1.00, k < 100; i += 0.01, k++) {
        setTimeout(function () {
            div.style.right = k + 'px';
            div.innerHTML = `<p style="opacity:${i};"id="p">${text}</p>`;
        }, i * 1000);
    }
    for (let q = 0; q < 5; q++) {
        setTimeout(function () {
            if (q == 4) {
                div.style.display = 'none';
            }
        }, q * 1000);
    }
}

let x = document.getElementById("login");
x.addEventListener("click", loginit);

function loginit() {
    if (usernameEl.value == "") {
        pop("请输入用户名！");
        return;
    }
    if (passwordEl.value == "") {
        pop("请输入密码！");
        return;
    } else {
        login();
        // pop(`用户名：${usernameEl.value}\n密码：${passwordEl.value}\n\n\n登录成功！`);
    }
}

let y = document.getElementById("register");
y.addEventListener("click", register);

function register() {
    if (usernameElregister.value == "") {
        pop("请输入用户名！");
    } else if (emailEl.value == "") {
        pop("请输入邮箱！");
    } else if (!(/^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(emailEl.value))) {
        pop("请输入正确的邮箱！");
    } else if (phonenumberEl.value == "") {
        pop("请输入手机号！");
    } else if (!(/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(phonenumberEl.value))) {
        pop("请输入正确的手机号！");
    } else if (passwordElregister.value == "") {
        pop("请输入密码！");
    } else if (repasswordElregister.value == "") {
        pop("请再次输入密码！");
    } else if (captchaEl.value == "") {
        pop("请输入验证码！");
    } else if (passwordElregister.value != repasswordElregister.value) {
        pop("两次密码输入不相同！");
    } else {
        // pop(`用户名：${usernameElregister.value}\n密码：${passwordElregister.value}\n邮箱：${emailEl.value}\n手机号：${phonenumberEl.value}\n验证码：${captchaEl.value}\n\n\n注册成功！`);
        let username = usernameElregister.value;
        let email = emailEl.value;
        let phone = phonenumberEl.value;
        let password = passwordElregister.value;
        let captcha = captchaEl.value;
        fetch('http://todoapi.mjclouds.com/v1/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    user_name: username,
                    password: password,
                    email: email,
                    phone: phone,
                    code: captcha
                }),
                mode: 'cors',
            })
            .then(res => res.json())
            .then(data => {
                if (data.code != 2000) {
                    pop(data.message);
                    console.log(data);
                } else {
                    pop("注册成功！");
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            })
    }

}
let z = document.getElementById("send-captcha");
z.addEventListener("click", sendCaptcha);

function sendCaptcha() {
    if (phonenumberEl.value == "") {
        pop("请输入手机号！");
    } else if (phonenumberEl.value.length != 11) {
        pop("请输入正确的手机号！");
    } else if (phonenumberEl.value.length == 11) {
        sendCMS();
        // pop(`手机号：${phonenumberEl.value}\n\n验证码已发送！`);
        document.getElementById("send-captcha").disabled = true;
        for (let i = 1, k = 180; i <= 180, k >= 1; i++, k--) {
            setTimeout(function () {
                document.getElementById("send-captcha").value = k;
                if (k == 1) {
                    document.getElementById("send-captcha").disabled = false;
                    document.getElementById("send-captcha").value = "发送验证码";
                }
            }, i * 1000);
        }

    }

}
//发送验证码
function sendCMS() {
    const url = 'http://todoapi.mjclouds.com/v1/user/register/code/';
    fetch(`${url}${phonenumberEl.value}`)
        .then(response => response.json())
        .then(data => pop(data.message))
}

//登录
function login() {
    let username = usernameEl.value;
    let password = passwordEl.value;
    fetch("http://todoapi.mjclouds.com/v1/user/login", {
            method: 'POST',
            body: JSON.stringify({
                "user_name": username,
                "passwd": password,
            }),
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            if (data.code !== 2000) {
                pop(data.message);
                console.log(data);
            } else {
                pop("登录成功！");
                console.log(data);
                localStorage.setItem("token", data["data"][0]["token"]);
                console.log(localStorage.getItem("token"));
                setTimeout(function () {
                    location.href = "./todolist.html";
                }, 1000);
            }
        })
}