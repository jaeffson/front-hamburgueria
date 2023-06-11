import axios from 'axios'
 const apiHamburguer = axios.create({
    baseURL:'http://localhost:3001'
})

apiHamburguer.interceptors.request.use(async config =>{
    const userData = await localStorage.getItem('burger:userData')
    const token = userData && JSON.parse(userData).token
    console.log('Token:', token);
    config.headers.Authorization = `Bearer ${token}`
   
    return config

})
export default apiHamburguer