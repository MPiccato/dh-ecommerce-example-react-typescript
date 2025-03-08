import styles from './CartModal.module.css';
import close from '../../../assets/close.svg';

export const CartModal = ({handleCartModal}) => {
  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleCartModal}>
            <img src={close} alt="Cerrar Cart Modal" />
        </button>
        <table className={styles.modal}>
            <thead>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td><button className={styles.modalButtonRemove}>-1</button></td>
                    <td>12</td>
                    <td><button>+1</button></td>
                </tr>
            </tbody>
        </table>
        <div>
            <h3>Total: 400,00</h3>
        </div>
        <div>
            <button className={styles.modalButtonContainer}>CheckOut</button>
        </div>
    </div>
  )
}
