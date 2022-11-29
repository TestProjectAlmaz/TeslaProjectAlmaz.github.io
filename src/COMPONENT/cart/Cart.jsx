import CartItem from "./cartItem/CartItem"
import style from "./cart.module.css"



const Cart = (props) => {

   

    return(
        <div className = {style.overlay}>
    <div className = {style.cart}>

    <div className={style.title_block}>
    <h2>Корзина</h2>
    <button className={style.close_btn} onClick = {props.closeCart}>X</button>
    </div>

    {
        props.cartItems.length > 0 ?
        <div className={style.cart_list}>
    {
        props.cartItems.map(obj => {

            return (
                <CartItem
                onRemoveCartItem={props.onRemoveCartItem}
                key={obj.id}
                myId = {obj.myId}
                id = {obj.id}
                title = {obj.title}
                description = {obj.description}
                price = {obj.price}
                img = {obj.img}  
                  
                />
            )
        })
    }
           
      
         </div>

         : <h2>Ваша корзина пуста</h2>
    }
   
   
                <div className={style.total_price}>
                
                  <p className={style.total_price_text}>Итого:</p>
                  <p className={style.total_price_sum}>{props.totalPrice}₽.</p>

                 
                  <button className={style.total_price_button}><a href="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%B7%D0%B0%20%D0%BA%D1%83%D1%80%D1%81&targets-hint=%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%B7%D0%B0%20%D0%BA%D1%83%D1%80%D1%81&default-sum=1000&button-text=11&payment-type-choice=on&fio=on&phone=on&comment=on&mail=on&address=on&hint=%D0%92%D0%B2%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%20%D0%B2%D0%B0%D1%88%D0%B8%20%D0%BF%D0%BE%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F&successURL=&quickpay=shop&account=4100116881858890&">ОПЛАТИТЬ</a></button>
                 
                </div>

            </div>
                </div>
    )

    
}

export default Cart