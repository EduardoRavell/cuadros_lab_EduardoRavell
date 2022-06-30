import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'
import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props){

    const [cuadros,setCuadros] = useState([])
   
    useEffect(()=>{
         setTimeout(() => {
            fetch('../data/data.json', {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              })
              .then((res)=>res.json())
              .then((elementos) => setCuadros(elementos))
              .catch(err=>console.log(err))
           }, 1500);
    },[])
    return (
    <>
    <div className="ItemListContainer">
        <h1>{props.titulo}</h1>
        
        <div className="ItemLista">
            <ItemList listadoCuadros={cuadros}/>
        {/* <ItemCount stock="5" initial="1"/>
        <ItemCount stock="10" initial="1"/>
        <ItemCount stock="15" initial="1"/> */}
       
        </div>
    </div>
    </>
    );
}

export default ItemListContainer;