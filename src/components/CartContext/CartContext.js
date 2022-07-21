import {createContext,useState} from 'react';



export const CartContext = createContext({})

const {Provider} = CartContext;




export const CartProvider = ({defaultValue=[],children})=>{
    const [carrito,setCarrito] = useState(defaultValue);

    const limpiarCarrito = ()=>{
        setCarrito([]);
    }

    const agregarCarrito = (item,cantidad)=>{
      if(isInCart(item.id)){
        const newCarrito = [...carrito];
        for (const element of newCarrito){
            if(element.item.id===item.id){
                element.cantidad=element.cantidad+cantidad;
            }
            setCarrito(newCarrito);
        }
      }else{  
        setCarrito(
            [
            ...carrito,
            {
                item:item,
                cantidad: cantidad
            }
        ]
        )
      }
       
    }

    const isInCart = (id)=>{
        return carrito.find((element)=>element.item.id==id);
    }
    const eliminarCarrito = (item)=>{
       if(isInCart(item.id)){
        setCarrito(carrito.filter((e)=>e.id!==item.id));
       }
    }
    const context = {
        carrito,
        limpiarCarrito,
        agregarCarrito,
        eliminarCarrito
    }
    
    
    return <Provider value={context}>
        {children}
    </Provider>
}