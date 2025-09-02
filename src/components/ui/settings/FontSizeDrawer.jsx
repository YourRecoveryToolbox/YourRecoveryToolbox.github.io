'use client';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
	DrawerTitle,
} from '@/components/ui/drawer';
import './styles.css';
import ButtonFontSize from '../buttons/ButtonFontSize.jsx';

import ButtonFontSettings from '../buttons/settings/ButtonFontSettings.jsx'; // import FontSettings from '../buttons/settings/ButtonSettings.jsx';
import useThemeStore from '@/src/themeStore';
export function FontSizeDrawer() {
	const sub = useThemeStore.subscribe(console.log);
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div className='fontSize settings'>
					<ButtonFontSettings />
				</div>
			</DrawerTrigger>
			<div className='settingsDrawerMain'>
				<DrawerContent className='DrawerContent'>
					<DrawerTitle className='hide'>TItle</DrawerTitle>
					<div className='settingsDrawerCont'>
						<div className='settingsDrawer'>
							<ButtonFontSize size='decrease' label='Smaller' />
							<ButtonFontSize size='increase' label='Bigger' />
						</div>

						<DrawerFooter className='drawerFooter'>
							<DrawerClose asChild>
								<Button variant='outline'>Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</div>
		</Drawer>
	);
}
export default FontSizeDrawer;
