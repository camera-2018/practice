<!--
 * @Author: your name
 * @Date: 2021-10-21 11:31:17
 * @LastEditTime: 2021-10-24 12:06:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pratice\XiangYang_Todo_List\README.md
-->
# 安装
	npm install
# 使用
	node todolist.js help

	node todolist.js <method> [options...]                     
	<status> = todo / doing / done                              
	node todolist.js add <status> <id> <content>   添加任务
	node todolist.js ls                            列出所有任务
	node todolist.js ls --status=<status>          列出指定状态任务
	node todolist.js <status> <id>                 将该id对应的任务置为对应状态
	node todolist.js delete <id>                   删除该id的任务
	node todolist.js help                          帮助面板

# 目录
	│  package.json
	│  README.md
	│  todo.yaml
	│  todolist.js


# 更新记录
**1.1版本**
- 修了一堆bug

**1.2版本**
- 增加了炫彩代码 **史诗级更新 RGB增加50%性能** （ANSI转义序列 和 选择图形再现（SGR）参数）
- 炫彩的使用方法 https://www.cnblogs.com/xiaoqiangink/p/12718524.html
- 使用了字符串模板 template literals
- 增加使用了 === 严格判断 （不会用 会爆炸）

**1.3版本**
- 版本号 version 命令 add
- 多色字符串 chalk 库使用
- 修复了template literals 通过 + 连接字符串的问题

**1.4版本**
- 新增报错
- 写了主函数main