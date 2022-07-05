import {useEffect, useState} from 'react';
import './ItemDetail.css';

function ItemDetail({id,img,titulo,categoria,descripcion,precio}){
    console.log(id);
   
    return (
       
    <>
         <div className="ItemDetail">
            <img src={img} className="img_cuadro"></img>
            <h1>{titulo}</h1>
            <p>{categoria}</p>
           <p>{descripcion}</p>
           <p>${precio}</p>
        
           
        </div>
    </>
    );
}

export default ItemDetail;