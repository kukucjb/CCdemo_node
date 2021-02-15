/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-13 17:12:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-13 22:37:57
 */
/*
 * mongoDB:一个数据库品牌的名字
 * mongod:启动数据库的命令
 * mongo:连接接数据库的命令
 * mongoose：在Node平台下，一个知名的用于帮助开发者连接mongoDB的包
 * */
//为什么用mongoose？ 想在Node平台下，更加简单、高效、安全、稳定的操作mongoDB
//当引入第三方库的时候，如果在本文件夹内没有找到node_modules，找外层文件夹，直到根目录

//引入mongoose
// 1、借助第三方库连接数据库
var mongoose = require("mongoose");

mongoose.set("useCreateIndex", true) //使用新的索引创建器

mongoose.connect('mongodb://localhost:27017/demo', {
  useNewUrlParser: true, //使用一个新的URL解析器，用于解析安全性问题
  useUnifiedTopology: true //使用统一的新的拓扑结构
})


//2、绑定数据库连接监听
mongoose.connection.on("open", (err) => {
  if (err) {
    console.log('数据库连接失败' + err);
  } else {
    // 数据库连接成功后的操作


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


    //增加规则  第一个参数指的是集合名字   第二个是该集合的规则       ----创建模型对象
    let stu_model = mongoose.model("students", stu_rule) //用于生成某个集合对应的模型对象


    //操作数据   进行CRUD
    // 新增操作
    // stu_model.create({
    //   stu_id:"00111",
    //   name:"yoyo",
    //   age:21,
    //   sex:"女",
    //   hobby:["333","444","5555"],   //限制爱好只能为数组   且数组的每一项都为 String 类型
    //   info:"qwqw",    //接受所有类型
    // },function(err,date){
    //   if(!err){
    //       console.log("成功了");
    //   }
    //   else{
    //     console.log('err'+err);
    //   }
    // })

    //查询操作
    //  find方法 ：1、返回的是数组   就算只有一条数据 也是包裹一个数组  
    //  2、如果没有数据 返回的是[]
    // stu_model.find({name:"roro"},function(err,data){
    //   if(!err){
    //     console.log('查到了');
    //     console.log(data);
    //   }else{
    //     console.log('=========='+err);
    //   }
    // })


    //  findOne ：1、若有结果 返回的是对象  只返回一个
    //  2、如果没有数据 返回的是null
    // stu_model.findOne({sex:"q"},function(err,data){
    //   if(!err){
    //     console.log("查到了");
    //     console.log(data);
    //   }else{
    //     console.log(err);
    //   }
    // })


    //更新   updateOne     updateMany
    // stu_model.updateOne({
    //   sex: "女"
    // }, {
    //   age: 25
    // }, function (err, data) {
    //   if (!err) {
    //     console.log("查到了");
    //     console.log(data);
    //   } else {
    //     console.log(err);
    //   }
    // })



    //删除

    stu_model.deleteMany({
      age: 21
    }, function (err,data) {
      if (!err) {
        console.log(data);
      } else {
        console.log(err);
      }
    })
  }
})