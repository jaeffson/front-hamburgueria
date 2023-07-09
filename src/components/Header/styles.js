
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Container = styled.div`
position: fixed;
height:70px;
background: #FFFFFF;
box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
width: 100vw;
z-index: 999;
`


export const ContainerLeft = styled.div`
display: flex;
gap: 30px;

a{
    text-decoration: none;
    border: none;
 
  
}




`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap:20px;

`
export const ContainerText = styled.div`

`
export const PageLink = styled.div`
font-size: 16px;
line-height: 19px;
cursor: pointer;

a{
    color: ${props => (props.isActive ? '#d74141' : '#555555')};
    font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
    margin-left: ${props => (props.isActive ? '10px' : '0')};
    cursor: pointer;

        .spin {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
    }

img{
   filter: contrast(175%) brightness(3%);
   


    &:hover{

filter: grayscale(0);

}
}


`
export const Line = styled.div`

height: 40px;
border-right: 1px solid  #e5e5e5;
`
export const PageLinkExit = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 16px;
color:
#d74141;
cursor: pointer;
&:hover{
    opacity: 0.6;
}
`
export const QuantityCard = styled.p`
    position: absolute;
    margin-bottom: 11px;
    border-radius: 100%;
    background: #d74141;
    color: white;
    text-align: center;
    width: 12px;
    height: 12p;
    margin-left: 17px;
    font-size: 10px;

`
export const CarStylesIcon = styled(ShoppingCartIcon)`
background:none;
color: #555555;
align-items: center;
 &:hover{
  color: #d74141;
 }

`