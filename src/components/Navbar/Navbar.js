import Wrapper from "../../hoc/Wrapper"
import './Navbar.css'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     setCount(props.cart)
    //   });
    return <Wrapper>
        <div className="row mt-5 ms-5">
            <div className="col-2 ms-4"> <h3 className=" fs-6 mt-3 text-end">GROCERIES </h3></div>
            <div className=" searchBar  ">
                <input className="border-1 border-secondary-subtle navSearch" type="text" placeholder="    Search"></input>

                <svg className="iconSize mt-3 " width="25" height="25" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5482 7.2H1.47433C0.674506 7.2 0.026123 6.39411 0.026123 5.4C0.026123 4.40589 0.674506 3.6 1.47433 3.6H20.5482C21.1446 1.50265 22.7539 0 24.6456 0C26.5373 0 28.1466 1.50265 28.743 3.6H32.3693C33.1692 3.6 33.8175 4.40589 33.8175 5.4C33.8175 6.39411 33.1692 7.2 32.3693 7.2H28.743C28.1466 9.29735 26.5373 10.8 24.6456 10.8C22.7539 10.8 21.1446 9.29735 20.5482 7.2Z" fill="#6A6A6A" />
                    <path d="M32.3693 26.4C33.1692 26.4 33.8175 25.5941 33.8175 24.6C33.8175 23.6059 33.1692 22.8 32.3693 22.8H13.2955C12.699 20.7027 11.0897 19.2 9.19808 19.2C7.30641 19.2 5.69711 20.7027 5.10068 22.8H1.47433C0.674507 22.8 0.026123 23.6059 0.026123 24.6C0.026123 25.5941 0.674507 26.4 1.47433 26.4H5.10068C5.69711 28.4973 7.30641 30 9.19808 30C11.0897 30 12.699 28.4973 13.2955 26.4H32.3693Z" fill="#6A6A6A" />
                </svg>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col mt-3">
                        <svg width="30" height="30" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0086 1C7.90436 1 1 7.16621 1 15.1746C1 20.6992 3.54227 25.3504 6.9116 29.2033C10.2694 33.043 14.6014 36.266 18.5177 38.9635L25.2748 43.6177C26.0148 44.1274 26.9852 44.1274 27.7252 43.6177L34.4823 38.9635C38.3986 36.266 42.7306 33.043 46.0884 29.2033C49.4577 25.3504 52 20.6992 52 15.1746C52 7.16621 45.0956 1 36.9914 1C32.8139 1 29.1379 2.99324 26.5 5.57233C23.8621 2.99324 20.1861 1 16.0086 1Z" fill="#E86F6F" stroke="#FF5E5E" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div >
                    
                    <div className="col mt-3">
                        <img className="avatar" src={img6}/>
                    </div>
                    <div className="col mt-3 ">
                       
                    { props.cartLength > 0 && <p className="cartCount ms-4  bg-primary text-center text-light rounded-circle">{props.cartLength}</p>}                     
                    <Link to ="/checkout" cart={props.cart}><img className="avatar" src={img7} /></Link>
                    </div>
                    <div className="col"></div>
                    
                </div>
            </div>
        </div>

    </Wrapper>
}


export default Navbar