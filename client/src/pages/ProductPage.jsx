import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

const ProductPage = () => {
  const { productId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: productId },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {product.name} <br /> {product.price}
      </h2>

      <div> {product.image} </div>
      <button> Add to Cart </button>
      <div>{product.description}</div>
      {/* load appropriate data for product clicked on */}
    </div>
  );
};

export default ProductPage;
