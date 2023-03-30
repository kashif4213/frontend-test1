import { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import CartItems from "../../components/CartItems/CartItems";
import './Checkout.css'
const Checkout = (props) => {
    return <Wrapper>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
                <h5 className="ms-3">Checkout</h5>

            </div>
        </div>
        <CartItems cartItems={props.cart}/>
        <hr className=" lineBreak"/>

        <div className="value row">
        <h3 className="col text-center">Subtotal</h3> <span className="col text-center">{props.totalPrice}</span>
        </div>

        <hr className=" lineBreak"/>
        
        <div className="value row">
        <h3 className="col text-center">Discount</h3> <span className="col text-center">{props.totalPrice}</span>
        </div>
       
       <hr className=" lineBreak"/>
       
       <div className="value row">
        <h3 className="col text-center ms-5">Total</h3> <span className="col text-center">{props.totalPrice}</span>      
        <button type="button" className="btn btn-success w-25">Checkout</button>
       </div>
       <hr className=" lineBreak"/>

    </Wrapper>
}



export default Checkout