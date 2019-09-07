import Mock from 'mockjs'
let data = require("./shop.json")
Mock.mock("/getlist","get",data)