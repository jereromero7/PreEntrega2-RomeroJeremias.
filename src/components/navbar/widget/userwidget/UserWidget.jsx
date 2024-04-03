import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import style from "./UserWidget.module.css";

export default function UserWidget({}) {
  return (
    <a className={style.widget}>
      <FontAwesomeIcon className={style.icon} icon={faUser} />      
    </a>
  );
}
