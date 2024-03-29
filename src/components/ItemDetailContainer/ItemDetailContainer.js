import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import {getFirestore,query,where,getDocs,collection} from 'firebase/firestore';
function ItemDetailContainer(){
    const params = useParams();
    const [cuadro,setCuadro] = useState([])
    // const elementoId= useParams();
    const getItem= ()=>{
      const db = getFirestore();
      let cuadroRef;
      if(params){
           cuadroRef = query(collection(db,"productos"), where("id","==",parseInt(params.cuadroId)));
      }
     
      getDocs(cuadroRef).then((snapshot)=>{ 
          setCuadro(snapshot.docs.map((doc)=>doc.data()));
      })
  }
 


//    const getItem = ()=>{
//     fetch(`../data/data.json`, {
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     })
//     .then((res)=>res.json())
//     .then((elementos) =>
//     setCuadro(elementos.filter(e =>e.id==params.cuadroId)))
//     .catch(err=>console.log(err))
//     }
    useEffect(()=>{
      setTimeout(() => {
     getItem();
        }, 500);
 },[])
    return (
    <>
    
    <div className='ItemDetailContainer'>
         { cuadro.map((cuadro,index)=>
       <ItemDetail key={index} id={cuadro.id} img={cuadro.img} titulo={cuadro.titulo} categoria={cuadro.categoria} descripcion={cuadro.descripcion} precio={cuadro.precio} stock={cuadro.stock}/>
       )}
    </div>
    </>
    );
}

export default ItemDetailContainer;