import { Button } from '@/components/ui/button';
import {
	Dialog,
	// DialogClose,
	DialogContent,
	DialogDescription,
	// DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import PropTypes from 'prop-types';
import './styles.css';
// import classNames from 'classnames';

function ScenarioDialog({ btnLabel, title, content }) {
	return (
		<Dialog className='scenarioDialogCont'>
			<DialogTrigger asChild>
				<Button variant='outline'>
					<div>{btnLabel}</div>
				</Button>
			</DialogTrigger>
			<DialogContent className='scenarioDialog'>
				<DialogTitle>{title}</DialogTitle>
				<DialogHeader>
					<DialogDescription dangerouslySetInnerHTML={{ __html: content }} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
ScenarioDialog.propTypes = {
	btnLabel: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};
export default ScenarioDialog;
