import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Box } from 'components/Box/Box';
import { Input, Button } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      "Name may contain only letters, apostrophe, dash and spaces. For example, 'Adrian', 'Jacob Mercer', 'Charles de Batz de Castelmore d'Artagnan'"
    )
    .required('Add the name, please'),
  number: yup
    .string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Add the phone number, please'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Box display="flex" alignItems="baseline" gridGap={10}>
          <Input name="name" id="name" />
          <ErrorMessage name="name" />
        </Box>

        <label htmlFor="number">Number</label>
        <Box display="flex" alignItems="baseline" gridGap={10}>
          <Input name="number" />
          <ErrorMessage name="number" id="number" />
        </Box>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
