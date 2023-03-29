import { Login } from '@app/pages/login'
import { Outpass } from '@app/pages/outpass'
import { PageIndex } from '@app/pages/page-index'
import { UserProfile } from '@app/pages/user-profile'

export const routes = [
	{
		name: 'page-index',
		component: PageIndex,
		options: {
			title: 'Page index',
		},
	},
	{
		name: 'login',
		component: Login,
		options: {
			title: 'Login',
		},
	},
	{
		name: 'user-profile',
		component: UserProfile,
		options: {
			title: 'Profile',
		},
	},
	{
		name: 'outpass',
		component: Outpass,
		options: {
			title: 'Outpass status',
		},
	},
]
