import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { refreshUser, setAuthHeader } from "./redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { SelectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import Layout from "./Layout";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(SelectIsRefreshing);

  useEffect(() => {
    // const savedToken = localStorage.getItem("savedToken");
    // if (savedToken) {
    //   setAuthHeader(savedToken);
    //   dispatch(refreshUser());
    // }
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
