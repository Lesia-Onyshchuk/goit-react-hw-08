import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contactBox}>
      <ul className={css.contactList}>
        <li>{data.name}</li>
        <li>{data.number}</li>
      </ul>
      <button
        onClick={() => {
          dispatch(deleteContact(data.id));
        }}
        className={css.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}
