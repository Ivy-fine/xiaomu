import Mock from 'mockjs'
let data =[
    {
        title:'进口柑 约450g',
        price:9.9,
        id:0
    },{
        title:'红李 约900g',
        price:7.2,
        id:1
    },{
        title:'京信西瓜 1粒',
        price:19.9,
        id:2
    },{
        title:'金针菇 约400g',
        price:1.98,
        id:3
    },{
        title:'菠菜 350g',
        price:2.9,
        id:4
    },{
        title:'胡萝卜 400g',
        price:2.9,
        id:5
    },{
        title:'鲜鸡蛋 500g',
        price:9.9,
        id:6
    },{
        title:'羊肉卷 500g',
        price:9.9,
        id:7
    },{
        title:'牛肉',
        price:9.9,
        id:8
    }
]
Mock.mock('/getlist','get',data)