import { Component } from "react";
import React from 'react';

import Carousel from 'react-elastic-carousel';
import ProductCard from './ProductCard';
import axios from 'axios';
import "../style/main.scss";

class Home extends Component {
    state = {
        products: [], 
      };

      componentDidMount = async () => {
        try {
          const response = await axios.get(
            "https://ironrest.herokuapp.com/bazarProducts"
          );
    
       
          this.setState({ products: [...response.data] });
        } catch (error) {
          console.log(error);
        }
      };

    render() {
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 2},
            {width: 768, itemsToShow: 3},
            {width: 1200, itemsToShow: 4}
        ];
        return (
            <div>
                <section className="hero-image">
                    <h1>Bem vindo ao Porão Bazar</h1>
                    <h2>Tudo que procura em um só lugar!</h2>
                </section>
                
                <div>
                    <h2 className="text-center mt-5">Confira algumas opções:</h2>
                    <Carousel breakPoints={breakPoints} className="mt-5 mb-5">
                        {this.state.products.map((product) => (
                            <div>
                                <ProductCard key={product._id} {...product} 
                                location={this.props.location.pathname} 
                                style={{width: "300px", height: "auto"}} />
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>
        )
    };
};

export default Home;