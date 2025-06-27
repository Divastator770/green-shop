import Navbar from '../navbar'
import CarouselPart from './hero/hero_item'
import StoreProducts from './store-products'
import Footer from '../footer'

const HomeComponent = () => {
  return (
    <div>
      <Navbar/>
      <CarouselPart/>
      <StoreProducts/>
      <Footer/>
    </div>
  )
}

export default HomeComponent
