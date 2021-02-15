/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-13 22:35:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-13 23:19:20
 */
//引入mongoose
// 1、借助第三方库连接数据库
var mongoose = require("mongoose");
// 引入模式对象
let Schema = mongoose.Schema
// 指定数据的规则   --创建约束对象
let stu_rule = new Schema({
  stu_id: {
    type: String, //限制学号的类型必须来字符串
    required: true, //限制为必填项 
    unique: true //限制学号是唯一的
  },
  name: {
    type: String, //限制名字的类型必须来字符串
    required: true, //限制为必填项 
  },
  age: {
    type: Number, //限制年龄的类型必须为数字
    required: true, //限制为必填项 
  },
  sex: {
    type: String, //限制性别的类型必须字符串
    required: true, //限制为必填项 
  },
  hobby: [String], //限制爱好只能为数组   且数组的每一项都为 String 类型
  info: Schema.Types.Mixed, //接受所有类型
  date: {
    type: Date,
    default: new Date()
  }

})
//用于生成某个集合对应的模型对象
module.exports = mongoose.model("students", stu_rule)