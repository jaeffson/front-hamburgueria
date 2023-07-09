/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, ItemContainer, ListLinks } from "./styles";
import listLinks from "./menu-list";
import LoginIcon from '@mui/icons-material/Login';
import { useUser } from "../../hooks/UserContext";
import { useLocation } from "react-router-dom";



export function SiteMenuAdmin() {
    const { logout } = useUser()
    const location = useLocation()


    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={location.pathname === item.link}>
                    <item.icon className='icon' />
                    <ListLinks to={item.link}>
                        {item.label}
                    </ListLinks>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
                <LoginIcon style={{ color: '#ffff' }} />
                <ListLinks to="/login" onClick={logout} >Sair</ListLinks>
            </ItemContainer>
        </Container>
    )
}
