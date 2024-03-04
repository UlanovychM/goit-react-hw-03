import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Contact.module.css';

const Contact = () => {
	return (
		<>
			<ul className={clsx(css.feedback)}></ul>
		</>
	);
};

export default Contact;

Feedback.propTypes = {
	count: PropTypes.object,
	totalFeedback: PropTypes.number,
};
