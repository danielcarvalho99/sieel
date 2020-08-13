import React from 'react'
import sieel from '../../Components/images/SIEEL.png';
import api from '../../services/api';

async function submitHandler(id){
        
        const response = await api.put('/product/' + id,{quantity:49});
        console.log(response.data)
        alert("Compra realizada com sucesso!")
}

function CarrinhoItem (props){
            
    return(
 
    <div className="item">
        
        <div>
            <h4>{props.name}</h4>
            <p>Preço: {props.price}</p>
            <img id="logo"src={sieel}
            alt="Logo da SIEEL"/>
        </div>
        <div>
        <button type="submit"
        id="botaoCompra"
        onClick={() => submitHandler(props.id)}>Comprar</button></div>
    </div>

    );
}

export default CarrinhoItem;

