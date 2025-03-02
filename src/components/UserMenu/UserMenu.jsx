import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p> hello, {user.name}</p>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </div>
  );
};

export default UserMenu;
