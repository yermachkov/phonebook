import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { List, Button } from './ContactList.styled';

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
          <p>
            {name}: {number}
          </p>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
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
