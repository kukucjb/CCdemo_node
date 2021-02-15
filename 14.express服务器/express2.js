/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-14 02:05:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-14 02:29:55
 */
const express =  require('express')
// 1、创建app服务对象
const  app = express()

// 2、配置路由    ----对请求的url分类
app.get('/',function (request,response) {
  response.send('我是主页')
  //直接输出对象
  console.log(request.query)
})

app.get('/meishi',function (request,response) {
  response.send('我是美食')
})


app.listen(3000,function(err){
  if(!err){
      console.log('运行成功了');
  }
  else{
    console.log(err);
  }
})