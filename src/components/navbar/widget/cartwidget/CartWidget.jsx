import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import style from "./CartWidget.module.css";

export default function CartWidget({cantElementosCarrito}) {
  return (
    <a className={style.widget}>
      <FontAwesomeIcon className={style.icon} icon={faShoppingCart} />
      {
        cantElementosCarrito <= 0
          ? ""
          : <span className={style.badge}>{cantElementosCarrito}</span>
      }
    </a>
  );
}
