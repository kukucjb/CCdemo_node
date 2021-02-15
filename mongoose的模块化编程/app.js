/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-13 22:38:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-13 23:22:36
 */

//  1、引入mongoose库
var mongoose = require("mongoose");
//  2、引入学生模型
var stu_model =require("./module/studentModule")
//  3引入数据库连接模块
var db = require("./db/db")

db(function(err){
  if(err){
    console.log('连接失败');
  }else{
    console.log('CRUD');
// 4、进行CRUD

    stu_model.create({
      stu_id:"002",
      name:"yoyo",
      age:21,
      sex:"女",
      hobby:["333","444","5555"],   //限制爱好只能为数组   且数组的每一项都为 String 类型
      info:"qwqw",    //接受所有类型
    },function(err,date){
      if(!err){
          console.log("新增成功");
      }
      else{
        console.log('err'+err);
      }
    })

  }
})


// {
//     // 数据库连接成功后的操作
 


//     //操作数据   进行CRUD
//     // 新增操作
//     stu_model.create({
//       stu_id:"00111",
//       name:"yoyo",
//       age:21,
//       sex:"女",
//       hobby:["333","444","5555"],   //限制爱好只能为数组   且数组的每一项都为 String 类型
//       info:"qwqw",    //接受所有类型
//     },function(err,date){
//       if(!err){
//           console.log("成功了");
//       }
//       else{
//         console.log('err'+err);
//       }
//     })

//     //查询操作
//     //  find方法 ：1、返回的是数组   就算只有一条数据 也是包裹一个数组  
//     //  2、如果没有数据 返回的是[]
//     // stu_model.find({name:"roro"},function(err,data){
//     //   if(!err){
//     //     console.log('查到了');
//     //     console.log(data);
//     //   }else{
//     //     console.log('=========='+err);
//     //   }
//     // })


//     //  findOne ：1、若有结果 返回的是对象  只返回一个
//     //  2、如果没有数据 返回的是null
//     // stu_model.findOne({sex:"q"},function(err,data){
//     //   if(!err){
//     //     console.log("查到了");
//     //     console.log(data);
//     //   }else{
//     //     console.log(err);
//     //   }
//     // })


//     //更新   updateOne     updateMany
//     // stu_model.updateOne({
//     //   sex: "女"
//     // }, {
//     //   age: 25
//     // }, function (err, data) {
//     //   if (!err) {
//     //     console.log("查到了");
//     //     console.log(data);
//     //   } else {
//     //     console.log(err);
//     //   }
//     // })



//     //删除

//     // stu_model.deleteMany({
//     //   age: 21
//     // }, function (err,data) {
//     //   if (!err) {
//     //     console.log(data);
//     //   } else {
//     //     console.log(err);
//     //   }
//     // })
//   }
