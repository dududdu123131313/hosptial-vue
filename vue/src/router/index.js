// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 懒加载组件
const HomeComponent = () => import('../components/HomeComponent.vue');
const RegistrationComponent = () => import('../components/RegistrationComponent.vue');
const MyRegistrationsComponent = () => import('../components/MyRegistrationsComponent.vue');
const MyBillsComponent = () => import('../components/MyBillsComponent.vue');
const MessagesComponent = () => import('../components/MessagesComponent.vue');
const ProfileComponent = () => import('../components/ProfileComponent.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationComponent
  },
  {
    path: '/my-registrations',
    name: 'myRegistrations',
    component: MyRegistrationsComponent
  },
  {
    path: '/my-bills',
    name: 'myBills',
    component: MyBillsComponent
  },
  {
    path: '/messages',
    name: 'messages',
    component: MessagesComponent
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;