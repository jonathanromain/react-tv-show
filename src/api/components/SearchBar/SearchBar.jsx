import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function Searchbar({ onSubmit }) {
  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim() != "");
    {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        placeholder="Recherche un film"
        onKeyUp={submit}
        className={s.input}
      />
    </>
  );
}
