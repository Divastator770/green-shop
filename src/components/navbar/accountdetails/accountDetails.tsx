import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { Input, Button } from "antd"
import type { AuthType } from "../../../@types"

const AccountDetails = () => {
  const [userData, setUserData] = useState<Partial<AuthType>>({})

  useEffect(() => {
    const cookie = Cookies.get("user")
    if (cookie) {
      try {
        const parsed = JSON.parse(cookie)
        setUserData(parsed)
      } catch (e) {
        console.error("Cookie error topilmadi", e)
      }
    }
  }, [])

  return (
    
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
    <main className="flex-1 p-4 sm:p-6 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">First name</label>
          <Input value={userData.name || ""} />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last name</label>
          <Input value={userData.surname || ""} />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <Input value={userData.email || ""} />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone number</label>
          <Input value={userData.phone_number || ""} />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Username</label>
          <Input value={userData.username || ""} />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Image</label>
          <input type="file" className="w-full border rounded px-2 py-1" />
        </div>
      </div>
  
      <Button className="mt-6 bg-green-600 text-white" size="large">Save changes</Button>
  
    
    </main>
  </div>
  
  )
}

export default AccountDetails
