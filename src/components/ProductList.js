import { Component } from "react";

import axios from "axios";
import ProductCard from "./ProductCard";
import Search from "./Search";

class ProductList extends Component {
  state = {
    products: [], 
    filtered: [], 
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/bazarProducts"
      );

      this.setState({ products: [...response.data], filtered: [...response.data] });
    } catch (error) {
      console.log(error);
    }
  };

  filterProduct = (input) => {
    const filtered = this.state.products.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  };

  render() {
    return (
      <div className="container pt-5 mb-5 mt-5">

        <div  className="mb-5">
        <Search filterProduct={this.filterProduct} />
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">

        {this.state.filtered.map((product) => (
          <ProductCard key={product._id} {...product} location={this.props.location.pathname} />
        ))}
        </div>
      </div>
      
    );
  }
}

export default ProductList;