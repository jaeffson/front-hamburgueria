import React, { useEffect, useState } from "react";
import OfferImg from '../../assents/OFERTAS.png'
import { Container, CategoryImg, ContainerItems,Image, Button } from "./styles";
import Carousel from 'react-elastic-carousel'
import api from '../../services/api'
import formatCurrency from "../FormatCurrency";


function OffersCarrossel(){
    const [offers, setoffer] = useState([])

    useEffect(() => {
        async function loadoffer() {
            const {data} = await api.get('products')
           
           const onlyOffers = data.filter(product => product.offer).map(product =>{
            return{...product,formatPrice:formatCurrency(product.price)}
           })
            setoffer(onlyOffers)
           console.log(onlyOffers)
        }

        loadoffer()
    }, [])
    const breakPoints = [
        {width:1,itemsToShow:1},
        {width:400,itemsToShow:2},
        {width:600,itemsToShow:3},
        {width:900,itemsToShow:4},
        {width:1300,itemsToShow:5},
    ]

    return (
        <Container>
            <CategoryImg src={OfferImg} alt="offer img"/>
            <Carousel itemsToShow={5} style={{width: '90%'}} breakPoints={breakPoints}>
            {
              offers && offers.map(product => (
                <ContainerItems key={product.id}>
                    <Image src={product.url} alt="foto da ofertas"/>
                    <p className="name-product">{product.name}</p>
                    <p>{product.formatPrice}</p>
                    <Button>Peça agora</Button>
                </ContainerItems>
              )) 
            }
            </Carousel>
        </Container>
    )
}

export default OffersCarrossel;
