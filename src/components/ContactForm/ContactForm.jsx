import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const initialValues = { name: "", number: "" };
  const dispatch = useDispatch();

  const ContactShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format 000-00-00"
      )
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactShema}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.field}
          ></Field>
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.input}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.field}
          ></Field>
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
