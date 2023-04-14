import {
	KeyboardAwareScrollView,
	KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native'
import { GLOBAL_STYLES } from '@app/constants/styles'
import { useHeaderHeight } from '@react-navigation/elements'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
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

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: GLOBAL_STYLES.COLOR.ACCENT,
	},
})
