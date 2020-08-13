import React from 'react';
import './styles.css';
import CarrinhoData from '../../Components/carrinho/CarrinhoData';
import CarrinhoItem from '../../Components/carrinho/CarrinhoItem';

export default function Carrinho(){

const itensDoCarrinho = CarrinhoData.map(
        item => <CarrinhoItem 
                name={item.name}
                price={item.price}
                id={item.id}
                key={item.id}
                />);

return(

        <div className="body">
            <h1>Carrinho</h1>
            {itensDoCarrinho}
        </div>

);
}