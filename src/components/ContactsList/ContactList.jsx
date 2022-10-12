import { Box } from 'components/Box/Box';
import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={350}
          >
            <ContactItem contact={contact} />
          </Box>
        </li>
      ))}
    </List>
  );
};
