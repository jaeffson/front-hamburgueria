
import React, { useEffect, useState} from "react";

import api from '../../services/api'
import { Container,CategoryH1, ContainerItems,Image, Button } from "./styles";
import Carousel from 'react-elastic-carousel'


export function CategoryCarrossel(){
  

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const {data} = await api.get('categories')
            setCategories(data)
           
        }

        loadCategories()
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
           
            <CategoryH1>CATEGORIAS</CategoryH1>
            <Carousel itemsToShow={5} style={{width: '90%'}} breakPoints={breakPoints}>
            {
              categories && categories.map(category => (
                <ContainerItems key={category.id}>
                    <Image src={category.url} alt="foto da categoria"/>
                    <Button to="/produtos" state={{ categoryId: category.id }}>
                {category.name}
              </Button>
                </ContainerItems>
              )) 
            }
            </Carousel>
        </Container>
    )
}

