import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { UserProfile } from '../pages/user-profile'

export const routes = [
	{
		name: 'login',
		component: Login,
		options: {
			title: 'Login',
		},
	},
	{
		name: 'home',
		component: Home,
		options: {
			title: 'Home',
		},
	},
	{
		name: 'user-profile',
		component: UserProfile,
		options: {
			title: 'Profile',
		},
	},
]
