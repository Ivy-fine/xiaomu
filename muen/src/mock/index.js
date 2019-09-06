import Mock from 'mockjs'
Mock.mock("/giftlist","get",{
    "status":200,
    "list|10":[{
        "type|+1":["项链","戒指","耳钉"],
        "img":"@image(100x100)",
        "desc":"@ctitle",
        "price|5-50":0,
        "id":"@id",
        "imgUrl|3":[{"img":"@image(100x100,@color)"}]
    }]
})