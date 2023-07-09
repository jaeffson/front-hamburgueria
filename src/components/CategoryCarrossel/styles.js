import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
background:#e5e5e591;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
gap:35px;
padding: 35px 0;
scroll-behavior: smooth;
.rec.rec-arrow{
    background:  #d74141;
    color:#ffffff;
}
.rec.rec-arrow:hover{
    border: 2px solid  #f32121;
    background-color:#e5e5e591 ;
    color:#f32121;

}
.rec.rec-arrow:disabled{
    border:none;
    background-color:#fbe8e8;
    color:#ffffff;
    outline: none;
    
}
.rec.rec-dot_active{
    box-sizing: border-box;
    padding: 0;
    transition: all 250ms ease;
    border: none;
    margin: 5px;
    background-color: #F44336;
    font-size: 1.3em;
    content: "";
    height: 10px;
    width: 10px;
    box-shadow: 0 0 1px 3px  #F44336;
    border-radius: 50%;
    outline: none;
}
.rec.rec-dot:hover{
    background-color: #F44336;
    border: none;
    color:#F44336
}



`

export const CategoryH1 = styled.h1`
color: #d74141;
font-size:70px;
`

export const Button = styled(Link)`
margin-top: 16px;
background: -webkit-linear-gradient(left, #d74141, #f32121);
border-radius: 8px;
border: none;
height: 50px;
color: #ffffff;
font-weight: 400;
text-align: center;
font-size: 18px;
cursor: pointer;
&:active {
    transform: scale(0.98);
   
}

&:focus {
    outline: none;
}

&.ghost {
    background-color: transparent;
    border-color: #ffffff;
}
&:hover{
   background:#d74141;
}
text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

`
export const Image = styled.img`
width: 200px;

height: 200px;
border-radius:10px;
`