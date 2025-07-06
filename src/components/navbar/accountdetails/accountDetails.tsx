import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { Input, Button } from "antd"
import type { AuthType } from "../../../@types"
import toast from "react-hot-toast"

const AccountDetails = () => {
  const [userData, setUserData] = useState<Partial<AuthType>>({})
  const [imageFile, setImageFile] = useState<File | null>(null)

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

  const handleChange = (field: keyof AuthType, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const handleSave = () => {
    const updatedData = {
      ...userData,
      profile_photo : imageFile?.name || userData.profile_photo, 
    }
  
    Cookies.set("user", JSON.stringify(updatedData))
  
    setUserData(updatedData)
  
    toast.success("Ma'lumotlar muvaffaqiyatli saqlandi")
  }
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">First name</label>
            <Input
              value={userData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Last name</label>
            <Input
              value={userData.surname || ""}
              onChange={(e) => handleChange("surname", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <Input
              value={userData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone number</label>
            <Input
              value={userData.phone_number || ""}
              onChange={(e) => handleChange("phone_number", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Username</label>
            <Input
              value={userData.username || ""}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Image</label>
            <input
              type="file"
              className="w-full border rounded px-2 py-1"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <Button
          className="mt-6 bg-green-600 text-white"
          size="large"
          onClick={handleSave}
        >
          Save changes
        </Button>
      </main>
    </div>
  )
}

export default AccountDetails
