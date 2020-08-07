import React from 'react'

function CarrinhoItem (props){

    return(

    <div className="item">
        <h4>{props.name}</h4>
        <p>Preço: {props.price}</p>
    </div>

    );
}

export default CarrinhoItem;

