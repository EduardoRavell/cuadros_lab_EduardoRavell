import './ItemList.css';
import React from 'react';
import Item from '../Item/Item';
function ItemList({listadoCuadros}){
    return (
    <>

       { listadoCuadros.map((cuadro)=>
       <Item id={cuadro.id} titulo={cuadro.titulo} categoria={cuadro.categoria} descripcion={cuadro.descripcion} precio={cuadro.precio}/>
       )}
       
   
    </>
    );
}

export default ItemList;