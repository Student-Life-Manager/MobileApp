import { sanitizeUser } from '@app/api/sanitizers/user'

export enum UserType {
	Student = 'student',
	Guardian = 'guardian',
	Admin = 'admin',
	Warden = 'warden',
}

export type UserRaw = {
	created_at: string
	updated_at: string
	uuid: string
	first_name: string
	last_name: string
	roll_number: string
	email: string
	account_type: UserType
	phone_number: string
	hostel_details: {
		hostel_type: string
		bldg_name: string
		room_no: string
	}
	academic_details: {
		year_of_study: string
		course: string
		branch: string
		section: string
	}
	checklist: {
		personal_details: boolean
		hostel_details: boolean
		academic_details: boolean
	}
}

export type User = ReturnType<typeof sanitizeUser>
