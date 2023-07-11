import axios from 'axios'
 const apiHamburguer = axios.create({
    baseURL:'https://projetoapihamburgueria-production.up.railway.app'
})

apiHamburguer.interceptors.request.use(async config =>{
    const userData = await localStorage.getItem('burger:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
   
    return config

})
export default apiHamburguer
