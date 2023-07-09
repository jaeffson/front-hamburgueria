
import styled from 'styled-components'

export const Container = styled.div`
background: #E5E5E5;
min-height:100vw;
scroll-behavior: smooth;

`

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
color: ${props => (props.isactivecategory === "true" ? '#f75959' : '#555555')};
border-bottom: ${props => (props.isactivecategory === "true" ? '3px solid  #d74141' : 'none')};
padding-bottom:5px;
`
export const CategoriesMenu = styled.div`
display:flex;
justify-content:center;
gap:50px;
margin-top:20px;


`
export const ProductosContainer = styled.div` 
display:grid;
grid-template-columns: repeat(4,1fr);
gap: 20px;
padding: 40px;
justify-items: center;
margin-top: 20px;


`