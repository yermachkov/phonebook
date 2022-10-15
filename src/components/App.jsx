import { selectContacts } from 'redux/selectors';
import { Box } from './Box/Box';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(selectContacts);

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
      <ContactForm />
      {contacts.length ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <h2>No contacts yet. Fill the fields to add some.</h2>
      )}
    </Box>
  );
};
