import { Component } from "react";
import axios from "axios";

class DeleteProduct extends Component {
  componentDidMount = () => {
    const _id = this.props.match.params._id;

    axios
      .delete(`https://ironrest.herokuapp.com/bazarProducts/${_id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/vehicle-list");
        
      })
      .catch((error) => console.log(error));
  };

  render() {
    return <div>Deletando...</div>;
  }
}

export default DeleteProduct;