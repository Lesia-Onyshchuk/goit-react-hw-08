import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("You do not have account yet!"));

    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label>Email:</label>
          <Field className={css.field} name="email" />
          <label>Password:</label>
          <Field className={css.field} name="password" type="password" />
          <button className={css.loginButton} type="submit">
            Login
          </button>
          <p>
            You do not have account yet!
            <NavLink className={css.link} to="/register">
              Create account
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
