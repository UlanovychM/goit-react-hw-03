import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ContactList.module.css';

const ContactList = ({}) => {
	return (
		<>
			<li>
				<p>Good: {good}</p>
			</li>
		</>
	);
};

export default ContactList;

Feedback.propTypes = {
	count: PropTypes.object,
	totalFeedback: PropTypes.number,
};
