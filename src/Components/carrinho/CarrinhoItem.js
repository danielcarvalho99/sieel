import React from 'react'
import sieel from '../../Components/images/SIEEL.png';
import api from '../../services/api';

async function submitHandler(id){
    
        const response = await api.get('/product/' + id);
        const before = response.data.quantity;

        if(before > 0){
            const response2 = await api.put('/product/' + id,{quantity: before - 1});
            console.log(response2);
            alert("Compra realizada com sucesso!")
        }

        else{
            alert("Evento esgotado!")
        }
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

