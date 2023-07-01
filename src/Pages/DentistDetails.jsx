import React, { useState, useEffect,useContext } from 'react';
import styles from './DentistDetails.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';


function DentistDetails() {
  const [dentista, setDentista] = useState(null);
  const params = useParams();
 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      const data = await response.json();
      setDentista({
        id: data.id,
        nombre: data.name,
        usuario: data.username,
        mail: data.email,
        telefono: data.phone,
        web:data.website
      });
    }
    fetchData();
  }, []);

  console.log(dentista);
  

  return (
    <>
       <h3 className={styles.h3}>Mostrando datos del odontologo </h3>
    <div className={styles.content_dentist}>
      {dentista ? (
        <>
          <p className={styles.text}>Nombre: {dentista.nombre}</p>
          <p className={styles.text}>Usuario: {dentista.usuario}</p>
          <p className={styles.text}>Correo electrónico: {dentista.mail}</p>
          <p className={styles.text}>Teléfono: {dentista.telefono}</p>
          <p className={styles.text}>Pagina web: {dentista.web}</p>
        </>
      ) : (
        <p className={styles.text_loading}>Cargando datos...</p>
      )}
    </div>
    </>
  );
}

export default DentistDetails;
