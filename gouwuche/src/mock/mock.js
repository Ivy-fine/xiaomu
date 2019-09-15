import Mock from 'mockjs'
let data=[
    {
        title:'果味',
        children:[
            {
                title:'梨花带雨 3个',
                img:'img/c2.png',
                price:0.01,
                count:1,
                id:'c1_1'
            },
            {
                title:'红枣 500g',
                img:'img/c3.png',
                price:0.02,
                count:1,
                id:'c1_2'
            },{
                title:'奇异果 2个',
                img:'img/c4.png',
                price:0.03,
                count:1,
                id:'c1_3'
            }
        ]
    },
    {
        title:'蔬菜',
        children:[
            {
                title:'新鲜芹菜 半斤',
                img:'img/s5.png',
                price:0.03,
                count:1,
                id:'c2_1'
            }
        ]
    },
    {
        title:'炒货',
        children:[
            {
                title:'花生 半斤',
                img:'img/s4.png',
                price:0.03,
                count:1,
                id:'c3_1'
            }
        ]
    },
    {
        title:'点心',
        children:[
            {
                title:'新鲜芹菜 半斤',
                img:'img/s4.png',
                price:0.03,
                count:1,
                id:'c4_1'
            }
        ]
    },
    {
        title:'粗茶',
        children:[
            {
                title:'新鲜芹菜 半斤',
                img:'img/s4.png',
                price:0.03,
                count:1,
                id:'c5_1'
            }
        ]
    },
    {
        title:'淡饭',
        children:[
            {
                title:'素米 500g',
                img:'img/s6.png',
                price:0.03,
                count:1,
                id:'c6_1'
            }
        ]
    }
]
Mock.mock('/getlist','get',data)