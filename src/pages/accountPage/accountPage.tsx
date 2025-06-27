import { Outlet, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import type { AuthType } from "../../@types"
import { FiMenu } from "react-icons/fi"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
const AccountPage = () => {
  const [userData, setUserData] = useState<Partial<AuthType>>({})
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
console.log(userData);                    
  useEffect(() => {
    const cookie = Cookies.get("user")
    if (cookie) {
      const parsed = JSON.parse(cookie)
      setUserData(parsed)
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove("user")
    navigate("/")
  }

  return (
    <div className="">
 <Navbar/>
    <div className=" container flex flex-col lg:flex-row min-h-auto bg-gray-50">
      <div className="flex items-center justify-between lg:hidden px-4 py-3 bg-white border-b shadow">
        <div className="text-xl font-semibold text-green-600">Account</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FiMenu className="text-2xl text-gray-700" />
        </button>
      </div>

      <aside className={`bg-white border-r w-64 p-6 space-y-4 text-gray-700 transform transition-transform duration-300 lg:translate-x-0 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed lg:static z-50 top-0 left-0 h-full lg:h-auto`}>
        <div className="text-xl font-semibold text-green-600 border-b pb-4">Account Details</div>
        <ul className="pt-4 space-y-4">
          <li onClick={() => navigate("/account")} className="cursor-pointer hover:text-green-600">Account Details</li>
          <li onClick={() => navigate("/account/my-products")} className="cursor-pointer hover:text-green-600">My Products</li>
          <li onClick={() => navigate("/account/address")} className="cursor-pointer hover:text-green-600">Address</li>
          <li onClick={() => navigate("/account/wishlist")} className="cursor-pointer hover:text-green-600">Wishlist</li>
          <li onClick={() => navigate("/account/track-order")} className="cursor-pointer hover:text-green-600">Track Order</li>
          <li onClick={handleLogout} className="cursor-pointer text-red-500">Log out</li>
        </ul>
      </aside>

      <main className="flex-1 p-4 sm:p-6 md:p-10 mt-16 lg:mt-0">
        <Outlet />
      </main>
    </div>
      <Footer/>
    </div>
  )
}
export default AccountPage
