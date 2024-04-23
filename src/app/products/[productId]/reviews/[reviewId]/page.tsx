export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1 className="font-bold">
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
