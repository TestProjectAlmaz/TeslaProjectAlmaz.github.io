import React from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import "./App"
import "./App.css"
import Cart from "./COMPONENT/cart/Cart"
import Header from "./COMPONENT/header/Header.jsx"
import Footer from "./COMPONENT/footer/Footer.jsx"
import { useState } from "react"
import Favorites from "./COMPONENT/favorites/Favorites.jsx"
import Home from "./COMPONENT/Home.jsx"

//Context
export const AppContext = React.createContext({})

function App() {    
  //state для хранения товаров  
  const [products, setProducts] = useState ([])
  //state состояния корзины
  const [cartOpened, setCartOpened] = React.useState(false);
  //state для хранения товаров в корзине
  const [cartItems, setCartItems] = useState([])
   //state для хранения товаров в избранном
   const [favoritesItems, setFavoritesItems] = useState([])
  //state для поиска
  const [search, setSearch] = useState('')
  


  React.useEffect(() => { 
    
    async function axiosData() {  

      const cartData = await axios.get('https://636ea3bdbb9cf402c806d63e.mockapi.io/cart')
      const favoritesData = await axios.get('https://636ea3bdbb9cf402c806d63e.mockapi.io/favorites')
      const productsData = await axios.get('https://636ea3bdbb9cf402c806d63e.mockapi.io/products')

      

      setCartItems(cartData.data)
      setFavoritesItems(favoritesData.data)
      setProducts(productsData.data)
    }
      axiosData()
      
        
  }, [])
  
  const onRemoveCartItem = (id) => {
      axios.delete(`https://636ea3bdbb9cf402c806d63e.mockapi.io/cart/${id}`)     
      setCartItems((prev) => prev.filter(item => Number (item.id) !== Number (id)))
  }

  const itemAdded = (id) => {
    return cartItems.some((objCart) => objCart.id === id)
  } 

  const itemFavorited = (id) => {
      return favoritesItems.some((objFavorite) => objFavorite.id === id)
  }

  return (
    <AppContext.Provider 
    value = {{ 
    products, 
    cartItems, 
    favoritesItems,
    setCartItems,
    setProducts,    
    setFavoritesItems,
    itemAdded,
    itemFavorited
     }}>


    <div className="app">

      { cartOpened ?
       <Cart
       onRemoveCartItem={onRemoveCartItem}
       cartItems= {cartItems} 
       closeCart = { () => 
       setCartOpened (false) } 
       totalPrice = {
        cartItems.reduce((totalElements, objPrice) => totalElements + objPrice.price, 0)
       }        
       /> :  null } 


      <Header openCart = { () => setCartOpened (true) } 
          cartItems = {cartItems} /> 

        <Routes>
          <Route path="/favorites" element = {
             <Favorites />
          }
          />        
      
        <Route path="/" element = {             
                <Home
                  items = {products} 
                  cartItems = {cartItems}
                  setCartItems = {setCartItems}
                  setSearch = {setSearch}
                  search = {search}
                  favoritesItems = {favoritesItems}
                  setFavoritesItems = {setFavoritesItems}
                  
                 />        
                      
              }
                />
                 </Routes>  
                     <Footer />              
               
     </div>

     </AppContext.Provider>
  )             

   }  
  
      
export default App
