import { GLOBAL_STYLES } from '@app/constants/styles'
import CircularProgress, { ProgressRef } from 'react-native-circular-progress-indicator'
import { useRef } from 'react'

const timerLimit = 20

interface timerProps {
	onRefresh: () => void
}

export const Timer = ({ onRefresh }: timerProps) => {
	const progressRef = useRef<ProgressRef>(null)

	const onAnimationComplete = () => {
		progressRef.current?.reAnimate()
		onRefresh()
	}

	return (
		<CircularProgress
			ref={progressRef}
			value={timerLimit}
			radius={30}
			duration={timerLimit * 1000}
			progressValueColor={GLOBAL_STYLES.COLOR.PRIMARY}
			maxValue={timerLimit}
			circleBackgroundColor={GLOBAL_STYLES.COLOR.SECONDARY}
			activeStrokeColor={GLOBAL_STYLES.COLOR.PRIMARY}
			inActiveStrokeColor={GLOBAL_STYLES.COLOR.SECONDARY}
			activeStrokeWidth={4}
			onAnimationComplete={onAnimationComplete}
		/>
	)
}
