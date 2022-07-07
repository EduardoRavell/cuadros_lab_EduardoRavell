import './ItemList.css';
import React from 'react';
import Item from '../Item/Item';
function ItemList({listadoCuadros}){
    return (
    <>
        
       { listadoCuadros.map((cuadro)=>
       <Item id={cuadro.id} img={cuadro.img} titulo={cuadro.titulo} categoria={cuadro.categoria} descripcion={cuadro.descripcion} precio={cuadro.precio} stock={cuadro.stock}/>
       )}
       
   
    </>
    );
}

export default ItemList;