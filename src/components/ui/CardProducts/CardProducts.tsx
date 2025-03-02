import styles from './CardProducts.module.css';

export const CardProducts = ({productos}) => {
  return (
    <div className={styles.cardContainer}>
        <img  className={styles.cardImage} src={productos.image} alt={productos.name} />
        <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{productos.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{productos.type}</p>
                <p className={styles.cardPrice}>{productos.price}, <small><sup>00</sup></small></p>

            </div>
            <button className={styles.cardButton}>Agregar Producto</button>
        </div>
    </div>
  )
}
