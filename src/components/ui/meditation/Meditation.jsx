import React from 'react';
import classNames from 'classnames';
import Favourite from '../favourite/Favourite.jsx';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Accordion } from 'radix-ui';
// import getStoredTheme from '@/src/components/theme/getStoredTheme';
import Section from '../section/Section';
import './styles.css';
import PropTypes from 'prop-types';
import data_meditation from './../../../data/data-meditation';

const Meditation = ({ label }) => {
	// const theme = getStoredTheme();
	return (
		<Section title={label} classes=''>
			<Accordion.Root type='single' collapsible className='' defaultValue=''>
				{data_meditation.map((item) => (
					<Accordion.Item
						value={'item-' + item.id}
						key={item.id}
						className='meditation video'
					>
						<Accordion.Trigger value={'item-' + item.id}>
							{item.title} - {item.duration}
						</Accordion.Trigger>
						<Accordion.Content className='content'>
							<iframe
								width='560'
								height='315'
								src={`https://www.youtube.com/embed/${item.youtubeID}`}
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowfullscreen
							></iframe>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</Section>
	);
};
Meditation.propTypes = {
	label: PropTypes.string,
};
Meditation.displayName = 'Meditation';

const AccordionTrigger = React.forwardRef(
	({ children, value, className, ...props }, forwardedRef) => (
		<Accordion.Header className='AccordionHeader'>
			<Accordion.Trigger
				className={classNames('AccordionTrigger ', className)}
				{...props}
				ref={forwardedRef}
			>
				<Favourite id={value} className={children.replaceAll('.', '')} />
				<div
					className={children.replaceAll('.', '') + ' AccordionTriggerTitle '}
				>
					{children}
				</div>
				<ChevronDownIcon className='AccordionChevron' aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	)
);

AccordionTrigger.propTypes = {
	className: PropTypes.string,
	value: PropTypes.string,
	children: PropTypes.node.isRequired,
};
AccordionTrigger.displayName = 'AccordionTrigger';
export default Meditation;
