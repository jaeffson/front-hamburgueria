import React from "react";

 
import { Orders } from "./Orders";
import { SiteMenuAdmin } from "../../components";
import ListProducts from "./List-products";

import {Container,ContainerItems} from './styles'
import paths from "../../constants.js/path";
import { useLocation } from "react-router-dom";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";

export function Admin(){
 const location = useLocation()

    return(
        <Container>
           <SiteMenuAdmin></SiteMenuAdmin> 
           <ContainerItems>
            {location.pathname === paths.Order && <Orders/>}
            {location.pathname === paths.ListProducts && <ListProducts/>}
            {location.pathname === paths.NewProduct && <NewProduct/>}
            {location.pathname === paths.EditProduct && <EditProduct/>}

      </ContainerItems>
        </Container>

    )
}
