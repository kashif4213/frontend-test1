import Layout from "./components/Layout/Layout";
import Menu from "./containers/Menu/Menu";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
    <div >
      {/* <Layout> */}
      <Navbar />
      <div className="row mt-4">
        <div className="col-8">
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </div>
        <div className="col-4"></div>
        

      </div>
      
              {/* </Layout> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
