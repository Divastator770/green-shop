import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../redux/store'
import { removeFromCart } from '../../redux/cartSlice/cartSlice'
import { useEffect, useState } from 'react'
import type { ProductsType } from '../../@types'
import { Trash } from 'lucide-react'

interface CartItem extends ProductsType {
  quantity: number
}

const CartPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.cart)
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartWithQty") || "[]")
    if (storedCart.length) {
      setCart(storedCart)
    } else {
      const initialCart = cartItems.map(item => ({ ...item, quantity: 1 }))
      setCart(initialCart)
      localStorage.setItem("cartWithQty", JSON.stringify(initialCart))
    }
  }, [cartItems])

  const updateQty = (id: string, type: 'inc' | 'dec') => {
    const updated = cart.map(item => {
      if (item._id === id) {
        let quantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1
        if (quantity < 1) quantity = 1
        return { ...item, quantity }
      }
      return item
    })
    setCart(updated)
    localStorage.setItem("cartWithQty", JSON.stringify(updated))
  }

  const handleRemove = (id: string) => {
    const updated = cart.filter(item => item._id !== id)
    setCart(updated)
    dispatch(removeFromCart(id))
    localStorage.setItem("cartWithQty", JSON.stringify(updated))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 16
  const total = subtotal + shipping

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.main_image}
                    className="w-[80px] h-[80px] object-contain"
                    alt={item.title}
                  />
                  <div>
                    <p className="text-gray-400 text-sm">
                      SKU: {item._id.slice(0, 12)}
                    </p>
                    <p className="text-[16px] font-medium">{item.title}</p>
                  </div>
                </div>

                <p className="text-lg font-semibold">${item.price}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item._id, 'dec')}
                    className="text-xl px-2 rounded bg-gray-200"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item._id, 'inc')}
                    className="text-xl px-2 rounded bg-gray-200"
                  >
                    +
                  </button>
                </div>

                <p className="text-green-600 font-semibold whitespace-nowrap">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button onClick={() => handleRemove(item._id)} className="text-red-500">
                  <Trash size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-4 border p-4 rounded space-y-4 h-fit">
          <h3 className="text-xl font-semibold">Cart Totals</h3>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between font-bold text-green-700 border-t pt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
