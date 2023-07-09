import React, {createContext,useContext, useState,useEffect } from 'react'
import PropTypes from 'prop-types'


const UseContext = createContext({})

export const UserProvider = ({children}) =>{
 const [userData,SetUserData] = useState({})   
 
 const putUserData = async userInfo =>{
    SetUserData(userInfo)
    await localStorage.setItem('burger:userData', JSON.stringify(userInfo))
 }
 const logout = async () =>{
    await localStorage.removeItem('burger:userData')
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
    <UseContext.Provider value={{putUserData,userData,logout}}>
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