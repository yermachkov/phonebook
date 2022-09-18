import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';

import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    let isAdded = false;

    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const contactsToShow = getFilteredContacts();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={10}
      width={[1 / 2]}
      ml={'auto'}
      mr={'auto'}
      p={20}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      {contacts.length ? (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={handleFilter} />
          <ContactList
            contacts={contactsToShow}
            onDeleteContact={deleteContact}
          />
        </>
      ) : (
        <h2>No contacts yet. Fill the fields to add some.</h2>
      )}
    </Box>
  );
};
