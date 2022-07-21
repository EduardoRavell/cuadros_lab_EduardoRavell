import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'
import './ItemListContainer.css';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

import {getFirestore,query,where,getDocs,collection} from 'firebase/firestore';
function ItemListContainer(){

    const [cuadros,setCuadros] = useState([]);
    const [newError,setNewError]=useState(null);
    const {idCategoria} = useParams();
    // useEffect(()=>{
    //      setTimeout(() => {
    //         fetch('../data/data.json', {
    //             headers : { 
    //               'Content-Type': 'application/json',
    //               'Accept': 'application/json'
    //              }
          
    //           })
    //           .then((res)=>{if(!res.ok){
    //             throw new Error("Ocurrio un error!")
    //           }else{
    //             return res.json();
    //           }})
    //           .catch(error=>setNewError(error.message))
    //           .then((elementos) => setCuadros(idCategoria ? elementos.filter((e)=>e.categoria==idCategoria):elementos))
              
    //        }, 1000);
    // },[idCategoria])

    useEffect(()=>{
        const db = getFirestore();
        let cuadroRef;
        if(idCategoria){
             cuadroRef = query(collection(db,"productos"), where("categoria","==",idCategoria));
        }else{
             cuadroRef = query(collection(db,"productos"));
        }
        
        getDocs(cuadroRef).then((snapshot)=>{ 
            setCuadros(snapshot.docs.map((doc)=>doc.data()));
        })
    },[idCategoria])
  
    return (
    <>
    <div className="ItemListContainer">
        
        <div className="ItemLista">
            {newError && <p>{newError}</p>}
        
            <ItemList listadoCuadros={cuadros} />
        </div>
    </div>
    </>
    );
}

export default ItemListContainer;