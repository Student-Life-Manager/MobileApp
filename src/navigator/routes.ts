import { Login } from '@app/pages/login'
import { PageIndex } from '@app/pages/page-index'
import { UserProfile } from '@app/pages/user-profile'
import { PersonalDetails } from '@app/pages/student/onboarding'
import { HostelDetails } from '@app/pages/student/onboarding'
import { AcademicDetails } from '@app/pages/student/onboarding'
import { CreateAccountPage } from '@app/pages/student/onboarding'
import { OutpassDetails } from '@app/pages/student/get-outpass'
import { ContactDetails } from '@app/pages/student/get-outpass'
import { WardenAccount } from '@app/pages/warden/warden-account'
import { WardenHome } from '@app/pages/warden/warden-home'
import { StudentHome } from '@app/pages/student/student-home'
import { FeedbackForm } from '@app/pages/student/feedback-form'
import { FeedbackSent } from '@app/pages/student/feedback-sent'
import { OutpassCancelled } from '@app/pages/student/outpass/outpass-cancelled'
import { OutpassWaiting } from '@app/pages/student/outpass/outpass-waiting'
import { Outpass } from '@app/pages/student/outpass/outpass-approved'
import { VerifyOTP } from '@app/pages/verify-otp'

export const routes = [
	{
		name: 'page-index',
		component: PageIndex,
		options: {
			title: 'Page index',
		},
	},
	{
		name: 'verifyOtp',
		component: VerifyOTP,
		options: {
			title: 'Verify OTP',
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
		name: 'create-account',
		component: CreateAccountPage,
		options: {
			title: 'Create Account',
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
		name: 'outpass-waiting',
		component: OutpassWaiting,
		options: {
			title: 'Oupass waiting',
		},
	},
	{
		name: 'outpass-cancelled',
		component: OutpassCancelled,
		options: {
			title: 'Oupass cancelled',
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
			title: 'Feedback sent',
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
	{
		name: 'outpass',
		component: Outpass,
		options: {
			title: 'Outpass status',
		},
	},
]
