import { createContext, useState } from 'react';

export const CartContext = createContext({})

export const CartProvider =({children}) => {

    const [contador, setContador] = useState(0);

    const helloWorld = "Ola mundo"

    return <CartContext.Provider value={{ contador, setContador}}>{children}</CartContext.Provider>
}