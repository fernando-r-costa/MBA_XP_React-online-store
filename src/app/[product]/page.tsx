"use client";

const getProduct = async (id: any) => {
  let res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 10000 },
  });
  return res.json();
};

export default async function Page({ params }: { params: { product: string } }) {
  const product = await getProduct(params.product)
  console.log("🚀 ~ file: page.tsx:12 ~ Page ~ product:", product)
  return <div>My Post: {params.product}</div>
}