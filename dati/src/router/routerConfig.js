import Home from '../views/home/home'
import Exam from '../views/exam/exam'
const routes = [
    {
        path:'/home',
        component:Home
    },{
        path:'/exam',
        component:Exam
    },{
        path:'/',
        redirect:'/home'
    }
]

export default routes;