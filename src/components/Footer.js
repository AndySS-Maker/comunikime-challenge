import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="alpha text-white pt-3 pb-2" style={{backgroundColor: 'black'}}>

            <div className="container text-center text-md-left ">

                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Sobre a Empresa</h5>
                        <p>No Porão Bazar você encontra tudo que está procurando sem sair do lugar, com uma interface bonita e facil de usar, o que busca está a um clique de você.</p>
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-4">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Links úteis</h5>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Sua Conta</Link>
                        </p>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Perguntas Frequêntes</Link>
                        </p>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Sugestões</Link>
                        </p>
                        <p>
                            <Link to="#" className="text-white" style={{textDecoration: "none"}}>Ajuda</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-4">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning" >Contato</h5>

                        <p>
                            <i className="fas fa-envelope mr-3"></i> contato@poraobazar.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> +55 (xx) xxxxx-xxxx
                        </p>
                        <p>
                            <i className="fas fa-home mr-3"></i> Av. xxxx, nº xxx, Cidade/SP - Brasil
                        </p>
    
                    </div>
                    
                </div>

                <hr className="mb-4"/>

            </div>
	
        </div>

    )
}

export default Footer;