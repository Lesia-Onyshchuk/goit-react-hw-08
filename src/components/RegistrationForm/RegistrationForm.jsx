import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label>Name:</label>
          <Field className={css.field} name="name" />
          <label>Email:</label>
          <Field className={css.field} name="email" />
          <label>Password:</label>
          <Field className={css.field} name="password" type="password" />
          <button className={css.registerButton} type="submit">
            Register
          </button>
          <p>
            You already have account!
            <NavLink className={css.link} to="/login">
              Log in
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
