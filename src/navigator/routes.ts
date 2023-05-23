import { ReactElement } from 'react'

import { LoaderPage } from '@app/pages/loader-page'
import { Login } from '@app/pages/login'
import { PageIndex } from '@app/pages/page-index'
import { PageTemplate } from '@app/pages/page-template'
import { ScanQRCode } from '@app/pages/scan-qrcode'
import { FeedbackForm } from '@app/pages/student/feedback-form'
import { FeedbackSent } from '@app/pages/student/feedback-sent'
import { ContactDetails } from '@app/pages/student/get-outpass/contact-details'
import {
	PersonalDetails,
	HostelDetails,
	AcademicDetails,
	CreateAccountPage,
} from '@app/pages/student/onboarding'
import { OutpassApproved } from '@app/pages/student/outpass/outpass-approved'
import { OutpassCancelled } from '@app/pages/student/outpass/outpass-rejected'
import { OutpassPending } from '@app/pages/student/outpass/outpass-waiting'
import { OutpassDetails } from '@app/pages/student/outpass-details'
import { StudentHome } from '@app/pages/student/student-home'
import { StudentProfile } from '@app/pages/student/student-profile'
import { UserProfile } from '@app/pages/user-profile'
import { VerifyOTP } from '@app/pages/verify-otp'
import { WardenAccount } from '@app/pages/warden/warden-account'
import { WardenHome } from '@app/pages/warden/warden-home'
import { WardenOutpassDetails } from '@app/pages/warden/warden-outpass-details'
import { WardenOutpassList } from '@app/pages/warden/warden-outpass-list'

interface route {
	name: string
	component: ({ navigation }: { navigation: any }) => JSX.Element
	isAuthProtected: boolean
	options: {
		title?: string
	}
}

export const routes: route[] = [
	// General & utils
	// {
	// 	name: 'page-index',
	// 	component: PageIndex,
	// 	isAuthProtected: false,
	// 	options: {
	// 		title: 'Page index',
	// 	},
	// },
	{
		name: 'pageTemplate',
		component: PageTemplate,
		isAuthProtected: false,
		options: {
			title: 'Page template',
		},
	},
	{
		name: 'loader-page',
		component: LoaderPage,
		isAuthProtected: false,
		options: {
			title: '',
		},
	},
	{
		name: 'create-account',
		component: CreateAccountPage,
		isAuthProtected: false,
		options: {
			title: 'Create Account',
		},
	},
	{
		name: 'login',
		component: Login,
		isAuthProtected: false,
		options: {
			title: 'Login',
		},
	},

	// Student pages
	{
		name: 'student-profile',
		component: StudentProfile,
		isAuthProtected: true,
		options: {
			title: 'My Profile',
		},
	},
	{
		name: 'student-home',
		component: StudentHome,
		isAuthProtected: true,
		options: {
			title: 'Student home',
		},
	},
	{
		name: 'outpass',
		component: OutpassApproved,
		isAuthProtected: true,
		options: {
			title: 'Outpass details',
		},
	},
	{
		name: 'verifyOtp',
		component: VerifyOTP,
		isAuthProtected: true,
		options: {
			title: 'Verify OTP',
		},
	},
	{
		name: 'user-profile',
		component: UserProfile,
		isAuthProtected: true,
		options: {
			title: 'Profile',
		},
	},
	{
		name: 'personal-details',
		component: PersonalDetails,
		isAuthProtected: false,
		options: {
			title: 'Personal details',
		},
	},
	{
		name: 'academic-details',
		component: AcademicDetails,
		isAuthProtected: false,
		options: {
			title: 'Academic details',
		},
	},
	{
		name: 'hostel-details',
		component: HostelDetails,
		isAuthProtected: false,
		options: {
			title: 'Hostel details',
		},
	},
	{
		name: 'outpass-details',
		component: OutpassDetails,
		isAuthProtected: true,
		options: {
			title: 'Outpass details',
		},
	},
	{
		name: 'contact-details',
		component: ContactDetails,
		isAuthProtected: true,
		options: {
			title: 'Contact details',
		},
	},
	{
		name: 'outpass-waiting',
		component: OutpassPending,
		isAuthProtected: true,
		options: {
			title: 'Outpass',
		},
	},
	{
		name: 'outpass-cancelled',
		component: OutpassCancelled,
		isAuthProtected: true,
		options: {
			title: 'Outpass',
		},
	},
	{
		name: 'feedback-form',
		component: FeedbackForm,
		isAuthProtected: true,
		options: {
			title: 'Feedback form',
		},
	},
	{
		name: 'feedback-sent',
		component: FeedbackSent,
		isAuthProtected: true,
		options: {
			title: 'Feedback sent',
		},
	},

	// Warden pages
	{
		name: 'warden-outpass-list',
		component: WardenOutpassList,
		isAuthProtected: true,
		options: {
			title: 'Outpass List',
		},
	},
	{
		name: 'warden-account',
		component: WardenAccount,
		isAuthProtected: true,
		options: {
			title: 'Warden account',
		},
	},
	{
		name: 'warden-home',
		component: WardenHome,
		isAuthProtected: true,
		options: {
			title: 'Warden home',
		},
	},
	{
		name: 'warden-outpass-details',
		component: WardenOutpassDetails,
		isAuthProtected: true,
		options: {
			title: 'Outpass details',
		},
	},

	// Admin pages

	// Guard pages
	{
		name: 'scan-qr-code',
		component: ScanQRCode,
		isAuthProtected: true,
		options: {
			title: 'Scan QR code',
		},
	},
]
