import React from 'react'
import sieel from '../../Components/images/SIEEL.png';

function CarrinhoItem (props){

    return(

    <div className="item">
        
        <img id="logo"src={sieel}
        alt="Logo da SIEEL"/>
        
        <div className>
            <h4>{props.name}</h4>
            <p>Preço: {props.price}</p>
        </div>
        
        <button id="botaoCompra">Comprar</button>
    </div>

    );
}

export default CarrinhoItem;

