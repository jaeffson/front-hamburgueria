/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CarVazio from '../../assents/cesta-vazia.png'
import formatCurrency from "../FormatCurrency";
import { Container, Header, Body, EmptyCart } from "./styles";
import { useCard } from "../../hooks/CardContext";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';




export function CartItems() {
    const { cardProducts, increaseProducts, decreaseProducts, deleteProduct } = useCard()

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>
            {cardProducts && cardProducts.length > 0 ?
                cardProducts.map((product) => (
                    <Body key={product.id}>
                        <img src={product.url}></img>
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <RemoveCircleOutlineSharpIcon onClick={() =>
                                 decreaseProducts(product.id)}></RemoveCircleOutlineSharpIcon>
                            <p>{product.quantity}</p>
                            <AddCircleOutlineSharpIcon onClick={() =>
                                increaseProducts(product.id)}></AddCircleOutlineSharpIcon>

                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                        <DeleteSharpIcon onClick={() => deleteProduct(product.id)}>
                        </DeleteSharpIcon>

                    </Body>
                ))
                :
                (
                    <EmptyCart>
                        <img style={{ width: " 200px" }} src={CarVazio} />
                    </EmptyCart>
                )
            }
        </Container>
    )
}
