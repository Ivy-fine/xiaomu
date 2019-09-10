import Mock from 'mockjs'
let city = require("./city.json")
// console.log(city.data)
let data={}

let title =[...new Set(city.data.map(item=>{
    return item.Spelling.slice(0,1)
}))] 
// console.log(title)

title.forEach(item=>{
    data[item]=city.data.filter(item1=>item1.Spelling.slice(0,1)===item)
})
// console.log(data)

Mock.mock("/getlist","get",data)