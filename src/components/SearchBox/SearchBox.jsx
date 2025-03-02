import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const filters = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="name"
        id={searchId}
        value={filters}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        className={css.inputSearch}
      />
    </div>
  );
}
