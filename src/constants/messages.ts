export enum OutpassScanMessages {
	QrExpired = 'QR code Expired',
	AlreadyExited = 'Student already exited',
	BeforeOutTime = 'Student can not exit before out time',
	OutpassExpired = 'Outpass Expired, get new outpass approved',
	AlreadyReturned = 'Student returned back',
	UnknownError = 'Unknown Error, please try again',
	InvalidQRCode = 'This is an invalid QR code. Please scan a valid Outpass QR code.',
}
