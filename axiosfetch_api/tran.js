/*
 * @Author: your name
 * @Date: 2021-10-24 11:12:25
 * @LastEditTime: 2021-10-24 11:46:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pratice\fetch_api\index.js
 */

const { default: axios } = require("axios");
const word = process.argv.slice(2)
let n =1
let url = `http://dict.youdao.com/suggest?q=${word}&num=${n}&doctype=json`
//使用 async\await 语法糖
async function translate(){
    let res = await axios.get(url).catch(err=>console.log(err));
    let json = await res.data
    let expjson = await json.data.entries
    console.log(`您搜索的词为  ${expjson[0].entry}`)
    console.log(expjson[0].explain)
    

}
translate()

// //promise异步
// axios.get(url)
//     .then(res=>res.data)
//     .then(json=>{console.log(json.data.entries)})




