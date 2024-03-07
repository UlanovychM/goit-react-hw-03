import { useState, useEffect } from 'react';
import initialContacts from '../../data/contacts.json';

import PhoneForm from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

function App() {
	const [contacts, setContact] = useState(() => {
		const savedContact = JSON.parse(localStorage.getItem('saved-contact'));

		return savedContact || initialContacts;
	});
	const [search, setSearch] = useState('');

	const addContact = newContact => {
		setContact(prevContact => {
			return [...prevContact, newContact];
		});
	};

	const deleteContact = contactId => {
		setContact(prevContact => {
			return prevContact.filter(contact => contact.id !== contactId);
		});
	};

	const visibleContact = contacts.filter(contact =>
		contact.name.toLowerCase().includes(search.toLowerCase())
	);

	useEffect(() => {
		window.localStorage.setItem('saved-contact', JSON.stringify(contacts));
	}, [contacts]);

	return (
		<>
			<div className={css.container}>
				<h1>Phonebook</h1>
				<PhoneForm onAdd={addContact} contact={contacts} />
				<SearchBox value={search} onSearch={setSearch} />
				<ContactList contacts={visibleContact} onDelete={deleteContact} />
			</div>
		</>
	);
}

export default App;
