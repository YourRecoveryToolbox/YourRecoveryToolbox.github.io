import './globals.css';
import './App.css';

import AccordionAcro from './components/ui/AcronymAccordion/AccordionAcro.jsx';
import SettingsDrawer from './components/ui/settings/SettingsDrawer.jsx';
import FontSizeDrawer from './components/ui/settings/FontSIzeDrawer.jsx';
import FooterMetadata from './components/ui/footer/FooterMetadata.jsx';
import applyTheme from '@/src/components/theme/applyTheme';
import iconAndroid from '@/src/components/icons/iconAndroid.jsx';
import iconApple from '@/src/components/icons/iconApple.jsx';
import QRCode from '@/src/components/ui/QRCode/QRCode.jsx';
import ButtonShare from '@/src/components/ui/buttons/share/ButtonShare.jsx';
import useThemeStore from '@/src/themeStore';
import Logo from '@/src/components/ui/logo/Logo.jsx';
function App() {
	const theme = localStorage.getItem(useThemeStore.getState().storageKeyTheme);
	if (theme !== null) {
		applyTheme({ theme: theme });
		useThemeStore.setState({
			theme: theme,
		});
	}
	useThemeStore.subscribe(() => {
		const themeFromStore = useThemeStore.getState().theme;
		applyTheme({ theme: themeFromStore });
		localStorage.setItem(
			useThemeStore.getState().storageKeyTheme,
			themeFromStore
		);
	});

	return (
		<div className='app'>
			<div className='main'>
				<div className='inner'>
					<div className='settingsContainer'>
						<SettingsDrawer />
						<FontSizeDrawer />
						<ButtonShare />
					</div>
					<div className='header'>
						<Logo />
						<h1>
							What the
							<br />
							S.M.A.R.T?
						</h1>
						<div className='subtitle'>
							<p>
								The tools we learn at SMART meetings are ace but remembering
								them can be hard.
							</p>
							<p>
								This app is your SMART toolbox so you can carry them around for
								whenever you need them.
							</p>
						</div>
						<div className='subtitle start'>
							Tap a heading to read out about the tool.
						</div>
					</div>
					<h2>SMART Tools:</h2>
					<AccordionAcro />

					<div className='footer'>
						<div className='install'>
							Add to your home screen video instructions
						</div>
						<div className='links'>
							<a
								href='https://www.youtube.com/watch?v=O1xEXKB6tNg'
								target='_blank'
								rel='noopener noreferrer'
							>
								<div
									className='android logo'
									dangerouslySetInnerHTML={{ __html: iconAndroid }}
								/>
								<div>Android</div>
							</a>
							<a
								href='https://www.youtube.com/watch?v=B7fKs4dTeu0'
								target='_blank'
								rel='noopener noreferrer'
							>
								<div
									className='apple logo'
									dangerouslySetInnerHTML={{ __html: iconApple }}
								/>
								<div>Apple iOS</div>
							</a>
						</div>
						<QRCode label='Share the app, scan the QR Code' />
						<p>
							This app takes content from the the SMART (Self Management and
							Recovery Training) method and the tools that people who use the
							SMART method learn in person and at meetings.
							<br />
							<br /> All rights are of their respective owners.
							<br />
							<br />
							See links below
						</p>
						<a
							href='https://smartrecovery.org.uk/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<br />
							UK SMART Recovery (UKSR) website
						</a>
						<p>
							This app was inspired by the amazing people who facilitate SMART
							meetings in Nottingham UK and their hard work and deication to
							help people through their recovery at the
							<b>Nottingham Recovery Network</b>.
						</p>
						<p>
							<a
								href='https://www.nottinghamrecoverynetwork.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Nottingham Recovery Network
							</a>
						</p>
						<p>Find a SMART meeting near you - worldwide</p>
						<a
							href='https://www.smartrecoveryinternational.org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							SMART Recovery International
						</a>

						<p>
							<br />
							<b>
								<u>FEEDBACK</u>
							</b>
						</p>
						<p>
							Like all of us gong through recovery, these tools and this app can
							only get better and improve if we know what works, what
							isn&apos;t, what you like and what you don&apos;t like.
						</p>
						<p>
							Is there something missing? Does something not make sense? Could
							it be better?
						</p>
						<p>
							<b>Positive or negative</b> we want to hear your thoughts.{' '}
							<u>Have a rant if you need to</u>, but just let us know what{' '}
							<b>you like</b> and
							<b>what you don&apos;t like</b>. <br /> <br />
							<u>
								ALL feeback is appreciated and
								<br />
								we get stronger together
							</u>
						</p>
						<p>
							Drop us an email at with your feedback.
							<br /> <br />
							<a href='mailto:thisisthesmarttoolbox@gmail.com?subject=The SMART Toolbox Feedback'>
								thisisthesmarttoolbox@gmail.com
							</a>
						</p>
						<p>
							<b>
								<u>Our promise is that </u>
							</b>
							<u> we read every email</u>
							and if you want to give your contact details in your email,
							<br />
							<u>we will get back to you.</u>
							<br />
							<br />
							We can&apos;t guarantee a reply staright away but
							<b>
								<u>we will get back to you. That&apos;t our promise.</u>
							</b>
							<br />
							<br />
							<b>Big up yourself, you are stronger than you think.</b>
						</p>
					</div>
				</div>
				<FooterMetadata />
			</div>
		</div>
	);
}

export default App;
