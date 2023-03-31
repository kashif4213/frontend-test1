import Wrapper from "../../hoc/Wrapper"
import CartItem from "./CartItem/CartItem"

const CartItems= (props)=>{
    return <Wrapper>
        <div>
            {props.cartItems.map(item=>{
                return <CartItem  cartItem ={item} totalPrice = {props.totalPrice} addtoCart={props.addtoCart}  removefromCart={props.removefromCart} cross={props.cross}/>
            })}
        </div>
    </Wrapper>
}


export default CartItems