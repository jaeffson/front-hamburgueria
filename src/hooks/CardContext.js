import React, {createContext,useContext, useState,useEffect } from 'react'
import PropTypes from 'prop-types'


const CardContext = createContext({})

export const CardProvider = ({children}) =>{
 const [cardProducts,setCardProducts] = useState([])   

 //atualizar localStorage 
 const updateLocalStorage = async products =>{
    await localStorage.setItem('burger:cartInf', JSON.stringify(products))
 }
 
 const putProductIncart = async product =>{
    const cartIndex = cardProducts.findIndex(prd => prd.id === product.id)

    let newCartProduct = []
    if(cartIndex >= 0){
     newCartProduct = cardProducts
      
        newCartProduct[cartIndex].quantity = 
        newCartProduct[cartIndex].quantity + 1

        setCardProducts(newCartProduct)
    }else{
        product.quantity = 1
        newCartProduct = [...cardProducts, product]
        setCardProducts(newCartProduct)
    }
    await updateLocalStorage(newCartProduct)
}
//deletar Produto
 const deleteProduct = async productId =>{
    const newCart = cardProducts.filter(product => product.id !== productId)
    setCardProducts(newCart)
    await updateLocalStorage(newCart)
 }

//Logica de adicionar quantidade ao produto

const increaseProducts = async productId =>{
   const newCart = cardProducts.map( product =>{
        return product.id === productId ? {...product,quantity: 
            product.quantity + 1} : product
    })
    setCardProducts(newCart)
    await updateLocalStorage(newCart)
}
//Logica de diminuir a quantidade do produto
const decreaseProducts = async productId =>{
    const cartIndex = cardProducts.findIndex(pd => pd.id === productId)
    if(cardProducts[cartIndex].quantity > 1){

    const newCart = cardProducts.map( product =>{
         return product.id === productId ? {...product,quantity:
             product.quantity - 1} : product
     })
    
     setCardProducts(newCart)
     await updateLocalStorage(newCart)
 }
}
 


 useEffect(() => {
    const loadUserData = async ()=> {
        const clientCardData = await  localStorage.getItem('burger:cartInf')
    if(clientCardData){
        setCardProducts(JSON.parse(clientCardData))
    }
    }
    loadUserData()
},[])

 
 return (
    <CardContext.Provider value={{putProductIncart,cardProducts,increaseProducts,decreaseProducts,deleteProduct}}>
    {children}
    </CardContext.Provider>

 )

   
}

export const useCard = () =>{
    const context = useContext(CardContext)
    if(!context){
        throw new Error("useCard Erro!")
    }
return context
}



CardProvider.propTypes={
    children:PropTypes.node
}