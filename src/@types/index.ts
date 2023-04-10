import { Status } from '@app/constants/enums'

export type outpassType = {
	outpassId: string
	outTime: string
	currentTimestamp: string
}

export type generatedOutpassType = {
	timeStamp: string
	hashValue: string
}

export type studentOutpassListItem = {
	outpassId: string
	outTime: string
	date: string
	status: Status
}
