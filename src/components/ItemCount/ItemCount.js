import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

function ItemCount({stock,initial}){
   const cantInitial= parseInt(initial);
   const cantStock = parseInt(stock);
  const [cantidad,setCantidad]=useState(initial);
  
  const agregar= ()=>{
    if(cantidad<cantStock){
        setCantidad(cantidad+1);
    }
    }

    const restar= ()=>{
       if(cantidad>cantInitial){
        setCantidad(cantidad-1);
       }
          
        
        }
   
      
    return (
        <>
       
        <div className='item'>
                <div className='d-flex mb-4 justify-content-center align-items-center'>
                  <button className="btn btn-primary px-3 me-2"
                    onClick={restar}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <div className="form-outline">
                    <input min="0" name="quantity" value={cantidad} type="number" className="form-control text-center" />
                  </div>
                <div>
                  <button className="btn btn-primary px-3 ms-2 h-3"
                  onClick={agregar}>
                     <FontAwesomeIcon icon={faPlus} />
                  </button>
                  </div>
                
                 
                  </div>
                  <button className="btn-primary w-100">Agregar al carrito!</button>
        </div>
    
      </>
    );
  }

  export default ItemCount;