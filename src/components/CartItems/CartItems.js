import Wrapper from "../../hoc/Wrapper"
import CartItem from "./CartItem/CartItem"

const CartItems= (props)=>{

    return <Wrapper>
        <div>
            {props.cartItems.map(item=>{
                return <CartItem cartItem ={item} totalPrice = {props.totalPrice}/>
            })}
        </div>
    </Wrapper>
}


export default CartItems