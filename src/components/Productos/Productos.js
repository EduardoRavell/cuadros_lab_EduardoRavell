import './Productos.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {Link} from 'react-router-dom';
function Productos(){
    const categorias = [
    {id:'1',direccion:'/',text:'Todos'},
    {id:'2',direccion:'/Caricaturas',text:'Caricaturas'},
    {id:'3',direccion:'/Iconicos',text:'Iconicos'},
    {id:'4',direccion:'/Paisajes',text:'Paisajes'},
    {id:'5',direccion:'/Peliculas',text:'Peliculas'},
    ]
    return (
    <>
    <div className="body">
        <h1>Bienvenidos a CuadrosLab</h1>
    <h5>Categorias</h5>
    <div className="categorias">
      
       {
        categorias.map((cat)=>(
        
            <Link to={cat.direccion} className="link" key={cat.id}>
                {cat.text}
            </Link> 
           
        ))
       }
       </div>
    <ItemListContainer/>
    {/* <ItemDetailContainer/> */}
        
    </div>
    </>
    );
}

export default Productos;