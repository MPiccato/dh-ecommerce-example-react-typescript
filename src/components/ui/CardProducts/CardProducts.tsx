import { useContext } from 'react';
import styles from './CardProducts.module.css';
import { CartContext } from '../../../Context/CartContext';

export const CardProducts = ({productos}) => {

  const {dispatch}= useContext(CartContext);

  const item = {
    id: productos.id,
    name: productos.name,
    image: productos.image,
    quantity: 1,
    price: productos.price
  }

  const addToCart = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  return (
    <div className={styles.cardContainer}>
        <img  className={styles.cardImage} src={productos.image} alt={productos.name} />
        <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{productos.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{productos.type}</p>
                <p className={styles.cardPrice}>{productos.price}, <small><sup>00</sup></small></p>

            </div>
            <button className={styles.cardButton} onClick={() => addToCart(item)}>Agregar Producto</button>
        </div>
    </div>
  )
}
