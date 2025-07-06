import Navbar from '../navbar'
import CarouselPart from './hero/hero_item'
import StoreProducts from './store-products'
import Footer from '../footer'
import TwoFlowers from '../twoflowers'

const HomeComponent = () => {
  return (
    <div>
      <Navbar/>
      <CarouselPart/>
      <StoreProducts/>
      <TwoFlowers/>
      <Footer/>
    </div>
  )
}

export default HomeComponent
