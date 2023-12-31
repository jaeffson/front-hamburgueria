import React from "react";
import HomeLogo from '../../assents/header1.jpg'
import { Container, HomeImg } from "./styles";
import { OffersCarrossel, CategoryCarrossel } from "../../components";


export function Home() {
    return (
        <Container>
          <HomeImg src={HomeLogo}  alt="Home-logo" />
            <CategoryCarrossel />
            <OffersCarrossel />
        </Container>
    )
}
