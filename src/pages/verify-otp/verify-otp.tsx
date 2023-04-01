import { H3, YStack } from 'tamagui'
import { Button } from '../../components/ui/button'
import { PageWrapper } from '../../components/ui/page-wrapper'
import { InputOTP } from '@app/components/ui/input-otp'
import { Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { GLOBAL_STYLES } from '@app/constants/styles'
import { useTimer } from 'react-timer-hook'

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		alignItems: 'center',
	},
	resendAllowed: {
		color: GLOBAL_STYLES.COLOR.PRIMARY,
		borderBottomColor: GLOBAL_STYLES.COLOR.PRIMARY,
		textDecorationLine: 'underline',
	},
	resendNotAllowed: {
		textDecorationLine: 'underline',
	},
	wrongCode: {
		color: GLOBAL_STYLES.COLOR.RED,
	},
	newCodeSent: {
		color: GLOBAL_STYLES.COLOR.PRIMARY,
	},
	infoText: {
		color: GLOBAL_STYLES.COLOR.DARK_TEXT,
		lineHeight: 24,
		marginTop: 0,
		marginBottom: 20,
	},
})

export const VerifyOTP = ({ navigation }) => {
	const TIMER_LIMIT = 10
	const [allowResend, setAllowResend] = useState<'timer' | 'waiting'>('timer')
	const [isOtpSent, setIsOtpSent] = useState<'sent' | 'wrongCode' | null>(null)

	const currentTime = new Date()
	currentTime.setSeconds(currentTime.getSeconds() + TIMER_LIMIT)
	const { start, seconds, restart, isRunning } = useTimer({
		expiryTimestamp: currentTime,
		onExpire: () => {
			setAllowResend('waiting')
		},
	})

	const handleResend = () => {
		if (allowResend === 'waiting') {
			setAllowResend('timer')
			setIsOtpSent('sent')

			setTimeout(() => {
				setIsOtpSent(null)
			}, 3000)
		}
	}

	const handleVerify = () => {
		console.log('verify')
		setIsOtpSent('wrongCode')
	}

	useEffect(() => {
		// Restarts the timer if the new state is 'timer'
		if (allowResend !== 'waiting' && !isRunning) {
			restart(currentTime)
		}
	}, [allowResend])

	useEffect(() => {
		start()
	}, [])

	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Verify OTP</H3>
				<Text style={styles.infoText}>
					Please enter the verification code sent to {'\n'}pulkit_jasti@srmap.edu.in
				</Text>
				<InputOTP pinCount={6} />
				<YStack
					marginVertical={20}
					alignItems='center'
					space='$2'
				>
					{isOtpSent === 'wrongCode' ? (
						<Text style={styles.wrongCode}>Incorrect verification code, please try again!</Text>
					) : isOtpSent === 'sent' ? (
						<Text style={styles.newCodeSent}>New verification code sent!</Text>
					) : (
						<Text>Didn’t receive the verification code?</Text>
					)}
					<Text onPress={handleResend}>
						<Text
							style={allowResend === 'waiting' ? styles.resendAllowed : styles.resendNotAllowed}
						>
							Resend code
						</Text>{' '}
						{allowResend === 'timer' ? `in ${seconds} seconds` : null}
					</Text>
				</YStack>
				<Button
					variant='primary'
					onPress={() => {
						handleVerify()
					}}
				>
					Verify
				</Button>
			</YStack>
		</PageWrapper>
	)
}
