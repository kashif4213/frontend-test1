import Wrapper from "../../../hoc/Wrapper"
import './CartItem.css'
const CartItem = (props) => {
    return <Wrapper>
        <div className="mt-5">
        <div className="row cart">
            <div className="col ">
                <div className="row">
                    <div className="col position-relative"><img className="w-50 h-75 mt-2 position-absolute top-50 start-50 translate-middle" src={props.cartItem.img} /></div>
                    <div className="col">
                        <div className="mt-4 me-3"><h5 className="cartName">{props.cartItem.name}</h5>
                        <p className="cartName">Product code : {props.cartItem.id}</p></div>
                        
                    </div>
                </div>

            </div>
            <div className="col position-relative ">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <svg className="bg-danger plusBtn" width="14" height="14" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 0.250068C7.1642 0.250068 6.75 0.250068 7.5 0.25H12.75C13.1642 0.25 13.5 0.5858 13.5 1C13.5 1.4142 13.1642 1.75 12.75 1.75H7.5C6.75 1.75 7.1642 1.75 6.75 1.75C6.3358 1.75 6.75 1.75 6 1.75H0.75C0.33579 1.75 0 1.4142 0 1C0 0.5858 0.33579 0.25 0.75 0.25H6C6.75 0.250079 6 0.249982 6.75 0.250068Z" fill="white" />
                    </svg>
                    <span className="ms-2 mt-2 ">{props.cartItem.no}</span>
                    <svg className="bg-success ms-2 plusBtn" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0.25C7.4142 0.25 7.75 0.58579 7.75 1V6.25H13C13.4142 6.25 13.75 6.5858 13.75 7C13.75 7.4142 13.4142 7.75 13 7.75H7.75V13C7.75 13.4142 7.4142 13.75 7 13.75C6.5858 13.75 6.25 13.4142 6.25 13V7.75H1C0.58579 7.75 0.25 7.4142 0.25 7C0.25 6.5858 0.58579 6.25 1 6.25H6.25V1C6.25 0.58579 6.5858 0.25 7 0.25Z" fill="white" />
                    </svg>
                </div>


            </div>
            <div className="col d-flex justify-content-around">
                <div className="mt-4">                
                 <span >{props.cartItem.unit} {props.cartItem.price}</span>
                </div>
                <svg className="bg-success  mt-4 cross" width="12" height="11" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.273 0.227072C10.5659 0.519956 10.5659 0.994842 10.273 1.28773L6.56066 5.00004L10.273 8.71235C10.5659 9.00524 10.5659 9.48013 10.273 9.77301C9.98009 10.0659 9.50519 10.0659 9.21231 9.77301L5.5 6.0607L1.78769 9.77301C1.49481 10.0659 1.01991 10.0659 0.727029 9.77301C0.434146 9.48013 0.434146 9.00524 0.727029 8.71235L4.43934 5.00004L0.727029 1.28773C0.434139 0.994842 0.434146 0.519956 0.727029 0.227072C1.01991 -0.0658112 1.4948 -0.0658184 1.78769 0.227072L5.5 3.93938L9.21231 0.227072C9.5052 -0.0658184 9.98009 -0.0658112 10.273 0.227072Z" fill="white" />
                </svg>

            </div>
        </div>
        </div>
        
    </Wrapper>
}

export default CartItem