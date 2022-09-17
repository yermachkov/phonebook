import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';

import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;

    this.state.contacts.forEach(el => {
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      console.log('contacts updated');
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const contactsToShow = this.getFilteredContacts();

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
        <ContactForm onSubmit={this.addContact} />
        {this.state.contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter
              value={this.state.filter}
              onChange={this.handleFilterInput}
            />
            <ContactList
              contacts={contactsToShow}
              onDeleteContact={this.deleteContact}
            />
          </>
        ) : (
          <h2>No contacts yet. Fill the fields to add some.</h2>
        )}
      </Box>
    );
  }
}
