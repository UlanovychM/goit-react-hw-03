import { useState, useEffect } from 'react';
import contacts from './contacts.json';

import clsx from 'clsx';
import css from './global.module.css';

function App() {
	const [contact, setContact] = useState(contacts);

	return (
		<>
			<div className={clsx(css.global)}></div>
		</>
	);
}

export default App;
