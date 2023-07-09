import React, { useEffect, useState } from "react";
import ProductLogo from '../../assents/background-deliciousburguer.jpg'
import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductosContainer } from "./styles";
import api from '../../services/api'
import { CardProducts } from "../../components";
import formatCurrency from "../../components/FormatCurrency";
import { Navigate, useLocation } from "react-router-dom";




export function Product() {
 
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);


  const { state } = useLocation()

  useEffect(() => {
    if (state?.categoryId) {
      setActiveCategory(state.categoryId)
    }
  }, [state?.categoryId])

  useEffect(() => {
   
    async function loadCategories() {
      const { data } = await api.get('categories');
      const newCategories = [{ id: 0, name: 'Todas' }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products');
      const newProducts = allProducts.map(product => ({
        ...product,
        formatPrice: formatCurrency(product.price)
      }));
      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(product => product.category_id === activeCategory);
      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

  useEffect(() => {

    setActiveCategory(0); // Reset active category to "Todas" when reloading
    async function reloadProducts() {
      const { data: allProducts } = await api.get('products');
      const newProducts = allProducts.map(product => ({
        ...product,
        formatPrice: formatCurrency(product.price)
      }));
      setProducts(newProducts);
    }
    reloadProducts();
  }, []);
  const user = localStorage.getItem('burger:userData');
  if(!user){
    return <Navigate to="/login"  />;
  }

  return (
    <Container>
      <ProductImg src={ProductLogo} width={70} alt="Home-logo" />
      <CategoriesMenu>
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            type="button"
            isactivecategory={activeCategory === category.id ? "true" : "false"}
            onClick={() => setActiveCategory(category.id)}
          >

            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>
      <ProductosContainer>
        {filteredProducts.map(product => (
          <CardProducts key={product.id} product={product} />
        ))}
      </ProductosContainer>
    </Container>
  );
}
