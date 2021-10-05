import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewProduct from "./components/NewProductInput";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import ProductDetails from "./components/ProductDetails";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <br/>
    <div>
      
      <Route exact path="/" component={Home} />

      <Route path="/new-vehicle" component={NewProduct} />

      <Route path="/vehicle-list" component={ProductList} />
      
      <Route path="/alugaMais/edit/:_id" component={EditProduct} />
      
      <Route path="/alugaMais/details/:_id" component={ProductDetails} />
      
      <Route path="/alugaMais/delete/:_id" component={DeleteProduct} />

    </div>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;