import styles from './Home.module.css'

import CardDentista from '../Components/CardDentista'
function Home(){


    return(
        <div className={styles.container}>

            <h1 className={styles.h1}>Nuestros Doctores</h1>
            <div className={styles.content_card}>
            <CardDentista  />
           
            </div>
        </div>
    )
}

export default Home