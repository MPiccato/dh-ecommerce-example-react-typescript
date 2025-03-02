import { useEffect, useState } from "react";
import { Hero } from "../../components/ui/Hero/Hero";


const Home = () => {


  const [productos, setProducts] = useState([])

  const getProducts = async () => {
    try{
        const response = await fetch(`http://localhost:3000/products`)
        const data = await response.json()
        setProducts(data)
    }
    
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getProducts()
  },[])

  console.log(productos)


  return (
    <>
    <Hero/>
    </>
  )
}

export default Home