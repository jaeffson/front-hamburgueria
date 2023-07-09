import { styled } from "styled-components";
import ReactSelect from 'react-select'

export const Container = styled.div`

background-color: #efefef;


`
export const ProductImg = styled.img`
width: 60px;
border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
width: 200px;
.css-13cymwt-control{
    cursor: pointer;
   border-radius: 5px;
   background: none;
}
`
export const LinkMenu = styled.a`
color: #323D5D;
cursor: pointer;
font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
border-bottom: ${props => (props.isActiveStatus ? '2px solid' : 'none')};
padding-bottom:5px;
`
export const Menu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin:20px 0;

`
