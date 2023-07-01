import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext'; // Asegúrate de la ruta correcta del archivo ThemeContext
import styles from './Header.module.css';

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? styles.dark_mode : styles.white_mode}>
        <div className={styles.content_theme}>
          <p className={styles.p_theme}>Tema</p>
          <img
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className={styles.img_button}
            height="30px"
            width="30px"
            src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png"
            alt=""
          />
        </div>

        <ul className={styles.content_navbar}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/contacto">
            Contacto
          </Link>
          <Link className={styles.link} to="/favoritos">
            Favoritos
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
