import { Select } from "antd"
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams"
import { title_category } from "../../../../../utils"

const ProductsHeader = () => {
  const { setParam, getParam } = useSearchParamsHandler()

  const range_min = getParam("range_min") || 0
  const range_max = getParam("range_max") || 1000
  const category = getParam("category") || "house-plants"
  const type = getParam("type") || "all-plants"
  const sort = getParam("sort") || "Default Sorting"

  const handleChange = (e: string) => {
    setParam({ category, sort: e })
  }

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10 gap-4">
      <div className="hidden md:flex items-center flex-wrap gap-5">
        {title_category.map((value) => (
          <h3
            onClick={() => setParam({ category, sort, type: value.key, range_min, range_max })}
            className={`cursor-pointer transition-colors hover:text-[#46A358] ${
              type === value.key ? "text-[#46A358]" : "text-black"
            }`}
            key={value.key}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <Select
          onChange={handleChange}
          defaultValue={sort}
          className="w-full md:w-[200px]"
          options={[
            { value: "Default Sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The cheapest" },
            { value: "most-expensive", label: "Most expensive" },
          ]}
        />
      </div>
    </div>
  )
}

export default ProductsHeader
