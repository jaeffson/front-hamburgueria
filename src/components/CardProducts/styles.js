import styled,{ keyframes } from 'styled-components'

export const Container = styled.div`

background: #FFFFFF;
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
display: flex;
gap: 12px;
padding: 16px;
width: 361px;
scroll-behavior: smooth;
margin-top:25px;
div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


`
export const Image = styled.img`
width:150px;
border-radius:10px
`
export const ProductName = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;

`
export const ProductPrice = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #000000;
margin-top: 30px;

`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards, ${fadeOut} 0.3s 1s forwards;
  /* Estilos adicionais para ajustar o posicionamento e espaçamento */

`;