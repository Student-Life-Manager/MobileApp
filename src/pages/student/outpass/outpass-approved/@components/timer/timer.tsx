import { useRef } from 'react'
import CircularProgress, { ProgressRef } from 'react-native-circular-progress-indicator'

import { TOKEN } from '@app/constants/styles'

const TIMER_LIMIT = 15

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
			value={TIMER_LIMIT}
			radius={30}
			duration={TIMER_LIMIT * 1000}
			progressValueColor={TOKEN.COLOR.PRIMARY}
			maxValue={TIMER_LIMIT}
			circleBackgroundColor={TOKEN.COLOR.SECONDARY}
			activeStrokeColor={TOKEN.COLOR.PRIMARY}
			inActiveStrokeColor={TOKEN.COLOR.SECONDARY}
			activeStrokeWidth={4}
			onAnimationComplete={onAnimationComplete}
		/>
	)
}
