import Wrapper from "../../hoc/Wrapper";
import './Category.css'
const Category=(props)=>{
    return( <Wrapper>
<div className="row">

    <div className="col-2 ">
        </div>
        <div className=" col-9 d-flex justify-content-xxl-evenly" >
        {props.categories.map(category=>{

            return <button id="categoryButton"  class=" btn btnSize h-100 border-secondary-subtle  ms-2 btn-light border-1 rounded-pill " onClick={props.selectCategory}> {category}</button>
        })}
        </div>
    
</div>
        
        
    </Wrapper>
            
    );
}

export default Category