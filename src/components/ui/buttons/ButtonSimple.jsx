import { Button } from '@/components/ui/button';
// import iconIncreaseFontSize from '/src/assets/text_increase_24dp.svg';
// import iconDescreaseFontSize from '/src/assets/text_decrease_24dp.svg';
import './buttonStyles.css';
import PropTypes from 'prop-types';

const ButtonSimple = ({ label, callback }) => {
	return (
		<div className='btn' onClick={callback}>
			<Button variant='outline' className={'btn-' + label.replaceAll(' ', '-')}>
				{label}
			</Button>
		</div>
	);
};
ButtonSimple.propTypes = {
	label: PropTypes.string.isRequired,
	callback: PropTypes.func,
};
ButtonSimple.displayName = 'ButtonSimple';
export default ButtonSimple;
