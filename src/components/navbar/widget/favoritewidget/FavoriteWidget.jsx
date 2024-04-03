import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import style from "./FavoriteWidget.module.css";

export default function FavoriteWidget({}) {
  return (
    <a className={style.widget}>
      <FontAwesomeIcon className={style.icon} icon={faHeart} />
    
    </a>
  );
}
