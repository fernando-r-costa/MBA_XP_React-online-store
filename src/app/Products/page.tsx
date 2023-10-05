import Link from "next/link";

const getData = async () => {
  let res = await fetch("https://fakestoreapi.com/products?limit=10", {
    next: { revalidate: 1000 },
  });
  return res.json();
};

export default async function Products() {
  // try {
  //   const { data } = await getData();

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

    return (
      <div>
        <ul>
          {/* {data.map((product: any) => {
            return (
              <li key={product.id}>
                <h2>{product.title}</h2>
              </li>
            );
          })} */}
          <Link href="/1">1</Link>
        </ul>
      </div>
    );
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return null;
  // }
}
