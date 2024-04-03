import CartWidget from "./widget/cartwidget/CartWidget";
import FavoriteWidget from "./widget/favoritewidget/FavoriteWidget";
import UserWidget from "./widget/userwidget/UserWidget";
import Style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <header className={Style.header}>
        <p>California Sport</p>
        <div>
          <UserWidget />
          <FavoriteWidget />
          <CartWidget cantElementosCarrito={20} />
        </div>
      </header>
      <header>
      <nav>
          <ul>
            <li>
              <a href="/">HOMBRE</a>
            </li>
            <li>
              <a href="/">MUJER</a>
            </li>
            <li>
              <a href="/">NIÑOS</a>
            </li>
            <li>
              <a href="/">MARCAS</a>
            </li>
          </ul>
        </nav>
        
      </header>
    </>
  );
}
