import React from "react";
import HomeLogo from '../../assents/home-Logo.svg'
import { Container, HomeImg } from "./styles";
import Category from "../../components/CategoryCarrossel";
import OfferCarrossel from "../../components/OfferCarrosell";


function Home(){
    return(
        <Container>
            <HomeImg src={HomeLogo} alt="Home-logo"/>
       <Category/>
       <OfferCarrossel/>
        </Container>
    )
}
export default Home