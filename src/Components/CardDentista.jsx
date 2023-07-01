import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CardDentista.module.css';

function CardDentista() {
  const [dentistas, setDentistas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const agregarAFavoritos = (dentista) => {
    const estaEnFavoritos = favoritos.some((fav) => fav.id === dentista.id);

    if (estaEnFavoritos) {
      // Si el dentista ya está en favoritos, eliminarlo de la lista
      const nuevosFavoritos = favoritos.filter((fav) => fav.id !== dentista.id);
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    } else {
      // Si el dentista no está en favoritos, agregarlo a la lista
      const nuevosFavoritos = [...favoritos, dentista];
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }
  };

  useEffect(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      setFavoritos(JSON.parse(storedFavoritos));
    }
  }, []);

  async function handleFetch() {
    const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

    setDentistas(
      response.map((dentista) => {
        return { id: dentista.id, nombre: dentista.name, usuario: dentista.username };
      })
    );
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className={styles.content_card}>
      {dentistas.map((dentista) => (
        <div className={styles.card} key={dentista.id}>
          <img className={styles.card_img} src="https://cdn-icons-png.flaticon.com/512/5162/5162799.png" alt="" />
          <h3>Nombre: {dentista.nombre}</h3>
          <p>User: {dentista.usuario}</p>
          <div className={styles.content_btn_heart}>
            <Link className={styles.btn} to={`./dentista/${dentista.id}`}>
             Info
            </Link>
            <svg
              onClick={() => {
                agregarAFavoritos(dentista);
                console.log(favoritos);
              }}
              className={`${styles.hearth} ${favoritos.some((fav) => fav.id === dentista.id) ? styles.active : ''}`}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="15px"
              width="15px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDentista;


