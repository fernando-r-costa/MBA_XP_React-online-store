"use client";
import useSWR from "swr";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";

const StyleProductList = styled.ul`
  display: flex;
  margin: 20px;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
`;

const StyleProductCard = styled.li`
  min-width: 150px;
  max-width: 500px;
  padding: 30px;
  color: #312710;
  font-size: 12px;
  background-color: #e6a307;
  text-align: center;
  border-radius: 15px;
`;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Products = () => {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?limit=10",
    fetcher
  );

  if (error) {
    return <div>Um erro foi encontrado</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StyleProductList>
        {data.map((product: any) => (
          <StyleProductCard key={product.id}>
            <Link href={`${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
          </StyleProductCard>
        ))}
      </StyleProductList>
    </div>
  );
};

export default Products;
