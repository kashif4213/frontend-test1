import Menu from "./containers/Menu/Menu";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.png';
import img4 from './imgs/img4.png';
import img5 from './imgs/img5.png';
import img8 from './imgs/img8.png';
import img9 from './imgs/img9.png';
import img10 from './imgs/img10.png';
import img11 from './imgs/img11.png'

class App extends React.Component {
 
  state = {
    fruits: [
        { id: 1, img: img2, name: "Sweetest® Mango", bio: 'It’s mango season again... who doesn’t love that!', no: 5, price: 85, unit: 'p', category: 'Fruit' },
        { id: 2, img: img3, name: "Seedless Grapes", bio: 'Yummy brand seedless grapes 900g', no: 10, price: 3.75, unit: '£', category: 'Fruit' },
        { id: 3, img: img4, name: "Juicy Figs", bio: 'Best figs for cooking 140g', no: 7, price: 2.00, unit: '£', category: 'Fruit' },
        { id: 4, img: img5, name: "Pomegranate", bio: 'Imported directly from important places', no: 11, price: 1.25, unit: '£', category: 'Fruit' },
        { id: 5, img: img2, name: "Sweetest® Mango 2", bio: 'It’s mango season again... who doesn’t love that!', no: 5, price: 85, unit: 'p', category: 'Fruit' },
        { id: 6, img: img3, name: "Seedless Grapes 2", bio: 'Yummy brand seedless grapes 900g', no: 10, price: 3.75, unit: '£', category: 'Fruit' },
        { id: 7, img: img4, name: "Juicy Figs 2", bio: 'Best figs for cooking 140g', no: 7, price: 2.00, unit: '£', category: 'Fruit' },
        { id: 8, img: img5, name: "Pomegranate 2", bio: 'Imported directly from important places', no: 11, price: 1.25, unit: '£', category: 'Fruit' },
        { id: 9, img: img8, name: "Orange juice", bio: 'Best Orange juice 200 ml', no: 7, price: 2.00, unit: '£', category: 'Drinks' },
        { id: 10, img: img9, name: "Mango shake", bio: 'Imported directly from important places', no: 11, price: 1.25, unit: '£', category: 'Drinks' },
        { id: 11, img: img10, name: "Bread", bio: 'Best wheat bread for cooking 200g', no: 7, price: 2.00, unit: '£', category: 'Bakery' },
        { id: 12, img: img11, name: "pattie", bio: 'Imported directly from important places', no: 11, price: 1.25, unit: '£', category: 'Bakery' }
    ],
    cart: [],
    totalPrice: 0,
    goingToPurchase: false,
    error: false,
    query: "",
    categories: ["All items", "Drinks", "Fruit", "Bakery"],
    selectedCategory: "All items"
    //    goToCheckout:false
    
}

selectCategory = (event) => {
  this.setState({ selectedCategory: event.target.innerText })
}
addtoCart = (id) => {
  let obj = this.state.fruits[id-1];
  let updatedFruits = [...this.state.fruits]
  updatedFruits[id-1].no= obj.no - 1;
  let price = obj.price;
  if (obj.unit == 'p') price=price* 0.87
  let updatedTotalPrice=this.state.totalPrice+price
  let updatedCart =[...this.state.cart]
  updatedCart.push(obj)
  console.log( updatedTotalPrice, updatedCart)
  this.setState({
      fruits :updatedFruits,
      totalPrice: updatedTotalPrice,
      cart : updatedCart
  })
}

removeFromCart = (id) => {
  //console.log(element)
   let obj = this.state.fruits.find(t => t.id === id);
   let updatedCount = obj.no + 1;
   let price = obj.price;
   if (obj.unit == 'p') price=price* 0.87
   let updatedTotalPrice=this.state.totalPrice-price
   let updatedCart =[...this.state.cart]
   updatedCart.splice(obj,1)
  this.setState({
      no: updatedCount,
      totalPrice: updatedTotalPrice,
      cart : updatedCart
  })
}
  render(){
  return (
    <BrowserRouter>
    <div >
      {/* <Layout> */}
      <Navbar cartLength ={this.state.cart.length} cart={this.props.cart} />
      <div className="row mt-4">
        <div className="col-9">
        <Routes>
          <Route path="/" element={<Menu addtoCart={this.addtoCart} cart={this.state.cart} selectedCategory={this.state.selectedCategory} fruits={this.state.fruits} categories={this.state.categories} selectCategory={this.selectCategory}/>}/>
          <Route path="/checkout" element={<Checkout cart={this.state.cart} totalPrice={this.state.totalPrice} />}/>
        </Routes>
        </div>
        <div className="col-4"></div>
        

      </div>
      
              {/* </Layout> */}
    </div>
    </BrowserRouter>
  );
 }

}

export default App;
