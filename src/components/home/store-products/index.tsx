import Categories from "./categories"
import Products from "./products"

const StoreProducts = () => {
  return (
    <div className="container mt-10 gap-5 flex flex-col max-[768px]:flex-col-reverse max-[768px]:gap-3 md:grid md:grid-cols-[1fr_3fr]">

      <Categories/>
      <Products/>
      
    </div>
  )
}

export default StoreProducts
