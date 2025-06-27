import type { DataType, DiscountFlowerType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/useQuery"

const Discount = () => {
    const {data}:DataType<DiscountFlowerType>=useQueryHandler({
        pathname:"discount-flower",
        url:"features/discount",
    })
    console.log(data);
    
  return (
    <div className="w-full bg-[#eef7f1] text-center px-[10px] py-[20px]">
      <h2 className="text-[30px] text-[#46A358] font-normal leading-[40px]">{data?.title}</h2>
      <h3 className="text-[#3D3D3D] text-[20px] font-bold pt-[16px]">UP TO {data?.discount_up_to}% OFF</h3>
      <img className="w-full" src={data?.poster_image_url} alt="" />
    </div>
  )
}

export default Discount
