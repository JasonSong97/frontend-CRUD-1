import {createRouter, createWebHistory} from 'vue-router/dist/vue-router';
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Cart from "@/pages/Cart";
import Order from "@/pages/Order";
import Orders from "@/pages/Orders";
import Qna from "@/pages/Qna";

const routes = [
     // / 경로로 오면 Home으로 보냄
     {path:'/', component: Home},
     // /login 경로로 오면 Login으로 보냄
     {path:'/login', component: Login},
     {path:'/cart', component: Cart},
     {path: '/order', component: Order},
     {path: '/orders', component: Orders},
     {path: '/qna', component: Qna}
]

// 라우터 생성
const router = createRouter({
     // 브라우저의 기록을 사용하여 라우팅을 관리
     history: createWebHistory(), 
     // 위의 경로들
     routes
})

export default router;