import style from "./cartItem.module.css"

const CartItem = (props) => {
  let myId = props.myId;
  let id = props.id;

    return(

      <div className={style.cart_item}>
        <img className={style.cart_img} src= {props.img} alt=""/>
          <h3 className={style.cart_title}>
          {props.title}
            <br />
          <span className={style.cart_price}>{props.price}</span>
        </h3>
          <button onClick={() => props.onRemoveCartItem({id, myId})} className={style.close_btn}>X</button>
    </div> 
    )
}

export default CartItem