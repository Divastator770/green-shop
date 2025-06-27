import {  Form, Input } from "antd"
import { Icons } from "../../../../assets/icons"
import { useLoginMutation, useLoginWithGoogleMutation } from "../../../../hooks/useQueryAction"
import { Loader } from "lucide-react"

const Login = () => {
  const {mutate:mutateGoogle}=useLoginWithGoogleMutation()
    const {mutate,isPending} =useLoginMutation()
  const login=(e:{email:string,password:string})=>{mutate(e);
  }
    const icon_style:string="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer border-[#EAEAEA]"
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Enter your username and password to login</h2>
<Form onFinish={login}>
    <Form.Item name={"email"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input placeholder="enter your email"></Input>
    </Form.Item>
    <Form.Item name={"password"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input.Password placeholder="********"></Input.Password>
    </Form.Item>
    <button className="w-full bg-green-500 text-white h-[40px] rounded-md">{isPending?<Loader className="animate-spin"/>:"Login"}</button>
</Form>
<div className="flex items-center justify-center mt-5 mb-5 gap-4">
<div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
<p className=" text-center w-[40%] text-[#3D3D3D]">or login with</p>
<div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
</div>
<div onClick={()=>mutateGoogle()} className={`${icon_style}`}>
    <Icons.Google_Svg/>
    <p>login with google</p>
</div>
<div className={`${icon_style}`}>
    <Icons.Facebook_Svg/>
<p>login with facebook</p>
</div>
    </div>
  )
}

export default Login
