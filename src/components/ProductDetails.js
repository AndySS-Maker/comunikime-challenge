import { Component } from "react";
import axios from "axios";

class ProductDetails extends Component {
    state = {
        _id: "",
        image_url: "",
        name: "",
        description: "",
        price: 0,
        avaliable: false,
      };
  
  componentDidMount = async () => {
    try {
      const _id = this.props.match.params._id; 

      const response = await axios.get(
        `https://ironrest.herokuapp.com/bazarProducts/${_id}`
      );

      this.setState({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className=" ms-auto text-center m-5">
        <div className="pt-5 m-5">
          <img src={this.state.image_url} className="container" alt="product" style={{maxWidth: '500px', justifyContent: 'center', borderRadius: '10%'}}/>
          </div>
          <p>
            <strong>Nome: </strong>
            {this.state.name}
          </p>
          <p>
            <strong>Descrição: </strong>
            {this.state.description}
          </p>
          <p>
            <strong>Preço: </strong>
            {this.state.price}
          </p>
        <div>
        <p>
          <strong>Produto disponível? </strong>
          {this.state.avaliable ? "Sim" : "Não"}
        </p>
        </div>

      </div>
    );
  }
}

export default ProductDetails;