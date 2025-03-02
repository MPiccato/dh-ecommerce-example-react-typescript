import { useEffect, useState } from "react";
import { Hero } from "../../components/ui/Hero";
import styles from './Home.module.css';
import { CardProducts } from "../../components/ui/CardProducts";

const Home = () => {


  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    try{
        const response = await fetch(`http://localhost:3000/products`)
        const data = await response.json()
        setProductos(data)
    }
    
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getProducts()
  },[])




  return (
    <>
      <Hero/>
      <div className={styles.container}>
      {productos.map((producto) => (
        
          <CardProducts key ={producto.id} productos={producto}/>
      ))}

    </div>
    </>
  )
}

export default Home