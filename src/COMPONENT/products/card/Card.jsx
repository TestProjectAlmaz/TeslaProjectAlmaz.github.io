import React from "react"
import style from "./card.module.css"
import { AppContext } from "../../../App";


const Card = (props) => {

  const context = React.useContext(AppContext)
  
  let id = props.id;
  let myId = props.myId; 
  
  const onClickPlus = () => {
    let id = props.id
    let myId = props.myId
    
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({id, myId, title, description, price, img})
       
  }
  
  const onClickFavorite = () => {
    let id = props.id
    let myId = props.myId
   
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onFavorite({id, myId, title, description, price, img})
    
  }

    return (

        <div className={style.product_item}>

        
         {
          //context.itemFavorited(props.id) === true ? 
          <button className={context.itemFavorited({id, myId}) ?style.favorite_btn_added : style.favorite_btn } onClick={onClickFavorite}>{context.itemFavorited({id, myId}) ?
           'Убрать из избранного' : 'Добавить в избранное'}
           </button>
        }

       
            <img className={style.product_img} src= {props.img}  alt="tesla" />
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>

            
            <div className={style.product_price}>

              <span>{props.price}</span>

              <button className={context.itemAdded({id, myId}) ? style.check_btn : style.plus_btn} onClick={onClickPlus}>              
              <img src={context.itemAdded({id, myId}) ? '/img/check.png' : '/img/plus.png'} alt=""/>

              </button>

            </div> 
           
          </div>   
    )
}

export default Card



 

