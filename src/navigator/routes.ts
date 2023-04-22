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

export const routes = [
	{
		name: 'page-index',
		component: PageIndex,
		options: {
			title: 'Page index',
		},
	},
	{
		name: 'student-profile',
		component: StudentProfile,
		options: {
			title: 'Student Profile',
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
		name: 'scanQrCode',
		component: ScanQRCode,
		options: {
			title: 'Scan QR code',
		},
	},
	{
		name: 'outpass',
		component: Outpass,
		options: {
			title: 'Outpass status',
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
		component: OutpassPending,
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
		name: 'pageTemplate',
		component: PageTemplate,
		options: {
			title: 'Page template',
		},
	},
]
