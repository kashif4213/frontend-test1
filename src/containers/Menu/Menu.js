import { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import Category from "../../components/Category/Category";
import Fruits from "../../components/Fruits/Fruits";
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.png';
import img4 from '../../imgs/img4.png';
import img5 from '../../imgs/img5.png';
import img8 from '../../imgs/img8.png';
import img9 from '../../imgs/img9.png';
import img10 from '../../imgs/img10.png';
import img11 from '../../imgs/img11.png';

// /import axios from '../../axios';
// import Error from '../../components/Error/Error';
import { Navigate } from "react-router";



class Menu extends Component{

    state={
        fruits:[
            {img : img2 , name:"Sweetest® Mango", bio : 'It’s mango season again... who doesn’t love that!', no:5,price:85, unit : 'p', category : 'fruit'},
            {img : img3,name:"Seedless Grapes", bio : 'Yummy brand seedless grapes 900g', no:10 ,price:3.75, unit : '£' , category : 'fruit'},
            {img : img4,name:"Juicy Figs", bio : 'Best figs for cooking 140g', no:7,price:2.00, unit : '£', category : 'fruit' },
            {img : img5,name:"Pomegranate", bio : 'Imported directly from important places', no:11,price:1.25, unit : '£', category : 'fruit'},
            {img : img2,name:"Sweetest® Mango 2", bio : 'It’s mango season again... who doesn’t love that!', no:5,price:85, unit : 'p' , category : 'fruit'},
            {img : img3,name:"Seedless Grapes 2", bio : 'Yummy brand seedless grapes 900g', no:10 ,price:3.75, unit : '£' , category : 'fruit'},
            {img : img4,name:"Juicy Figs 2", bio : 'Best figs for cooking 140g', no:7,price:2.00, unit : '£', category : 'fruit' },
            {img : img5,name:"Pomegranate 2", bio : 'Imported directly from important places', no:11,price:1.25, unit : '£', category : 'fruit' },
            {img: img8,name:"Orange juice", bio : 'Best Orange juice 200 ml', no:7,price:2.00, unit : '£', category : 'drink' },
            {img: img9, name:"Mango shake", bio : 'Imported directly from important places', no:11,price:1.25, unit : '£', category : 'drink' },
            {img: img10, name:"Bread", bio : 'Best wheat bread for cooking 200g', no:7,price:2.00, unit : '£', category : 'bakery' },
            {img: img11,name:"pattie", bio : 'Imported directly from important places', no:11,price:1.25, unit : '£', category : 'bakery' }


        ],
        totalPrice:0,
        goingToPurchase:false,
       error:false,
       query:"",
       categories:["All items", "Drinks", "Fruit","Bakery" ]
    //    goToCheckout:false
    }
    componentDidMount(){
        //to get ingredients from firebase and set burger whenever app loads for the first time
        // axios.get('/fruits.json').then(res=>{
        //     let fruits=this.state.fruits;
        //     console.log(fruits);
        //     fruits.map(obj=>{
        //        obj.no=res.data[obj.name]
        //     })
        //     this.setState({
        //         fruits:fruits    
        //     })
        // })
    }
   
// selectCategory=()=>{
// }
    // addIngredients=(ingType)=>{
    //     let obj=this.state.ingredients.find(t=>t.name===ingType);
    //     let objIndex=this.state.ingredients.findIndex(t=>t.name===ingType);
    //     console.log(objIndex);
    //     let oldCount=obj.no;
    //     let updatedCount=oldCount+1;
    //     let price=obj.price;
    //     let oldPrice=this.state.totalPrice;
    //     let newPrice=price+oldPrice;
    //     let updatedIngredient=[...this.state.ingredients];
    //     updatedIngredient[objIndex].no=updatedCount;
    //     console.log(newPrice);
    //     this.setState({
    //         ingredients:updatedIngredient,
    //         totalPrice:newPrice
    //     })
    // }

    // removeIngredients=(ingType)=>{
    //     let obj=this.state.ingredients.find(t=>t.name===ingType);
    //     let objIndex=this.state.ingredients.findIndex(t=>t.name===ingType);
    //     console.log(objIndex);
    //     let oldCount=obj.no;
    //     if(oldCount<=0)
    //     {
    //         return;
    //     }
    //     let updatedCount=oldCount-1;
    //     let price=obj.price;
    //     let oldPrice=this.state.totalPrice;
    //     let newPrice=oldPrice-price;
    //     let updatedIngredient=[...this.state.ingredients];
    //     updatedIngredient[objIndex].no=updatedCount;
    //     console.log(newPrice);
    //     this.setState({
    //         ingredients:updatedIngredient,
    //         totalPrice:newPrice
    //     })
    // }
    // showSummary=()=>{
    //     //Make an array of quantity of each ingredient to pass it in URL
    //     let query=[];
    //     for(let i of this.state.ingredients)
    //     {
            
    //          query.push(i.no);
    //     }
    //     console.log(query);    //[0,2,1]
    //     //Make it string as URL can't be updated with array. It can be updated by adding string
    //     let queryString=query.join(',');
    //     console.log(queryString);    //0,2,1
    //     this.setState({
    //         goingToPurchase:true,
    //         query:queryString
    //     })

    // }
    // goBack=()=>{
    //     this.setState({
    //         goingToPurchase:false
    //     })
    // }
    // goContinue=()=>{
    //     let myOrder={
    //         ingredients:this.state.ingredients,
    //         price:this.state.totalPrice,
    //         OrderNo:1,
    //         customer:{
    //             name:"hira",
    //             address:"lahore"
    //         }
    //     }
    //     axios.post('/Orders.json',myOrder).then(res=>{    //post my order to firebase
    //         console.log(res);
    //         this.setState({
    //             goingToPurchase:false,   //to close summary screen
    //             // goToCheckout:true
    //         })
            
    //         }
            
    //     ).catch(error=>{
    //         this.setState({
    //             error:true,
    //             goingToPurchase:false   //to close summary screen
    //         })
    //     });
    // }
    // exitError=()=>{
    //     this.setState({
    //         error:false
    //     })
    // }
    
    render()
    {
        // const disabledInfo=[...this.state.ingredients];
        // let flag={};
        // let quantityOfEveryIngredient=0;
        // let disableOrderButton;
        // for(let obj of disabledInfo)
        // {
        //     if(obj.no<=0)
        //     {
        //         flag[obj.name]=true;
        //         quantityOfEveryIngredient++;
        //     }
        //     else{
        //         flag[obj.name]=false;
        //     }
        // }
        // if(quantityOfEveryIngredient===3)
        // {
        //     disableOrderButton=true;
        // }
        // else{
        //     disableOrderButton=false;
        // }

        return <Wrapper>
                {/* {this.state.goToCheckout && <Navigate to="/checkout"/>} */}
                {/* {this.state.error &&<Error disable={this.exitError}/>} */}
                {/* pass this query String as prop to OrderSummary component because there we have LINK on button click.
                 When button is clicked, it will update the URL by adding this string with the help of LINK e.g. /checkout?0,2,1 */}
                 {/* {this.state.goingToPurchase && <OrderSummary queryParams={this.state.query} back={this.goBack} continue={this.goContinue} ing={this.state.ingredients}/>} */}
                <Category categories={this.state.categories} />
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10"> <h3 className="ms-3 mt-3">Trending Items</h3>
                    <Fruits  menuList={this.state.fruits}/>
                    </div>
                    
                </div>
                
                
                {/* <BuildControls disableOrderButton={disableOrderButton} showSummary={this.showSummary} addIng={this.addIngredients} remIng={this.removeIngredients} disabled={flag} price={this.state.totalPrice}/> */}
            </Wrapper>
    }
}
export default Menu;