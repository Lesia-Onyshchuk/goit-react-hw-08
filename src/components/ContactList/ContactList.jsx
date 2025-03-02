import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

export default function ContactList() {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredData.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
