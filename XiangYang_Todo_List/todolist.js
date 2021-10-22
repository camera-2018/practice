/*
 * @Author: xiangyang
 * @Date: 2021-10-20 15:22:50
 * @LastEditTime: 2021-10-22 15:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XiangYang_Todo_List\todolist.js
 */
const green = "\033[32m";     
const yellow = "\033[33m";
const azure = "\033[36m";
const red = "\033[31m";
const fontfoot = "\033[0m";
const fs = require('fs');
const yaml = require('js-yaml');

function write(data){                   //写入
    try {
        fs.writeFileSync('todo.yaml',yaml.dump(data),'utf8');
        console.log('The file has been saved!');
        } 
    catch (e) { 
        console.log(e);
        }
}

function read(){                           //读取
    try {
        let json = yaml.load(fs.readFileSync('todo.yaml', 'utf8'));
        return json;
        } 
    catch (e) {
        console.log(e);
        }
    
}

let todojson = read();

function done(b){
    todojson.done.forEach((element,index,arr) => {     //done到done
        if(element.id==b){
            console.log(`${azure+"Already Done!"+fontfoot}`)
        }
    });
    todojson.todo.forEach((element,index,arr) => {     //todo到done
        if(element.id==b){
            todojson.done.push(element);
            arr.splice(index,1);
        }
    });
    todojson.doing.forEach((element,index,arr) => {     //doing到done
        if(element.id==b){
            todojson.done.push(element);
            arr.splice(index,1);
        }
    });
}

function todo(b){
    todojson.todo.forEach((element,index,arr) => {     //todo到todo
        if(element.id==b){
            console.log(`${azure+"Already Todo!"+fontfoot}`)
        }
    });
    todojson.done.forEach((element,index,arr) => {     //done到todo
        if(element.id==b){
            todojson.todo.push(element);
            arr.splice(index,1);
        }
    });
    todojson.doing.forEach((element,index,arr) => {     //doing到todo
        if(element.id==b){
            todojson.todo.push(element);
            arr.splice(index,1);
        }
    });
}

function doing(b){
    todojson.doing.forEach((element,index,arr) => {     //doing到doing
        if(element.id==b){
            console.log(`${azure+"Already Doing!"+fontfoot}`)
        }
    });
    todojson.todo.forEach((element,index,arr) => {     //todo到doing
        if(element.id==b){
            todojson.doing.push(element);
            arr.splice(index,1);
        }
    });
    todojson.done.forEach((element,index,arr) => {     //done到doing
        if(element.id==b){
            todojson.doing.push(element);
            arr.splice(index,1);
        }
    });
}

//添加 语法为 node xxx.js add <status> <id> <content>
function add(addstatus,addid,content1){
    if(addstatus==='todo'){
        let newobject = {id:parseInt(addid),content:content1};
        todojson.todo.push(newobject);
    }
    if(addstatus==='doing'){
        let newobject = {id:parseInt(addid),content:content1};
        todojson.doing.push(newobject);
    }
    if(addstatus==='done'){
        let newobject = {id:parseInt(addid),content:content1};
        todojson.done.push(newobject);
    }
}

function help(){
    let help =[
        "node todolist.js <method> [options...]                     ",
        "<status> = todo / doing / done                              ",
        "node todolist.js add <status> <id> <content>   添加任务",
        "node todolist.js ls                            列出所有任务",
        "node todolist.js ls --status=<status>          列出指定状态任务",
        "node todolist.js <status> <id>                 将该id对应的任务置为对应状态",
        "node todolist.js delete <id>                   删除该id的任务",
        "node todolist.js help                          帮助面板",
    ]
    help.forEach(element => {
        console.log(`${yellow+element+fontfoot}`);
    });
}

function printTodo(){
    console.log(`---------------${green+"todo"+fontfoot}---------------`);
    todojson.todo.forEach(element => {
        console.log(`${yellow+element.id+fontfoot}${' '.padEnd(28,' ')}${azure+element.content+fontfoot}`);
    });
}
function printDoing(){
    console.log(`---------------${green+"doing"+fontfoot}---------------`);
    todojson.doing.forEach(element => {
        console.log(`${yellow+element.id+fontfoot}${' '.padEnd(28,' ')}${azure+element.content+fontfoot}`);
    });
}
function printDone(){
    console.log(`---------------${green+"done"+fontfoot}---------------`);
    todojson.done.forEach(element => {
        console.log(`${yellow+element.id+fontfoot}${' '.padEnd(28,' ')}${azure+element.content+fontfoot}`);
    });
}
function printAll(){
    printTodo();
    printDoing();
    printDone();
}
//命令行控制
const args = process.argv.slice(2)
const argsplus = require('minimist')(process.argv.slice(2));
if(args[0]=='ls'){
    if(argsplus['status']==null){
        printAll();
    }
    else if(argsplus['status']==='todo'){
        printTodo();
    }
    else if(argsplus['status']==='doing'){
        printDoing();
    }
    else if(argsplus['status']==='done'){
        printDone();
    }
    else{
        console.log(`${red+'输入有误!'+fontfoot}`);
    }
}
if(args[0]==='help'){
    help();
}
//任务标签转移
if(args[0]==='done'){
    let b = args[1];
    done(b);
    write(todojson);
    printAll();
}
if(args[0]==='todo'){
    let b = args[1];
    todo(b);
    write(todojson);
    printAll();
}
if(args[0]==='doing'){
    let b = args[1];
    doing(b);
    write(todojson);
    printAll();
}
if(args[0]==='delete'){
    let b =args[1];
    todojson.todo.forEach((element,index,arr) => {
        if(element.id==b){
            arr.splice(index,1);
        }
    });
    todojson.doing.forEach((element,index,arr) => {
        if(element.id==b){
            arr.splice(index,1);
        }
    });
    todojson.done.forEach((element,index,arr) => {
        if(element.id==b){
            arr.splice(index,1);
        }
    });
    write(todojson);
    printAll();
}
if(args[0]==='add'){
    let addstatus = args[1];
    let addid = args[2];
    let content = args[3];
    
    add(addstatus,addid,content);
    write(todojson);
    printAll();
}


