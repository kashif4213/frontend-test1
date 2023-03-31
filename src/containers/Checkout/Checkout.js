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
        <CartItems cartItems={props.cart} addtoCart={props.addtoCart} removefromCart={props.removefromCart} cross={props.cross} />
        <hr className=" lineBreak" />

        <div className="value row ">
            <div className="col-5"></div>
            <div className="col-4 d-flex justify-content-around">
                <h3 className=" text-center fs-6 fw-bolder">Subtotal</h3> <span className=" text-center fs-6 fw-semibold">£{props.totalPrice}</span>

            </div>
        </div>

        <hr className=" lineBreak" />

        <div className="value row ">
            <div className="col-5"></div>
            <div className="col-4 d-flex justify-content-around">
                <h3 className=" text-center fs-6 fw-bolder">Discount</h3> <span className=" text-center fs-6 fw-semibold">£{props.totalPrice}</span>
            </div>
        </div>
        <hr className=" lineBreak" />

        <div className="value row ">
            <div className="col-5"></div>
            <div className="col-4 d-flex justify-content-around">
                <h3 className="text-center fs-6 fw-bolder ">Total</h3> <span className="text-center fs-6 fw-semibold">£{props.totalPrice}</span>
            </div>
            <button type="button" className="btn btn-success w-25">Checkout</button>
        </div>


        <hr className=" lineBreak" />

    </Wrapper>
}



export default Checkout