import { H3 } from 'tamagui'
import WardenPage from '@app/assets/images/warden-page.svg'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import ProfileIcon from '@app/assets/images/profile-icon.svg'
import { Button } from '@app/components/ui/button'
import { ListItem } from './@components/list-item'
import { OutpassStatus } from '@app/constants/enums'
import { studentOutpassListItem } from '@app/@types'
import { View } from 'react-native'
import { styles } from './styles'

const outpassList: studentOutpassListItem[] = [
	{
		date: '2021-09-01',
		outTime: '12:30 PM',
		outpassId: '123',
		status: OutpassStatus.Pending,
	},
	{
		date: '2021-09-01',
		outTime: '8:20 AM',
		outpassId: '123',
		status: OutpassStatus.Approved,
	},
	{
		date: '2021-09-01',
		outTime: '2:00 PM',
		outpassId: '123',
		status: OutpassStatus.Rejected,
	},
]

export const StudentHome = ({ navigation }) => {
	return (
		<PageWrapper bounces={false}>
			<View style={styles.pageContainer}>
				<View>
					<View style={styles.headerContainer}>
						<H3>Welcome, {'\n'} Student name</H3>
						<ProfileIcon />
					</View>
					<View style={styles.listContainer}>
						{outpassList.length > 0 ? (
							outpassList.map((item) => {
								return <ListItem {...item} />
							})
						) : (
							<WardenPage />
						)}
					</View>
				</View>
				<View>
					<Button
						style={styles.primaryButton}
						variant='primary'
					>
						Get new outpass
					</Button>
					<Button variant='secondary'>Send feedback</Button>
				</View>
			</View>
		</PageWrapper>
	)
}
