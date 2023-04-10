import {
	KeyboardAwareScrollView,
	KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet } from 'react-native'
import { View, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: '#F7F9FF',
	},
	pageWrapperWithPadding: {
		paddingHorizontal: 20,
	},
	innerViewWithPadding: {
		paddingTop: 20,
		minHeight: '100%',
	},
	pageWrapper: {
		backgroundColor: '#F7F9FF',
	},
	innerView: {
		minHeight: '100%',
	},
})

interface PageWrapperProps extends KeyboardAwareScrollViewProps {
	noPadding?: boolean
}

export const PageWrapper = (props: PageWrapperProps) => {
	const { children, noPadding } = props

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<KeyboardAwareScrollView
				style={noPadding ? styles.pageWrapper : styles.pageWrapperWithPadding}
				extraScrollHeight={60}
				{...props}
			>
				<View style={noPadding ? styles.innerView : styles.innerViewWithPadding}>{children}</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}
