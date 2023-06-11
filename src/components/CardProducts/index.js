import React from "react";
import Button from '../button/'
import {Container,Image,ProductPrice,ProductName} from './styles'

function CardProducts({product}){
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto"/>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <Button>Adicionar</Button>
        </Container>
        
        
    )
}
export default CardProducts