export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <h1 className="font-bold">Details about product {params.productId}</h1>
  );
}
