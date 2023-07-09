import styled from 'styled-components'

export const Container = styled.div`
background: #ffff;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 10px;
width: 800px;

`

export const CartImg = styled.img`


`
export const Header = styled.header`
display: grid;
grid-template-columns: repeat(6,1fr);
padding: 10px;
border-bottom: 2px solid #B5B5B5;
gap: 15px;
p{
    color: #B5B5B5;
    font-size:16px;
}
`
export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
grid-gap: 10px 15px;
padding-top: 5px;

 img{
    border-radius: 20px;
    width: 120px;
    padding: 10px;

 }
 .MuiSvgIcon-root{
   color: red;
 cursor: pointer;
 &:active{
  
  transform: scale(0.95);
}

}


 .quantity-container{
   display: flex;
 gap: 20px;

 }
  button{
background: transparent;
border:none;
font-size:24px; 
height:10px;
cursor: pointer;
&:active{
  
    transform: scale(0.95);
}

}
p{
   margin-top: 5px;
}
 
`

export const EmptyCart = styled.p`
text-align: center;
margin-top: 20px;
`


export const ButtonDeleteProduct = styled.button`
display: grid;
width: 20px;

img{
   display: flex;
  
   width: 60px;

}
`