import React, { useState } from "react";
import { useCard } from "../../hooks/CardContext";
import { Button } from "../../components";
import { Container, Image, ProductPrice, ProductName, SuccessMessage } from "./styles";

export function CardProducts({ product }) {
  const { putProductIncart } = useCard();
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await putProductIncart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {
      setAddedToCart(true);
    }, 1000);
  };

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatPrice}</ProductPrice>
        <Button onClick={handleClick} disabled={loading}>
          {loading ? "Adicionando..." : "Adicionar ao carrinho"}
        </Button>
        {addedToCart && <SuccessMessage>Adicionado ao carrinho com sucesso!</SuccessMessage>}
      </div>
    </Container>
  );
}
