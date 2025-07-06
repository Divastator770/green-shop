import { useLocation } from "react-router-dom"
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar"
import type { ProductsType } from "../../@types"
import { Skeleton } from "antd"

const ProductDetail = () => {
  const { state } = useLocation()
  const product = state as ProductsType

  const [count, setCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState("S")
  const [mainImage, setMainImage] = useState(product?.main_image)
  const [isLoading, setIsLoading] = useState(true)

  const sizes = ["S", "M", "L", "XL"]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* LEFT: Images */}
        <div className="flex flex-col items-center">
          {isLoading ? (
            <Skeleton.Image style={{ width: 300, height: 300 }} active />
          ) : (
            <>
              <img
                src={mainImage}
                alt={product.title}
                className="w-full max-w-[400px] rounded-xl shadow object-contain"
              />

              <div className="flex gap-2 flex-wrap justify-center mt-4">
                {[product.main_image, ...(product.detailed_images || [])].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setMainImage(img)}
                    className={`w-16 h-16 object-cover border rounded cursor-pointer transition-transform duration-200 ${
                      mainImage === img ? "ring-2 ring-green-500 scale-105" : ""
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div>
          {isLoading ? (
            <Skeleton active paragraph={{ rows: 8 }} />
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-green-600 text-2xl font-semibold mb-2">${product.price}</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-400 flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <span className="text-sm text-gray-500">10 customer reviews</span>
              </div>

              <p className="font-semibold">Short description:</p>
              <p className="text-gray-600 mb-4">{product.short_description}</p>

              <div className="mb-4">
                <p className="font-semibold mb-1">Size:</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-8 h-8 rounded-full border ${
                        selectedSize === size
                          ? "bg-green-600 text-white"
                          : "text-gray-700 hover:border-green-400"
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
                <button
                  onClick={() => setCount(count + 1)}
                  className="w-8 h-8 border rounded-full text-lg"
                >
                  +
                </button>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                  BUY NOW
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50">
                  ADD TO CART
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  ❤
                </button>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <span className="font-semibold">SKU:</span> 1995751877966
                </p>
                <p>
                  <span className="font-semibold">Categories:</span> Potter Plants
                </p>
                <p>
                  <span className="font-semibold">Tags:</span> Home, Garden, Plants
                </p>
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
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductDetail
