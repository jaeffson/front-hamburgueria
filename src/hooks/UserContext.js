import React, {createContext,useContext, useState,useEffect } from 'react'
import PropTypes from 'prop-types'


const UseContext = createContext({})

export const UserProvider = ({children}) =>{
 const [userData,SetUserData] = useState({})   
 
 const putUserData = async userInfo =>{
    SetUserData(userInfo)
    await localStorage.setItem('burger:userData', JSON.stringify(userInfo))
 }
 useEffect(() => {
    const loadUserData = async ()=> {
        const clientInf = await  localStorage.getItem('burger:userData')
    if(clientInf){
        SetUserData(JSON.parse(clientInf))
    }
    }
    loadUserData()
},[])

 
 return (
    <UseContext.Provider value={{putUserData,userData}}>
    {children}
    </UseContext.Provider>

 )

   
}

export const useUser = () =>{
    const context = useContext(UseContext)
    if(!context){
        throw new Error("useUser Erro!")
    }
return context
}



UserProvider.propTypes={
    children:PropTypes.node
}