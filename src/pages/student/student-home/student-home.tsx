import { H3, YStack, Fieldset, XStack } from 'tamagui'
import WardenPage from '@app/assets/images/warden-page.svg'
import { Button2 } from '@app/components/ui/button2'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import ProfileIcon from '@app/assets/images/profile-icon.svg'
import { Button } from '@app/components/ui/button'
import { ListItem } from './@components/list-item'
import { Status } from '@app/constants/enums'
import { studentOutpassListItem } from '@app/@types'
import { View, StyleSheet } from 'react-native'

const outpassList: studentOutpassListItem[] = [
	{
		date: '2021-09-01',
		outTime: '12:30 PM',
		outpassId: '123',
		status: Status.PENDING,
	},
	{
		date: '2021-09-01',
		outTime: '8:20 AM',
		outpassId: '123',
		status: Status.APPROVED,
	},
	{
		date: '2021-09-01',
		outTime: '2:00 PM',
		outpassId: '123',
		status: Status.REJECTED,
	},
]

export const StudentHome = ({ navigation }) => {
	return (
		<PageWrapper>
			<View style={styles.pageContainer}>
				<View>
					<View style={styles.headerContainer}>
						<H3>Welcome, {'\n'} Student name</H3>
						<ProfileIcon />
					</View>
					<View>
						{outpassList.length > 0 ? (
							outpassList.map((item) => {
								return <ListItem {...item} />
							})
						) : (
							<WardenPage />
						)}
					</View>
				</View>
				<YStack space='$4'>
					<Button variant='primary'>Get new outpass</Button>
					<Button2 variant='primary'>Send feedback</Button2>
				</YStack>
			</View>
		</PageWrapper>
	)
}

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
})
