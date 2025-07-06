import { Button } from "antd"
import { ArrowBigRightDash } from "lucide-react"

const TwoFlowers = () => {
  return (
    <>
    <div className='container flex gap-2 fff'>
      <div className="flex items-center border border-green-500 rounded-2xl p-2">
        <img src="https://green-shop-otabek.vercel.app/assets/1-Bhbx3ro7.png" alt="" />
        <div>
            <h1 className="text-[20px] font-bold">Summer cactus & succulents</h1>
            <p className="text-gray-400">We are an online plant shop offering a wide range of <br /> cheap and trendy plants</p>
            <Button className="!bg-green-500 !text-white !mt-2"   >Find more <ArrowBigRightDash/></Button>
        </div>
      </div>
      <div className="flex items-center border border-green-500 rounded-2xl p-2">
        <img src="https://green-shop-otabek.vercel.app/assets/2-6x9mMEaU.png" alt="" />
        <div>
            <h1 className="text-[20px] font-bold">Summer cactus & succulents</h1>
            <p className="text-gray-400">We are an online plant shop offering a wide range of <br /> cheap and trendy plants</p>
            <Button className="!bg-green-500 !text-white !mt-2" >Find more <ArrowBigRightDash/></Button>
        </div>
      </div>
    </div>
    <div className="container">
       <div className="mt-[40px]">
        <center className="mt-4 mb-4">
            <h1 className="text-[25px] font-bold">Our Blog Posts</h1>
            <p className="text-gray-500">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </center>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            <div>
                <img className="" src="https://green-shop-otabek.vercel.app/assets/1-Ch9JE0GV.png" alt="" />
                <p className="text-green-500 text-[16px]">September 12 | Read in 6 minutes</p>
                <p className="text-[18px] font-bold">Cactus & Succulent Care Tips </p>
                <p className="text-gray-500 text-[12px]">Cacti are succulents are easy care plants for <br /> any home or patio.</p>
                <Button className="!bg-green-500 !text-white">Read More <ArrowBigRightDash/></Button>
            </div>
            <div>
                <img className="" src="https://green-shop-otabek.vercel.app/assets/2-BqD2fIC7.png" alt="" />
                <p className="text-green-500 text-[16px]">September 12 | Read in 6 minutes</p>
                <p className="text-[18px] font-bold">Cactus & Succulent Care Tips </p>
                <p className="text-gray-500 text-[12px]">Cacti are succulents are easy care plants for <br /> any home or patio.</p>
                <Button className="!bg-green-500 !text-white">Read More <ArrowBigRightDash/></Button>
            </div>
            <div>
                <img className="" src="https://green-shop-otabek.vercel.app/assets/3-Bg8f3bcT.png" alt="" />
                <p className="text-green-500 text-[16px]">September 12 | Read in 6 minutes</p>
                <p className="text-[18px] font-bold">Cactus & Succulent Care Tips </p>
                <p className="text-gray-500 text-[12px]">Cacti are succulents are easy care plants for <br /> any home or patio.</p>
                <Button className="!bg-green-500 !text-white">Read More <ArrowBigRightDash/></Button>
            </div>
            <div>
                <img className="" src="https://green-shop-otabek.vercel.app/assets/4-CGk6Ds5n.png" alt="" />
                <p className="text-green-500 text-[16px]">September 12 | Read in 6 minutes</p>
                <p className="text-[18px] font-bold">Cactus & Succulent Care Tips </p>
                <p className="text-gray-500 text-[12px]">Cacti are succulents are easy care plants for <br /> any home or patio.</p>
                <Button className="!bg-green-500 !text-white">Read More <ArrowBigRightDash/></Button>
            </div>
        </div>
        </div> 
    </div>
    </>
  )
}

export default TwoFlowers
