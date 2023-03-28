
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteList }) => {
  return (
  <ul className={css.contactItem}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contactList} key={id}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>

        <button className={css.button} onClick={() =>onDeleteList(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  )
}

export default ContactList