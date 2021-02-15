/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-13 22:50:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-13 23:20:55
 */
// 此模块用于连接数据库  并判断数据库的连接状态
var mongoose = require("mongoose");
const DB_NAME = "demo2";
const port = "27017";
const IP = "localhost"


function connectMongod(callback) {
  mongoose.set("useCreateIndex", true)
  // 1、连接数据库
  mongoose.connect(`mongodb://${IP}:${port}/${DB_NAME}`, {
    useNewUrlParser: true, //使用一个新的URL解析器，用于解析安全性问题
    useUnifiedTopology: true //使用统一的新的拓扑结构
  })
  //
  //2、绑定数据库连接监听
  mongoose.connection.on("open", (err) => {
    if (err) {
      console.log('数据库连接失败' + err);
      callback("connect falid")
    } else {
      // 数据库连接成功后的操作
      console.log('数据库连接成功');
      callback()
    }
  })
}

module.exports = connectMongod