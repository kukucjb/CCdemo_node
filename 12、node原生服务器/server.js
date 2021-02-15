/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-13 23:38:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-14 02:10:52
 */
// 搭建node原生的服务器
//引入node内置的http模块 
let http  = require("http")

//引入内置模块用于解析   key=value&key=value....这种形式的字符串为js中的对象

// 形如 key=value&key=value.... 的编码形式  urlencoded编码形式
// 请求地址里面 携带urlencoded编码形式   叫做查询字符串参数

//引入的qs 是一个对象  qs.parse()
let qs = require("querystring")

// 1、创建服务对象
let server = http.createServer(function(request,response){
  //查看请求方式 
  console.log(request.method);
  //获取客户端传来的 urlencoded编码形式 参数   并转为对象形式
  let params = request.url.split("?")[1]
  console.log(params);
  let paramsobj = qs.parse(params)

  console.log(paramsobj);

  let {name,age} = paramsobj
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html;charset=UTF-8')
  response.end(`我叫${name},今年是${age}岁`)
})


/* 
  1、request   请求对象
  2、response  相应对象
*/


// 2、指定服务器运行的端口号 (绑定端口监听)
server.listen(3000,function(err){
  if(!err){
      console.log('运行成功了');
  }
  else{
    console.log(err);
  }
})