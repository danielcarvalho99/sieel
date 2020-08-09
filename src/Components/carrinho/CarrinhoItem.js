import React from 'react'
import sieel from '../../Components/images/SIEEL.png';

function CarrinhoItem (props){

    function clickHandler(){

        alert("Compra realizada com sucesso")
    }

    return(

    <div className="item">
        
        <div>
            <h4>{props.name}</h4>
            <p>Preço: {props.price}</p>
            <img id="logo"src={sieel}
            alt="Logo da SIEEL"/>
        </div>
        <div>
        <button id="botaoCompra" onClick={clickHandler}>Comprar</button></div>
    </div>

    );
}

export default CarrinhoItem;

