/*
 * @Author: xiangyang
 * @Date: 2021-10-20 15:22:50
 * @LastEditTime: 2021-10-23 22:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XiangYang_Todo_List\todolist.js
 */
let version = ["Version 1.4"];

const fs = require('fs');
const yaml = require('js-yaml');
const chalk = require('chalk');

const statuslist = ['todo','doing','done'];
const args = process.argv.slice(2)
const argsplus = require('minimist')(process.argv.slice(2));


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
            console.log(`${chalk.bold.blueBright("Already Done!")}`)
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
            console.log(`${chalk.bold.blueBright("Already Todo!")}`)
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
            console.log(`${chalk.bold.blueBright("Already Doing!")}`)
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
        "node todolist.js version                       查看当前版本",
        "node todolist.js add <status> <id> <content>   添加任务",
        "node todolist.js ls                            列出所有任务",
        "node todolist.js ls --status=<status>          列出指定状态任务",
        "node todolist.js <status> <id>                 将该id对应的任务置为对应状态",
        "node todolist.js delete <id>                   删除该id的任务",
        "node todolist.js help                          帮助面板",
    ]
    help.forEach(element => {
        console.log(`${chalk.bold.yellow(element)}`);
    });
}

function printTodo(){
    console.log(`---------------${chalk.bold.green("todo")}---------------`);
    todojson.todo.forEach(element => {
        console.log(`${chalk.bold.yellow(element.id)}${' '.padEnd(28,' ')}${chalk.bold.blue(element.content)}`);
    });
}
function printDoing(){
    console.log(`---------------${chalk.bold.green("doing")}---------------`);
    todojson.doing.forEach(element => {
        console.log(`${chalk.bold.yellow(element.id)}${' '.padEnd(28,' ')}${chalk.bold.blue(element.content)}`);
    });
}
function printDone(){
    console.log(`---------------${chalk.bold.green("done")}---------------`);
    todojson.done.forEach(element => {
        console.log(`${chalk.bold.yellow(element.id)}${' '.padEnd(28,' ')}${chalk.bold.blue(element.content)}`);
    });
}
function printAll(){
    printTodo();
    printDoing();
    printDone();
}
//命令行控制
function main(args,argsplus){
    if(args[0]=='ls'){
        let status = argsplus['status'];
        if(status==null){
            printAll();
        }
        if(status==='todo'){
            printTodo();
        }
        if(status==='doing'){
            printDoing();
        }
        if(status==='done'){
            printDone();
        }
        for(let index = 0; index <= statuslist.length; index++) {
            if(status!=statuslist[index]&&status!=null){
                console.log(`${chalk.bold.red('输入有误!')}`);
                break;
            }
            
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
    
    if(args[0]==='version'){
        version.forEach(element => {
            console.log(chalk.bold.blue(element));
            console.log(chalk.bold.yellow(element));
            console.log(chalk.bold.green(element));
            console.log(chalk.bold.magenta(element));
            console.log(chalk.bold.gray(element));
        });
        
    }
}
main(args,argsplus);

