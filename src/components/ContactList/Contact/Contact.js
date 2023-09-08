import css from '../ContactList.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.listItem}>
      <div className={css.contactInfo}>
        <span className={css.contactName}>{contact.name}: </span>
        <span className={css.contactNumber}>{contact.number}</span>
      </div>
      <button
        className={css.deletButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        X
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
