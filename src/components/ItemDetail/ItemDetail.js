import {useEffect, useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
function ItemDetail({id,img,titulo,categoria,descripcion,precio,stock}){
    console.log(id);
   
    return (
       
    <>
         <div className="ItemDetail">
         <h1>Detalles</h1>
            <img src={img} className="img_cuadro"></img>
            <h1>{titulo}</h1>
            <p>{categoria}</p>
           <p>{descripcion}</p>
           <p>${precio}</p>
         <ItemCount stock={stock} initial={1}></ItemCount>
        </div>
    </>
    );
}

export default ItemDetail;