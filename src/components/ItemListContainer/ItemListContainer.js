import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
function ItemListContainer(props){
    return (
    <>
    <div className="ItemListContainer">
        <h1>{props.titulo}</h1>

        <div className="ItemList">
        <ItemCount stock="5" initial="1"/>
        <ItemCount stock="10" initial="1"/>
        <ItemCount stock="15" initial="1"/>
        </div>
    </div>
    </>
    );
}

export default ItemListContainer;