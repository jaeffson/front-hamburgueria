import styled from 'styled-components'


export const Container = styled.div`
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
gap:35px;
padding: 35px 0;
.rec.rec-arrow{
    background: #9758a6;
}

`

export const CategoryImg = styled.img`



`
export const Button = styled.button`
margin-top: 16px;
background: #9758a6;
border-radius: 8px;
border: none;
height: 50px;
color: #ffffff;
font-weight: 400;
text-align: center;
font-size: 18px;
cursor: pointer;
&:hover{
    opacity: 0.6;
   
}
&:active{
    opacity: 0.7;
}

`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

p{
    color: #424242;
    font-size: 17px;
    line-height: 120%;
}
.name-product{
    font-size: 20px;
    font-weight: bold;
    color:#9758a6;
}


`
export const Image = styled.img`
width: 200px;
border: 1px solid black;
height: 200px;
border-radius:10px;
margin-bottom:16px;

`