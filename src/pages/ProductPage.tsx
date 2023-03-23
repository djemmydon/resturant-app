
import Products from "../components/Products/Products";
import { productsApi } from "../redux/apiSlice";
import { FetchType } from "../typing";

function ProductPage() {
  const { data: product, isLoading, error: isError } = productsApi.useGetAllProductsQuery<FetchType>();

  return (
    <div className="h-full">
      <Products fetch={product} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default ProductPage;
