import React, { useEffect, useState } from 'react';
import styles from './Favoritos.module.css'
import { Link } from 'react-router-dom';

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      setFavoritos(JSON.parse(storedFavoritos));
    }
  }, []);

  return (
    <div className={styles.content_fav}> 
      <h2 className={styles.h2}>Odontólogos Favoritos</h2>

      <div>
      {favoritos.length === 0 ? (
        <p>No tienes odontólogos favoritos.</p>
      ) : (
         <div className={styles.content_fav_items}>

         
          {favoritos.map((dentista) => (
            <div className={styles.card} key={dentista.id}>
            <img className={styles.card_img} src="https://cdn-icons-png.flaticon.com/512/5162/5162799.png" alt="" />
            <h3>Nombre: {dentista.nombre}</h3>
            <p>User: {dentista.usuario}</p>
            <div className={styles.content_btn_heart}>
              <Link className={styles.btn} to={`/dentista/${dentista.id}`}>
                info
              </Link>
             
            </div>
          </div>
          ))}
       </div>
      )}
      </div>
      
    </div>
  );
}

export default Favoritos;

