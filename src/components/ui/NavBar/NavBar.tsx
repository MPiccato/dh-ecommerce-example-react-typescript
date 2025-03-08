import { useState } from 'react';
import carrito from '../../../assets/carrito.png';
import logo_chico from '../../../assets/logo_chico.jpeg';
import styles from './NavBar.module.css';
import { CartModal } from '../CartModal';

export const NavBar = () => {

  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = () => {
    setShowCartModal(!showCartModal);
  }
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
            <img src={logo_chico} alt="logo" width={50} height={50}  />
            <div>
                Dh-Ecommerce
            </div>
        </div>
        <div className={styles.navbarCartContainer}>
            <p className={styles.navbarTextAmount}>2</p>
            <img src={carrito} alt="Carrito de Compras" onClick={handleCartModal} />
        </div>
        {showCartModal && (<CartModal handleCartModal={handleCartModal}/>)}
    </div>
  )
}
