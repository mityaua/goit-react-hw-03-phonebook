import { PureComponent } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import AddContactButton from './components/AddContactButton';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './icons/delete.svg';

// import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.scss';

class App extends PureComponent {
  state = {
    contacts: [
      { id: 'id-1', name: 'Doctor Who', number: '459-12-56' },
      { id: 'id-2', name: 'Rose Tyler', number: '443-89-12' },
      { id: 'id-3', name: 'Martha Jones', number: '645-17-79' },
      { id: 'id-4', name: 'Donna Noble', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  // Вызывается один раз при маунте!
  componentDidMount() {
    // Cчитывает при маунте локальное и записывает в стейт
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  // Вызывается после каждого обновления!
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    // Сравнивает стейты, и если не равны, тогда пишет в локальное
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    // Сравнивает стейты и закрывает модалку при различиях (нужны тесты!)
    // if (
    //   nextContacts.length > prevContacts.length &&
    //   prevContacts.length !== 0
    // ) {
    //   this.toggleModal();
    // }
  }

  // Добавляет контакт (желательно сократить или вынести)
  addContact = data => {
    // Создает новый контакт с ID из даты
    const newContact = {
      id: Date.now().toString(),
      name: data.name,
      number: data.number,
    };

    // Проверка на дубликат
    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name,
    );

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    this.toggleModal(); // Закрывает модалку после добавления контакта
  };

  // Следит за полем фильтрации и пишет в стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фильтрует и возвращает результат фильтра
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // Удаляет контакт
  deleteContact = id => {
    const answer = window.confirm('Want to delete?');

    if (answer) {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
    }
  };

  // Переключает статус модалки
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { filter, showModal } = this.state;
    const filteredResults = this.filterContacts();

    return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>

        <AddContactButton onClick={this.toggleModal} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className={styles.close}>
              <IconButton onClick={this.toggleModal} aria-label="Close modal">
                <CloseIcon width="15px" height="15px" fill="#a7a1a1" />
              </IconButton>
            </div>

            <ContactForm onSubmit={this.addContact} />
          </Modal>
        )}

        <h2 className={styles.title}>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={filteredResults}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
