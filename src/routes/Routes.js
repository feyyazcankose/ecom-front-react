import Home from '../components/Home' ;
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const routes = [
    {path:'/' ,component: Home},
    {path:'/register' ,component: Register},
    {path:'/login' ,component: Login},
]

export default routes;