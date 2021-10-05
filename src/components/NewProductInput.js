import { Component } from "react";
import axios from "axios";

import TextInput from '../components/TextInput';
import ChoiceInput from '../ChoiceInput';

class NewProduct extends Component {
    state = {
      image_url: "",
      name: "",
      description: "",
      price: 0,
      avaliable: false,
    };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

 handleSubmit = async () => {
    const response = await axios.post(
      'https://ironrest.herokuapp.com/bazarProducts',
      this.state
    );

    console.log(response);

this.setState({
      image_url: "",
      name: "",
      description: "",
      price: 0,
      avaliable: false,
    });
  };

render() {
    return (
      <div className="container pt-5 mb-5 mt-5">
        <h2 className="mb-3">Novo Produto</h2>
        <TextInput
          label="Imagem URL"
          type="text"
          name="image_url"
          value={this.state.image_url}
          onChange={this.handleChange}
        />
        <TextInput
          label="Nome"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Descrição"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <TextInput
          label="Preço"
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <ChoiceInput
          label="Disponível?"
          type="checkbox"
          name="avaliable"
          onChange={() => {
            this.setState({ avaliable: !this.state.avaliable });
          }}
        />
        <button onClick={this.handleSubmit} className=" btn btn-primary">
          Concluir
        </button>
      </div>
    );
  }

}

export default NewProduct;