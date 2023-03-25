import { Login } from '@app/pages/login'
import { PageIndex } from '@app/pages/page-index'
// import { GetOutpass } from '@app/pages/student/get-outpass/get-outpass'
import { UserProfile } from '@app/pages/user-profile'
import { PersonalDetails } from '@app/pages/student-login'
import { HostelDetails } from '@app/pages/student-login'
import { AcademicDetails } from '@app/pages/student-login'
import { CreateAccountPage } from '@app/pages/student-login'
import { OutpassDetails } from '@app/pages/student-login'
import { ContactDetails } from '@app/pages/student-login'
import { WardenAccount } from '@app/pages/warden'
import { WardenHome } from '@app/pages/warden'
import { StudentHome } from '@app/pages/student-login'
import { FeedbackForm } from '@app/pages/student-login'
import { FeedbackSent } from '@app/pages/student-login'

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
		name: 'student-login',
		component: CreateAccountPage,
		options: {
			title: 'Create Account Page',
		},
	},
	{
		name: 'personal-details',
		component: PersonalDetails,
		options: {
			title: 'Personal details',
		},
	},
	{
		name: 'academic-details',
		component: AcademicDetails,
		options: {
			title: 'Academic details',
		},
	},
	{
		name: 'hostel-details',
		component: HostelDetails,
		options: {
			title: 'Hostel details',
		},
	},
	{
		name: 'outpass-details',
		component: OutpassDetails,
		options: {
			title: 'Outpass details',
		},
	},
	{
		name: 'contact-details',
		component: ContactDetails,
		options: {
			title: 'Contact details',
		},
	},
	{
		name: 'student-home',
		component: StudentHome,
		options: {
			title: 'Student home',
		},
	},
	{
		name: 'feedback-form',
		component: FeedbackForm,
		options: {
			title: 'Feedback form',
		},
	},
	{
		name: 'feedback-sent',
		component: FeedbackSent,
		options: {
			title: 'Feedback Sent',
		},
	},
	{
		name: 'warden-account',
		component: WardenAccount,
		options: {
			title: 'Warden account',
		},
	},
	{
		name: 'warden-home',
		component: WardenHome,
		options: {
			title: 'Warden home',
		},
	},
]
