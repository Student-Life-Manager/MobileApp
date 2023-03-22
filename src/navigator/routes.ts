import { Login } from '@app/pages/login'
import { PageIndex } from '@app/pages/page-index'
import { GetOutpass } from '@app/pages/student/get-outpass/get-outpass'
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
]
