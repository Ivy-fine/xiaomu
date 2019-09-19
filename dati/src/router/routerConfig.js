import Home from '../views/home/home'
import Exam from '../views/exam/exam'
import List from '../views/list/list'
const routes = [
    {
        path:'/home',
        component:Home
    },{
        path:'/exam',
        component:Exam
    },{
        path:'/list',
        component:List
    },{
        path:'/',
        redirect:'/home'
    }
]

export default routes;