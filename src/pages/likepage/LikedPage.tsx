import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

const LikedPage = () => {
  const liked = useSelector((state: RootState) => state.like.likes)
  const navigate = useNavigate()

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Liked Products</h2>

      {liked.length === 0 ? (
        <p className="text-gray-500 text-center">No liked products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {liked.map(item => (
            <div
              key={item._id}
              className="border rounded shadow hover:shadow-md transition p-4 cursor-pointer"
              onClick={() => navigate(`/product/${item._id}`, { state: item })}
            >
              <img
                className="w-full h-[220px] object-contain mb-3"
                src={item.main_image}
                alt={item.title}
              />
              <h3 className="font-semibold text-[16px] mb-1 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-green-600 font-bold text-lg">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LikedPage
