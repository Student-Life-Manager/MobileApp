import { useHeaderHeight } from '@react-navigation/elements'
import { Dimensions, SafeAreaView } from 'react-native'
import {
	KeyboardAwareScrollView,
	KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'

interface PageWrapperProps extends KeyboardAwareScrollViewProps {
	noPadding?: boolean
}

export const PageWrapper = (props: PageWrapperProps) => {
	const { children, noPadding } = props
	const headerHeight = useHeaderHeight()
	const insets = useSafeAreaInsets()

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<KeyboardAwareScrollView
				contentContainerStyle={{
					minHeight: Dimensions.get('window').height - headerHeight - insets.bottom,
					paddingHorizontal: noPadding ? 0 : 20,
					paddingTop: noPadding ? 0 : 20,
				}}
				{...props}
			>
				{children}
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}
