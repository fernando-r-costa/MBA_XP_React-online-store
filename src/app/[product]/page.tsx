"use client";
import axios from "axios";
import useSWR from "swr";

export default function Product({ params }: { params: { product: number } }) {
  const { data, error, isLoading } = useSWR(
    `https://fakestoreapi.com/products/${params.product}`,
    (url: string) => axios.get(url).then((res) => res.data)
    );
  
    

  if (error) {
    return <div>Um erro foi encontrado</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>
  </div>;
}
