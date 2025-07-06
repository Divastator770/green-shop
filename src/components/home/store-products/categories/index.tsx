import type { CategoriesType } from "../../../../@types";
import UseLoader from "../../../../generic/loader";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import Discount from "./discount";
import Price from "./price";
import  type {FC} from "react";

const Categories:FC  = () => {
  const { data, isError, isLoading } = useQueryHandler({
    pathname: "categories",
    url: "flower/category",
  });

  const { categories_loader } = UseLoader();
  const { setParam, getParam } = useSearchParamsHandler();

  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "Default Sorting";
  const type = getParam("type") || "all-plants";

  return (
    <div>
      <div className="bg-[rgb(251,251,251)] p-[10px] mt-[40px]">
        <h2 className="text-[#3D3D3D] font-bold text-[18px] mb-2">Categories</h2>

        {isLoading || isError
          ? categories_loader()
          : data?.map((value: CategoriesType) => (
              <div
                key={value._id}
                onClick={() =>
                  setParam({ category: value.route_path, sort, type })
                }
                className={`flex justify-between font-medium cursor-pointer mb-[15px] text-[#3D3D3D] text-base hover:text-[#46A358] transition-colors ${
                  category === value.route_path ? "text-[#46A358]" : ""
                }`}
              >
                <div>{value.title}</div>
                <div>({Math.abs(value.count)})</div>
              </div>
            ))}

        <Price />
      </div>

      <Discount />
    </div>
  );
};

export default Categories;
