/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AccountImg from '../../assents/imageAccount.png'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/UserContext";


import { Container, PageLink, ContainerLeft, ContainerRight, ContainerText, Line, PageLinkExit,QuantityCard,CarStylesIcon } from "./styles";
import { useCard } from "../../hooks/CardContext";


export function Header() {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const { cardProducts } = useCard()
    
    const { logout, userData } = useUser()
   
 
   
    const logoutUser = () => {
        logout()
        navigate('/login')
    }
   
    return (
        <Container>
            <ContainerLeft>
                <PageLink isActive={location.pathname === '/'}> <Link to="/">Home</Link> </PageLink>
                <PageLink isActive={location.pathname.includes('produtos')} > <Link to="/produtos">Ver Produtos</Link> </PageLink>
            </ContainerLeft>

            <ContainerRight>
            {cardProducts.length > 0 && (
                <div>
                    <QuantityCard>{cardProducts.length}</QuantityCard>
                </div>
            )}
                   
             <PageLink ><Link  to='/carrinho'><CarStylesIcon/></Link> </PageLink>
                
           
                
                <Line></Line>
                <PageLink> <img  className="hue-rotate" src={AccountImg} alt="imagem-conta" /> </PageLink>
                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser} >Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>



        </Container>
    )
}
