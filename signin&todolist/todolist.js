const todoarticleEL = document.querySelector("#todoarticle");
const todotextEL = document.querySelector("#todotext");
const token = localStorage.getItem("token");
const tokentext = token.split(".");
let usermessage =  window.atob(tokentext[1]);
let user = JSON.parse(usermessage);

console.log(user.UserName);
document.getElementById("username").innerHTML = "😘"+"欢迎 "+ user.UserName;
fetch('http://todoapi.mjclouds.com/v1/todo/list', {
    method: 'GET',
    headers: {
        'token': localStorage.getItem('token'),
    },
})
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.code!=2000){
        alert(data.message);
    }
    console.log(data);
    data.data.forEach(element => {
        if(element.status == 0){
            document.getElementById('todo').innerHTML += 
            `<div class="todolists">
                ${element.todo_name}---${element.description}
                <button onclick="window.cardDel(${element.ID})">删除</button>
                <button onclick="window.changetodoing(${element.ID})">在做</button>
                <button onclick="window.changetodone(${element.ID})">做完</button>
            </div>`;
        }
        else if(element.status == 1){
            document.getElementById('doing').innerHTML += 
            `<div class="todolists">
                ${element.todo_name}---${element.description}
                <button onclick="window.cardDel(${element.ID})">删除</button>
                <button onclick="window.changetotodo(${element.ID})">要做</button>
                <button onclick="window.changetodone(${element.ID})">做完</button>
            </div>`;
        }
        else if(element.status == 2){
            document.getElementById('done').innerHTML += 
            `<div class="todolists">
                ${element.todo_name}---${element.description}
                <button onclick="window.cardDel(${element.ID})">删除</button>
                <button onclick="window.changetotodo(${element.ID})">要做</button>
                <button onclick="window.changetodoing(${element.ID})">在做</button>
            </div>`;
        }
    });
    
});
let x = document.getElementById("addBtn");
x.addEventListener("click", function(){
    let todoarticle = todoarticleEL.value;
    let todotext = todotextEL.value;
    if(todoarticle != ""&&todotext != ""){
        fetch('http://todoapi.mjclouds.com/v1/todo/add', {
            method: 'PUT',
            body: JSON.stringify({
                todo_name:todoarticle,
                description:todotext,
                end_time: 1637207544
            }),
            headers: {
                'token': localStorage.getItem('token'),
            },
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.code != 2000){
                alert(data.message);
            }
            location.reload();
        });
        
    }
});

window.cardDel=(id)=>{
    fetch(`http://todoapi.mjclouds.com/v1/todo/del/${id}`, {
        method: 'DELETE',
        headers: {
            'token': localStorage.getItem('token'),
        },
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.code != 2000){
            alert(data.message);
        }
        location.reload();
    });
}

window.changetodoing=(id)=>{
    fetch(`http://todoapi.mjclouds.com/v1/todo/doing/${id}`, {
        method: 'PUT',
        headers: {
            'token': localStorage.getItem('token'),
        },
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.code != 2000){
            alert(data.message);
        }
        location.reload();
    });
}

window.changetodone=(id)=>{
    fetch(`http://todoapi.mjclouds.com/v1/todo/done/${id}`, {
        method: 'PUT',
        headers: {
            'token': localStorage.getItem('token'),
        },
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.code != 2000){
            alert(data.message);
        }
        location.reload();
    });
}

window.changetotodo=(id)=>{
    fetch(`http://todoapi.mjclouds.com/v1/todo/todo/${id}`, {
        method: 'PUT',
        headers: {
            'token': localStorage.getItem('token'),
        },
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.code != 2000){
            alert(data.message);
        }
        location.reload();
    });
}
navigator.getBattery().then(function (battery) {
    let level = battery.level*100;
    document.querySelector('#level').innerHTML = "<img src = 'https://s3.bmp.ovh/imgs/2021/12/0d4579cc073c770c.png' id='ele'>"+'当前电池电量为'+ level.toFixed(0) + '%';
});

