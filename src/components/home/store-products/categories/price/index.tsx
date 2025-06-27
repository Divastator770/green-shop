import { Button, Slider } from "antd"
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";

const Price = () => {
    const {getParam,setParam}=useSearchParamsHandler()
    const category=getParam("category")||"house-plants"
    const type=getParam("type")||"all-plants"
    const sort=getParam("sort")||"Default Sorting"
    const range_min=getParam( "range_min")||0
    const range_max=getParam( "range_max")||1000
    const [price,setPrice]=useState<[number,number]>([Number(range_min),Number(range_max)])

        const setPriceFilter=()=>{
setParam({
    category,
    sort,
    type,
    range_min:price[0],
    range_max:price[1] 
})
        }
    // const onChange=(value:number|number[])=>{
    //     console.log("onchange",value);
        
    // }
  return (
    <div className='mt-5'>
          <Slider onChange={(e)=>setPrice(e as [number,number])} range step={1} max={1000} min={0} defaultValue={price} />
     <h2>Price: <span className="text-[#46A358] text-[15px] font-bold">{`${price[0]}$-  ${price[1]} $`}</span></h2>
     <Button onClick={setPriceFilter}  className="!bg-[#46A358] !text-white !w-[160px] mt-5">Filter</Button>
    </div>
  )
}

export default Price
