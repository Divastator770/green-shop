import { useQueryHandler } from "../../../../../hooks/useQuery"

const Discount = () => {
  const {
    data,
    isLoading,
    error
  } = useQueryHandler({
    pathname: "discount-flower",
    url: "features/discount",
  })

  if (isLoading) return <p className="text-center py-10">Loading...</p>
  if (error) return <p className="text-center py-10 text-red-500">Xatolik yuz berdi</p>

  return (
    <div className="w-full bg-[#eef7f1] text-center px-[10px] py-[20px]">
      <h2 className="text-[30px] text-[#46A358] font-normal leading-[40px]">
        {data?.title}
      </h2>
      <h3 className="text-[#3D3D3D] text-[20px] font-bold pt-[16px]">
        UP TO {data?.discount_up_to}50% OFF
      </h3>
      <img className="w-full" src={data?.poster_image_url} alt={data?.title || "Discount poster"} />
    </div>
  )
}

export default Discount
