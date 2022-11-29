import React from "react"
import style from "./favoritesCard.module.css"
import { AppContext } from '../../../App'


const FavoritesCard = (props) => {
  const context = React.useContext(AppContext);

  let id = props.id;
  let myId = props.myId;  
  

  const onClickPlus = () => {
    let title = props.title;
    let description = props.description
    let id = props.id;
    let price = props.price
    let img = props.img
    let key = props.key;
    let myId = props.myId;

    props.onPlus({title, id, myId, key, description, price, img})
     
  }
  
  const onClickFavorite = () => {
    props.onFavorite({id,myId})

      
  }

    return (

        <div className={style.product_item}>
                <button className={style.favorite_btn_on} onClick={onClickFavorite} >Удалить автомобиль из избранного</button>

            <img className={style.product_img} src= {props.img}  alt="tesla" />
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>

            
            <div className={style.product_price}>

              <span>{props.price}₽</span>

              <button 
              className=    {context.itemAdded({id, myId}) ?
              style.check_btn : style.plus_btn} onClick={onClickPlus}>              
               <img src={ context.itemAdded({id, myId}) ? '/img/check.png': '/img/plus.png'} alt=""/>

              </button>

            </div>           
          </div>   
    )
}

export default FavoritesCard



 



