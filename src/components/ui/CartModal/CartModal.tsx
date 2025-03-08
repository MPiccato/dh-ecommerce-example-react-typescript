import styles from './CartModal.module.css';
import close from '../../../assets/close.svg';

export const CartModal = ({handleCartModal}) => {
  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleCartModal}>
            <img src={close} alt="Cerrar Cart Modal" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>
                        Producto
                    </th>
                    <th>Borrar</th>
                    <th>Cantidad</th>
                    <th>Agregar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td><button className={styles.modalButtonRemove}>-1</button></td>
                    <td>12</td>
                    <td><button className={styles.modalButtonAgregar}>+1</button></td>
                </tr>
            </tbody>
        </table>
        <div>
            <h3>Total: 400,00</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button >CheckOut</button>
        </div>
    </div>
  )
}
