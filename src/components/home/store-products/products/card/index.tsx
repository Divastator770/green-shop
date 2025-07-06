import type { FC } from 'react'
import type { ProductsType } from '../../../../../@types'
import { ShoppingCartOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../../redux/cartSlice/cartSlice'
import { toggleLike } from '../../../../../redux/likeSlice/likeSlice'
import type { RootState } from '../../../../../redux/store'

const Card: FC<ProductsType> = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const likedItems = useSelector((state: RootState) => state.like.likes)
  const isLiked = likedItems.some(item => item._id === props._id)

  const style_icons = "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg cursor-pointer text-[20px] items-center justify-center"

  const handleCart = () => {
    dispatch(addToCart(props))
  }

  const handleLike = () => {
    dispatch(toggleLike(props)) 
  }

  const handleViewDetails = () => {
    navigate(`/product/${props._id}`, { state: props })
  }

  return (
    <div className='cursor-pointer border-transparent border-t hover:border-[#46A358] transition-all'>
      <div className='group h-[320px] bg-[#f5f5f5] flex justify-center items-center relative'>
        <img src={props.main_image} className='w-4/5 h-[80%] max-sm:h-[100%]' alt={props.title} />
        <div className='hidden items-center absolute bottom-4 gap-5 group-hover:flex'>
          <div className={style_icons} onClick={handleCart}>
            <ShoppingCartOutlined className="text-[22px]" />
          </div>
          <div className={style_icons} onClick={handleLike}>
            <HeartOutlined className={`text-[22px] ${isLiked ? '!text-red-500' : ''}`} />
          </div>
          <div className={style_icons} onClick={handleViewDetails}>
            <SearchOutlined className="text-[22px]" />
          </div>
        </div>
      </div>
      <h3 className='mt-1'>{props.title}</h3>
      <div className='flex items-center gap-2 mt-1'>
        <h3 className='text-[#46A358] text-[18px] font-bold'>{props.price}$</h3>
        <h3 className='font-[300] text-[#A5A5A5] line-through'>{props.discount_price}$</h3>
      </div>
    </div>
  )
}

export default Card
