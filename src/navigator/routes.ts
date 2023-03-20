import { Home } from '../pages/home'
import { UserProfile } from '../pages/user-profile'

export const routes = [
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
