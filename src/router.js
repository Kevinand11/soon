import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
	},
	{
		path: '/emails',
		name: 'Emails',
		component: () => import(/* webpackChunkName: "emails" */ './pages/Emails.vue')
	}
]

export const router = createRouter({
	history: createWebHistory(),
	base: process.env.BASE_URL,
	routes
})