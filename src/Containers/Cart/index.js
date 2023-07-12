import React from "react";
import cartImg from '../../assents/logoCarrinhoHeader.jpg'
import { Container, CartImg, Wrapeer } from "./styles";
import { CartItems, CartResume } from "../../components";
import { Navigate } from "react-router-dom";



export function Cart() {
    const user = localStorage.getItem('burger:userData');
    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <Container>
            <CartImg src={cartImg} height={600} alt="Home-logo" />
            <Wrapeer>
                <CartItems />
                <CartResume />
            </Wrapeer>

        </Container>
    )
}
