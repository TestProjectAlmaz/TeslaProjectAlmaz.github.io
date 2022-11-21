import React from "react";
import axios from "axios";
import style from "./favorites.module.css"
import FavoritesCard from "./favoritesCard/FavoritesCard.jsx";
import { AppContext } from "../../App";

const Favorites = (props) =>{

  const context = React.useContext(AppContext)

    const onAddToCart = async (obj) =>{
      const { data } = await axios.post('https://636ea3bdbb9cf402c806d63e.mockapi.io/cart', obj)
        context.setCartItems([...context.cartItems, data])
      }
    
    const onRemoveFavorites = async (obj) =>{
     axios.delete(`https://636ea3bdbb9cf402c806d63e.mockapi.io/favorites/${obj.id}`)
     
      context.setFavoritesItems((prev) => prev.filter(item => Number(item.myId) !== Number(obj.myId)))
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
             myId = {obj.myId} 
             key = {obj.key}
             title = {obj.title}
             id = {obj.id} 
             description = {obj.description}
              price = {obj.price} 
              img = {obj.img}           
              
          onFavorite = {
            (obj) => {
                onRemoveFavorites(obj)
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