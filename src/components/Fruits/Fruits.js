import Wrapper from "../../hoc/Wrapper"
import Fruit from './Fruit/Fruit'
const Fruits = (props) => {
    return <Wrapper>
        <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-between mt-2 ms-3 ">
        {props.menuList.map(menuItem => {
            return <Fruit menuItem={menuItem} addToCart ={props.addToCart} />
        })}
 
        </div>
          </Wrapper>
}


export default Fruits