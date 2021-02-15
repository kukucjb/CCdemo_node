/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-02-12 23:35:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-13 00:05:25
 */

// Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()
//创建一个buffer实例----- 性能最差的  1、在堆中开辟空间   2、清理   10表示size  
// let buf1 = Buffer(10)
// console.log(buf);

//创建一个buffer实例-----比new buffer 强一点    （在堆中开辟空间 未使用过的）
// let buf2 = Buffer.alloc(10)
// console.log(buf);

//创建一个buffer实例---性能最好的     ---在堆中开辟空间（新的空间或者是垃圾空间）   但是不进行清理
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3);
//输出  <Buffer ff ff ff ff ff ff ff ff 00 00> 
// 问题1  为什么不是二进制     输出的是16进制 但是存储的是二进制  输出的时候会自动转为16进制
// 问题2  为什么不为空         开辟空间时未进行清理  

//将数据存入一个buffer实例
let buf4 = Buffer.from("hello,world")
console.log(buf4);

// 问题1 输出为什么不是存入的字符串？存储的数据不一定是字符串   可能是媒体类型
// 问题2 如何 输入== 输出？  +.toString()