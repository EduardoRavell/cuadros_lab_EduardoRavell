import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
function ItemDetailContainer(){
    const [cuadro,setCuadro] = useState([])
    // const elementoId= useParams();
    useEffect(()=>{
         setTimeout(() => {
        getItem();
           }, 1500);
    },[])
  
   const getItem = ()=>{
    fetch(`../data/data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then((res)=>res.json())
    .then((elementos) => setCuadro(elementos.filter(e => e.id===3)))
    .catch(err=>console.log(err))
    }
    return (
    <>
         <div className="ItemDetailContainer">
         { cuadro.map((cuadro)=>
       <ItemDetail id={cuadro.id} img={cuadro.img} titulo={cuadro.titulo} categoria={cuadro.categoria} descripcion={cuadro.descripcion} precio={cuadro.precio}/>
       )}
      
        </div>
    </>
    );
}

export default ItemDetailContainer;