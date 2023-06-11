import React, { useEffect } from "react";
import ProductLogo from '../../assents/productos-logo.svg'
import { Container, ProductImg, CategoryButton, CategoriesMenu,ProductosContainer } from "./styles";
import { useState } from "react";
import api from '../../services/api'
import CardProducts from "../../components/CardProducts";




function Product() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategories, setActvivCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            const newCategoria = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategoria)

        }
        async function loadProducts() {
            const { data } = await api.get('products')
          

            setProducts(data)
            console.log(data)
        }

        loadProducts()
        loadCategories()
    }, [])
    return (
        <Container>
            <ProductImg src={ProductLogo} width={70} alt="Home-logo" />
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton type="button" 
                            key={category.id}
                            isactivecategory={activeCategories === category.id ? "true" : "false"} 
                            onClick={()=>{
                            setActvivCategories(category.id)
                            }}>
                            {category.name}
                        </CategoryButton>
                    ))}

            </CategoriesMenu>
             <ProductosContainer>
                {products && products.map(product=>(
                    
                    <CardProducts key={product.id} product={product}/>
                ))}
                  
   </ProductosContainer>               
        </Container>
    )
}
export default Product