import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button } from '../ContactsList/ContactList.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </>
  );
};
