import { Avatar, Button, Badge } from "antd"
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setOpenAuthorizationModalVisibility } from "../../redux/modal-slice"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import type { AuthType } from "../../@types"
import { Icons } from "../../assets/icons"
import type { RootState } from "../../redux/store"

const Navbar = () => {
  const [user, setUser] = useState<Partial<AuthType>>({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartCount = useSelector((state: RootState) => state.cart.cart.length)
  const likeCount = useSelector((state: RootState) => state.like.likes.length) 
  useEffect(() => {
    const cookie = Cookies.get("user")
    if (cookie) {
      const data: AuthType = JSON.parse(cookie)
      setUser(data)
    }
  }, [])

  const isLoggedIn =!(!user._id)

  return (
    <div className="container">
      <header className="w-90% m-auto py-4 flex items-center justify-between border-b border-gray-200 ">
        <Icons.Logo_Svg className="navbar_image" />
        <div className="navbar_links flex items-center gap-4">
          <h1 className="hover:text-green-500 cursor-pointer" onClick={() => navigate('/')}>Home</h1>
          <h1 className="hover:text-green-500 cursor-pointer" onClick={() => navigate('/blog')}>Blogs</h1>
        </div>
        <div className="navbar_icons flex items-center gap-4">
          <Badge count={likeCount} size="small">
            <HeartOutlined className="text-[20px] cursor-pointer" onClick={() => navigate('/liked')} />
          </Badge>
          <Badge count={cartCount} size="small">
            <ShoppingCartOutlined className="text-[20px] cursor-pointer" onClick={() => navigate('/cart')} />
          </Badge>

          {isLoggedIn ? (
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/account')}>
              <Avatar src={user.profile_photo} />
              <span className="text-green-600 font-semibold">{user.name}</span>
            </div>
          ) : (
            <Button
              onClick={() => dispatch(setOpenAuthorizationModalVisibility())}
              className="!bg-green-500 p-1 !text-white"
            >
              Login
            </Button>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar
