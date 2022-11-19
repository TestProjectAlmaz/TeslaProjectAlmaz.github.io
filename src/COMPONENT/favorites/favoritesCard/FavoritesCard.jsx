import React, { useState } from "react"
import style from "./favoritesCard.module.css"



const FavoritesCard = (props) => {
  
  const[added, setAdded] = React.useState(false);
  //const [favorite, setFavorite] = useState(true);

  const onClickPlus = () => {
    let title = props.title;
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({title, description, price, img})
    setAdded(!added)    
  }
  
  const onClickFavorite = () => {
    props.onFavorite(props.id)

   // setFavorite(!favorite)    
  }

    return (

        <div className={style.product_item}>

        {/*
          favorite === true ? <button className={style.favorite_btn_added} onClick={onClickFavorite} >Автомобиль добавлен в избранное</button> :  <button className = {style.favorite_btn} onClick={onClickFavorite} >Добавить автомобиль в избранное</button>
        */}

        <button className={style.favorite_btn_added} onClick={onClickFavorite} >Автомобиль добавлен в избранное</button>

            <img className={style.product_img} src= {props.img}  alt="tesla" />
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>

            
            <div className={style.product_price}>

              <span>{props.price}</span>

              <button className={added ? style.check_btn : style.plus_btn} onClick={onClickPlus}>              
              <img src={added ? '/img/check.png' : '/img/plus.png'} alt=""/>

              </button>

            </div>           
          </div>   
    )
}

export default FavoritesCard



 



