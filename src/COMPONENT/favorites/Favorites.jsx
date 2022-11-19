import React from "react";
import axios from "axios";
import style from "./favorites.module.css"
import FavoritesCard from "./favoritesCard/FavoritesCard.jsx";
import { AppContext } from "../../App";

const Favorites = (props) =>{

  const context = React.useContext(AppContext)

    const onAddToCart = (objCart) =>{
        axios.post('https://636ea3bdbb9cf402c806d63e.mockapi.io/cart', objCart)
        context.setCartItems([...context.cartItems, objCart])
      }
    
    const onRemoveFavorites = (id) =>{
        axios.delete(`https://636ea3bdbb9cf402c806d63e.mockapi.io/favorites/${id}`)
      console.log(id)
      context.setFavoritesItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
      }

    return (
        <div className={style.product_section}>          
                <div className= {style.search}>
            <h2>Избранные модели</h2>      
              </div>                  

   <div className={style.products}>

{            
    context.favoritesItems.map( obj => {
      
    return (
        <FavoritesCard
             key = {obj.id}
             title = {obj.title}
             id = {obj.id} 
             description = {obj.description}
              price = {obj.price} 
              img = {obj.img}           
              
          onFavorite = {
            (id) => {
                onRemoveFavorites(id)
            }
          }

          onPlus = {
            (cartObj) => {
            onAddToCart(cartObj)
            }
          } 
         />
             )
              })
   
               }

         </div>   
     </div>

      )
     }

     export default Favorites;