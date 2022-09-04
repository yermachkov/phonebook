import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { List } from './ContactList.styled';
import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={350}
        >
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </Box>
      </li>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
