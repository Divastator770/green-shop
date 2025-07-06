import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import { removeFromCart } from '../../redux/cartSlice/cartSlice';
import { useEffect, useState } from 'react';
import type { ProductsType } from '../../@types';
import { Trash, X } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

interface CartItem extends ProductsType {
  quantity: number;
}

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    payment: '',
    comment: '',
  });

  const shipping = 16;
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedSubtotal = subtotal * (1 - discount / 100);
  const total = discountedSubtotal + shipping;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartWithQty") || "[]");
    if (storedCart.length) {
      setCart(storedCart);
    } else {
      const initialCart = cartItems.map(item => ({ ...item, quantity: 1 }));
      setCart(initialCart);
      localStorage.setItem("cartWithQty", JSON.stringify(initialCart));
    }
  }, [cartItems]);

  const updateQty = (id: string, type: 'inc' | 'dec') => {
    const updated = cart.map(item => {
      if (item._id === id) {
        let quantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
        if (quantity < 1) quantity = 1;
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cartWithQty", JSON.stringify(updated));
  };

  const handleRemove = (id: string) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    dispatch(removeFromCart(id));
    localStorage.setItem("cartWithQty", JSON.stringify(updated));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    setShowModal(false);
    toast.success('Zakaz muvaffaqiyatli yuborildi!');
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'AEMA_MEM') {
      setDiscount(30);
      toast.success("Kupon qo‘llandi! 30% chegirma");
    } else {
      setDiscount(0);
      toast.error("Noto‘g‘ri kupon kodi");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 relative">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map(item => (
                <div key={item._id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded p-4">
                  <div className="flex items-center gap-4">
                    <img src={item.main_image} className="w-[80px] h-[80px] object-contain" alt={item.title} />
                    <div>
                      <p className="text-gray-400 text-sm">SKU: {item._id.slice(0, 12)}</p>
                      <p className="text-[16px] font-medium">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">${item.price}</p>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item._id, 'dec')} className="text-xl px-2 rounded bg-gray-200">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQty(item._id, 'inc')} className="text-xl px-2 rounded bg-gray-200">+</button>
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

            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="border w-full px-3 py-2 rounded"
            />
            <button
              onClick={applyCoupon}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            >
              Apply Coupon
            </button>

            <div className="flex justify-between"><span>Subtotal</span><span>${discountedSubtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>${shipping}</span></div>
            <div className="flex justify-between font-bold text-green-700 border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>

            <button onClick={() => setShowModal(true)} className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto min-h-screen p-4">
            <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X size={28} />
              </button>

              <h2 className="text-2xl font-bold mb-6 mt-4">Checkout</h2>

              <div className="mb-8 border rounded p-4 space-y-4">
                <h3 className="text-lg font-semibold mb-2">Your Order</h3>
                {cart.map(item => (
                  <div key={item._id} className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img src={item.main_image} className="w-14 h-14 object-cover rounded" alt={item.title} />
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-right font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="flex justify-between font-semibold border-t pt-2"><span>Shipping</span><span>${shipping}</span></div>
                <div className="flex justify-between font-bold text-green-700 border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name *" className="border p-2 rounded" />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="border p-2 rounded" />
                <input name="country" value={form.country} onChange={handleChange} placeholder="Country / Region" className="border p-2 rounded" />
                <input name="city" value={form.city} onChange={handleChange} placeholder="Town / City" className="border p-2 rounded" />
                <input name="address" value={form.address} onChange={handleChange} placeholder="Street Address" className="border p-2 rounded" />
                <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="border p-2 rounded" />
                <input name="zip" value={form.zip} onChange={handleChange} placeholder="Zip" className="border p-2 rounded" />
                <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address *" className="border p-2 rounded" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className="border p-2 rounded col-span-2" />
              </div>

              <div className="mt-6">
                <label className="font-medium block mb-2">Payment Method *</label>
                <div className="space-y-2">
                  {['PayPal', 'Direct bank transfer', 'Cash on delivery'].map(method => (
                    <label key={method} className="flex items-center gap-2 border p-2 rounded cursor-pointer">
                      <input type="radio" name="payment" value={method} checked={form.payment === method} onChange={handleChange} />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="font-medium block mb-2">Comment</label>
                <textarea name="comment" value={form.comment} onChange={handleChange} rows={4} className="w-full border rounded p-2" />
              </div>

              <button onClick={handlePlaceOrder} className="bg-green-700 text-white py-3 w-full mt-6 rounded hover:bg-green-800">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
