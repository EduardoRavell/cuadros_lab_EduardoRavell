import './ItemList.css';
import React from 'react';
import Item from '../Item/Item';
function ItemList({listadoCuadros}){
    return (
    <>
    <div className="contenedorCuadros">

       { listadoCuadros.map((cuadro)=>
       <Item titulo={cuadro.titulo} categoria={cuadro.categoria} descripcion={cuadro.descripcion} precio={cuadro.precio}/>
       )}
       
    </div>
    </>
    );
}

export default ItemList;