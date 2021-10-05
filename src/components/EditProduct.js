import { Component } from "react";
import axios from "axios";

import TextInput from "../components/TextInput";
import ChoiceInput from "../ChoiceInput";

class EditProduct extends Component {
    state = {
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

        delete response.data._id
        
      this.setState({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const _id = this.props.match.params._id;

    event.preventDefault();

    axios
    .put(`https://ironrest.herokuapp.com/bazarProducts/${_id}`, this.state)
    .then((response) => {

      this.props.history.push("/vehicle-list");
       
    })
    .catch((error) => {
      console.log(error);
    });
  };

render() {
  return (
      <div className="container pt-5 mb-5 mt-5">
          <h2 className="mb-3">Editar Produto</h2>

          <form onSubmit={this.handleSubmit}>
              <TextInput
                  label="Imagem URL"
                  type="text"
                  name="image_url"
                  onChange={this.handleChange}
                  value={this.state.image_url}
                  required
              />
              <TextInput
                  label="Nome"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
              />
              <TextInput
                  label="Descrição"
                  type="text"
                  name="type"
                  onChange={this.handleChange}
                  value={this.state.description}
                  required
              />
              <TextInput
                  label="Preço"
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.price}
                  required
              />
              <ChoiceInput                  
                  label="Produto está disponivel?"
                  type="checkbox"
                  name="avaliable"
                  onChange={() => {
                  this.setState({ avaliable: !this.state.avaliable });
                  }}
                  checked={this.state.avaliable}
              />

              <div className="form-group">
                  <button type="submit" className="btn btn-primary mt-2">
                    Salvar
                  </button>
              </div>
          </form>
      </div>
    );
  };
};


export default EditProduct;