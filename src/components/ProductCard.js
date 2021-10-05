import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {

  return (
        
            <div className="col">
                <div className="card h-100 shadow">
                <Link to={`/alugaMais/details/${props._id}`}>
                <img src={props.image_url} style={{maxWidth: '300px'}}  className="card-img-top" alt="product" /></Link>
                <div className="cardBody m-3">
                    <h5 className="cardTitle">{props.name}</h5>
                    <p className="cardText">{props.description}</p>
                    <p className="cardText">{props.price}</p>

                    {props.location === "/vehicle-list" ? <div>
                    <p className="cardText"> Produto Disponível? {props.avaliable ? "Sim" : "Não"}</p>

                    <Link
                    to={`/alugaMais/rent/${props._id}`}
                    title="Comprar Produto"
                    className="text-primary"
                  > 
                    <i className="fas fa-car-side"></i> Comprar Produto
                    </Link>
                    <br/>

                    <Link
                    to={`/alugaMais/edit/${props._id}`}
                    title="Editar Produto"
                    className="text-primary"
                  > 
                    <i className="fas fa-edit"></i> Editar Produto
                    </Link>
                    <br/>
                    <Link
                    to={`/alugaMais/delete/${props._id}`}
                    title="Deletar Produto"
                    className="text-danger"
                  >
                    <i className="fas fa-trash-alt"></i> Deletar Produto
                    </Link>

                    </div> : null}
                    
                </div>
                </div>
            </div>    
  );
}

export default ProductCard;