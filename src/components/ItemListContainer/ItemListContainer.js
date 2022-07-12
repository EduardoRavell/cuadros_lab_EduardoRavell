import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'
import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(){

    const [cuadros,setCuadros] = useState([])
    const {idCategoria} = useParams();
    useEffect(()=>{
         setTimeout(() => {
            fetch('../data/data.json', {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              })
              .then((res)=>res.json())
              .then((elementos) => setCuadros(idCategoria ? elementos.filter((e)=>e.categoria==idCategoria):elementos))
              .catch(err=>console.log(err))
           }, 1000);
    },[idCategoria])
    return (
    <>
    <div className="ItemListContainer">
        
        <div className="ItemLista">
            <ItemList listadoCuadros={cuadros} />
        </div>
    </div>
    </>
    );
}

export default ItemListContainer;