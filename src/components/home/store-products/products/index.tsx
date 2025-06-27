import type { DataType, ProductsType } from "../../../../@types"
import UseLoader from "../../../../generic/loader"
import { useQueryHandler } from "../../../../hooks/useQuery"
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams"
import Card from "./card"
import ProductsHeader from "./products-header"

const Products = () => {
  const { getParam } = useSearchParamsHandler()

  const range_min = getParam("range_min") || 0
  const range_max = getParam("range_max") || 1000
  const category = getParam("category") || "house-plants"
  const sort = getParam("sort") || "Default Sorting"
  const type = getParam("type") || "all-plants"

  const { data, isLoading, isError }: DataType<ProductsType[]> = useQueryHandler({
    pathname: `products-${category}-${sort}-${type}-min-${range_min}-max-${range_max}`,
    url: `flower/category/${category}`,
    params: {
      type,
      sort,
      range_min,
      range_max
    }
  })

  const { products_loader } = UseLoader()

  return (
    <div>
      <ProductsHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {isLoading || isError
          ? products_loader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  )
}

export default Products
