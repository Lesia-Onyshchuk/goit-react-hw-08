import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { SelectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import Layout from "./Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const LogIn = lazy(() => import("./pages/LogIn/LogIn"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(SelectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Suspense fallback={<p>Loading information...</p>}>
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
      </Suspense>
    </div>
  );
}

export default App;
