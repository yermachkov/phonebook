// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      "Name may contain only letters, apostrophe, dash and spaces. For example, 'Adrian', 'Jacob Mercer', 'Charles de Batz de Castelmore d'Artagnan'"
    )
    .required('Add a name, please'),
  number: yup
    .string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Add phone number, please'),
});

export const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(initialValues);
    console.log(values);
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
        <Field name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <Field name="number" />
        <ErrorMessage name="nuber" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
