import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store"
import { useNavigate } from "react-router-dom"
import { Heart } from "lucide-react" 
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

const LikedPage = () => {
  const liked = useSelector((state: RootState) => state.like.likes)
  const navigate = useNavigate()

  return (
  <div>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ❤️ Your Liked Products
        </h2>
        {liked.length === 0 ? (
          <div className="text-center text-gray-500 flex flex-col items-center gap-3 mt-20">
            <Heart className="w-16 h-16 text-gray-300" />
            <p className="text-lg">You haven’t liked any products yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {liked.map(item => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-200"
                onClick={() => navigate(`/product/${item._id}`, { state: item })}
              >
                <img
                  className="w-full h-[220px] object-cover rounded-t-lg"
                  src={item.main_image}
                  alt={item.title}
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-green-600 font-bold text-lg">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default LikedPage
