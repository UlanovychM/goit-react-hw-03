import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import css from './Form.module.css';

const FeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	number: Yup.string()
		.min(3, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});

const initialValues = {
	id: nanoid(),
	name: '',
	number: '',
};

const PhoneForm = ({ onAdd }) => {
	const nameFieldId = useId();
	const numberFieldId = useId();

	const handleSubmit = (values, actions) => {
		onAdd(values);

		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form className={css.form}>
				<div className={css.wrap}>
					<label htmlFor={nameFieldId}>Username</label>
					<Field
						className={css.field}
						type='text'
						name='name'
						id={nameFieldId}
					/>
					<ErrorMessage name='username' as='span' />
				</div>
				<div className={css.wrap}>
					<label className={css.label} htmlFor={numberFieldId}>
						Number
					</label>
					<Field
						className={css.field}
						type='text'
						name='number'
						id={numberFieldId}
					/>
					<ErrorMessage name='number' as='span' />
				</div>
				<button className={css.btn} type='submit'>
					Submit
				</button>
			</Form>
		</Formik>
	);
};

export default PhoneForm;
