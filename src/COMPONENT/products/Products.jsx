import React from "react"
import axios from "axios"
import Card from "./card/Card"
import style from "./products.module.css"
import { AppContext } from "../../App"


const Products = (props) =>{

  const context = React.useContext(AppContext)

  const onAddToCart = async (obj) =>{
    try{
      const findCartItem = context.cartItems.find(cartItem => cartItem.myId === obj.myId) 

      if( findCartItem )
      {
        axios.delete(`https://636ea3bdbb9cf402c806d63e.mockapi.io/cart/${findCartItem.id}`)

        context.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== obj.myId))
      }else

      {
        const { data } = await axios.post('https://636ea3bdbb9cf402c806d63e.mockapi.io/cart', obj)

        context.setCartItems([...context.cartItems, data])
      }     
    }

   catch{
    alert("Не удалось добавить автомобиль, в корзину")
   }

  }

const onAddToFavorite = async (objFavorite) =>{
  try {

    const findFavoriteItem = context.favoritesItems.find(favoriteItem => favoriteItem.myId === objFavorite.myId)

    if (findFavoriteItem)
    {
      axios.delete(`https://636ea3bdbb9cf402c806d63e.mockapi.io/favorites/${findFavoriteItem.id}`)
    }else
    {
       const { data } = await axios.post('https://636ea3bdbb9cf402c806d63e.mockapi.io/favorites', objFavorite)

      context.setFavoritesItems([...context.favoritesItems, data])
    }
  } 
   catch {
    alert('Не удалось добавить автомобиль, в избранное')
   }
  }

const onSearchInput = (inputValue) => {
  props.setSearch(inputValue.target.value)
}
 

    return (

        <div className={style.product_section}>  
           <div className= {style.search}>
                  
               <h2>{props.search ? 'Поиск по запросу: ' + props.search : 'Все машины'}</h2>
      
                   <div className={style.search_block}>
                
                   <img src="/img/search.png" alt="search" />
                  
              <input onChange={onSearchInput} className= {style.search_block} placeholder='Поиск по моделям' />
              
            </div>           
      
      </div>      
                  

      <div className={style.products}>
    {            
      props.items.filter((item) => item.title.toLowerCase().includes
       (props.search.toLowerCase())).map( (obj, index) => {

        return (
          <Card
            key={index}
              {...obj}
                    
            //isAdded = {props.cartItems.some((objIsAdded) => objIsAdded.myId === obj.myId)}
            isFavorite = {props.favoritesItems.some((objIsFavorite) => objIsFavorite.myId === obj.myId)}
        onFavorite = {
          (favoriteObj) =>
           {
          onAddToFavorite(favoriteObj)
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

export default Products


