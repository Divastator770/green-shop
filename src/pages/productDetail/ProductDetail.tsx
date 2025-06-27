import { useLocation } from 'react-router-dom'
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import Navbar from '../../components/navbar'
import type { ProductsType } from '../../@types'

const ProductDetail = () => {
  const { state } = useLocation()
  const product = state as ProductsType

  const [count, setCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState('S')

  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img src={product.main_image} alt={product.title} className="w-full max-w-[400px] rounded-xl shadow" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-green-600 text-2xl font-semibold mb-2">${product.price}</p>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-400 flex">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <span className="text-sm text-gray-500">19 Customer Review</span>
          </div>

          <p className="font-semibold">Short Description:</p>
          <p className="text-gray-600 mb-4">{product.short_description}</p>

          <div className="mb-4">
            <p className="font-semibold mb-1">Size:</p>
            <div className="flex gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedSize === size ? 'bg-green-600 text-white' : 'text-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
              className="w-8 h-8 border rounded-full text-lg"
            >
              -
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)} className="w-8 h-8 border rounded-full text-lg">
              +
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">BUY NOW</button>
            <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50">
              ADD TO CART
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              ❤
            </button>
          </div>

          <div className="text-sm text-gray-500 space-y-1">
            <p><span className="font-semibold">SKU:</span> 1995751877966</p>
            <p><span className="font-semibold">Categories:</span> Potter Plants</p>
            <p><span className="font-semibold">Tags:</span> Home, Garden, Plants</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Share this product:</p>
            <div className="flex gap-3 text-gray-600">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaEnvelope />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
