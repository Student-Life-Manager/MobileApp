import { TOKEN } from '@app/constants/styles'
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
			progressValueColor={TOKEN.COLOR.PRIMARY}
			maxValue={timerLimit}
			circleBackgroundColor={TOKEN.COLOR.SECONDARY}
			activeStrokeColor={TOKEN.COLOR.PRIMARY}
			inActiveStrokeColor={TOKEN.COLOR.SECONDARY}
			activeStrokeWidth={4}
			onAnimationComplete={onAnimationComplete}
		/>
	)
}
