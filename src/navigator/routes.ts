import { ReactElement } from 'react'

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
import { Outpass } from '@app/pages/student/outpass/outpass-approved'
import { OutpassCancelled } from '@app/pages/student/outpass/outpass-cancelled'
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
	authProtected: boolean
	options: {
		title: string
	}
}

export const routes: route[] = [
	// General & utils
	{
		name: 'page-index',
		component: PageIndex,
		authProtected: false,
		options: {
			title: 'Page index',
		},
	},
	{
		name: 'pageTemplate',
		component: PageTemplate,
		authProtected: false,
		options: {
			title: 'Page template',
		},
	},
	{
		name: 'create-account',
		component: CreateAccountPage,
		authProtected: false,
		options: {
			title: 'Create Account',
		},
	},
	{
		name: 'login',
		component: Login,
		authProtected: true,
		options: {
			title: 'Login',
		},
	},

	// Student pages
	{
		name: 'student-profile',
		component: StudentProfile,
		authProtected: true,
		options: {
			title: 'Student Profile',
		},
	},
	{
		name: 'student-home',
		component: StudentHome,
		authProtected: true,
		options: {
			title: 'Student home',
		},
	},
	{
		name: 'outpass',
		component: Outpass,
		authProtected: true,
		options: {
			title: 'Outpass status',
		},
	},
	{
		name: 'verifyOtp',
		component: VerifyOTP,
		authProtected: true,
		options: {
			title: 'Verify OTP',
		},
	},
	{
		name: 'user-profile',
		component: UserProfile,
		authProtected: true,
		options: {
			title: 'Profile',
		},
	},
	{
		name: 'personal-details',
		component: PersonalDetails,
		authProtected: false,
		options: {
			title: 'Personal details',
		},
	},
	{
		name: 'academic-details',
		component: AcademicDetails,
		authProtected: false,
		options: {
			title: 'Academic details',
		},
	},
	{
		name: 'hostel-details',
		component: HostelDetails,
		authProtected: false,
		options: {
			title: 'Hostel details',
		},
	},
	{
		name: 'outpass-details',
		component: OutpassDetails,
		authProtected: true,
		options: {
			title: 'Outpass details',
		},
	},
	{
		name: 'contact-details',
		component: ContactDetails,
		authProtected: true,
		options: {
			title: 'Contact details',
		},
	},
	{
		name: 'outpass-waiting',
		component: OutpassPending,
		authProtected: true,
		options: {
			title: 'Oupass waiting',
		},
	},
	{
		name: 'outpass-cancelled',
		component: OutpassCancelled,
		authProtected: true,
		options: {
			title: 'Oupass cancelled',
		},
	},
	{
		name: 'feedback-form',
		component: FeedbackForm,
		authProtected: true,
		options: {
			title: 'Feedback form',
		},
	},
	{
		name: 'feedback-sent',
		component: FeedbackSent,
		authProtected: true,
		options: {
			title: 'Feedback sent',
		},
	},

	// Warden pages
	{
		name: 'warden-outpass-list',
		component: WardenOutpassList,
		authProtected: true,
		options: {
			title: 'Warden outpass List',
		},
	},
	{
		name: 'warden-account',
		component: WardenAccount,
		authProtected: true,
		options: {
			title: 'Warden account',
		},
	},
	{
		name: 'warden-home',
		component: WardenHome,
		authProtected: true,
		options: {
			title: 'Warden home',
		},
	},
	{
		name: 'warden-outpass-details',
		component: WardenOutpassDetails,
		authProtected: true,
		options: {
			title: 'Warden outpass details',
		},
	},

	// Admin pages

	// Guard pages
	{
		name: 'scanQrCode',
		component: ScanQRCode,
		authProtected: false,
		options: {
			title: 'Scan QR code',
		},
	},
]
