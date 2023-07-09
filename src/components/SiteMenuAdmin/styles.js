import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
background: #3c3c3c;
box-shadow: 0px 0px 14px rgba(0,0,0,0.15);
width: 300px;
top: 0;
left:0;
position: fixed;
height: 100vh;
hr{
   margin: 50px 15px;
}

`
export const ListLinks = styled(Link)`
font-style:normal;
font-weight: normal;
font-size:16px;
color:#ffff;
line-height: 20px;
text-decoration: none;
margin-left: 8px;


`
export const ItemContainer = styled.div`
height: 60px;
display: flex;
align-items: center;
background:${props => (props.isActive ? '#565656' : 'none')};
border-radius: 2px;
margin: 8px;
padding-left: 10px;

.icon{
   color:#ffff
   
}
`
