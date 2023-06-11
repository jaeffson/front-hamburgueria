
import styled from 'styled-components'

export const Container = styled.div``

export const ProductImg = styled.img`

width: 100%;
`
export const CategoryButton = styled.button`
font-weight: 400;
font-size: 17px;
line-height: 20px;
background: none;
cursor: pointer;
text-align: center;
border:none;
color: ${props => (props.isactivecategory === "true" ? '#9758A6' : '#9A9A9D')};
  border-bottom: ${props => (props.isactivecategory === "true" ? '3px solid #9758A6' : 'none')};
padding-bottom:5px;
`
export const CategoriesMenu = styled.div`
display:flex;
justify-content:center;
gap:50px;
margin-top:20px;

`
export const ProductosContainer = styled.div` 



`