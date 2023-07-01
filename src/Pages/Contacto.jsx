import styles from './Contacto.module.css'

import { useState } from "react";
function Contacto(){

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");

     
    return(
        <div className={styles.container}>
            <h2 className={styles.h2}>Ponete en contacto con nosotros</h2>

            <form action="" className={styles.form}>
                <div className={styles.form_content}>
                    <label className={styles.label}  htmlFor="">Nombre completo:</label>
                    <input className={styles.input} type="text" value={nombre} />
                    <label className={styles.label}  htmlFor="">Correo electronico:</label>
                    <input className={styles.input} type="text" value={correo} />
                    <button className={styles.button} >Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto