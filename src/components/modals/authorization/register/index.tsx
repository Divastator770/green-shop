import {  Form, Input } from "antd"
import { Icons } from "../../../../assets/icons"
import { notificationApi } from "../../../../generic/notificationApi"
import { useRegisterMutation, useRegisterWithGoogleMutation } from "../../../../hooks/useQueryAction"
import { Loader } from "lucide-react"

const Register = () => {
  const notify=notificationApi()
  const {mutate,isPending}=useRegisterMutation()
  const login=(e:{email:string,password:string,name:string,surname:string,confirm_password:string})=>{console.log(e)
    
  if(e.password!==e.confirm_password){
return notify("wrong_confirm_password")
  }
  mutate(e) 

  }
    const icon_style:string="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer border-[#EAEAEA]"
const {mutate:mutateGoogle}=useRegisterWithGoogleMutation()
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Enter your username and password to login</h2>
<Form onFinish={login}>
    <Form.Item name={"name"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input placeholder="enter your name"></Input>
    </Form.Item>
    <Form.Item name={"surname"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input placeholder="enter your surname"></Input>
    </Form.Item>
    <Form.Item name={"email"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input placeholder="enter your email"></Input>
    </Form.Item>
    <Form.Item name={"password"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input.Password placeholder="enter your password"></Input.Password>
    </Form.Item>
    <Form.Item name={"confirm_password"} rules={[{required:true, message:"please fill the form!"}]}>
        <Input.Password placeholder="confirm your password"></Input.Password>
    </Form.Item>
    <button className="w-full bg-green-500 text-white h-[40px] rounded-md">
    {isPending?<Loader className="animate-spin"/>:"Register"}
    </button>
</Form>
<div className="flex items-center justify-center mt-5 mb-5 gap-4">
<div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
<p className=" text-center w-[40%] text-[#3D3D3D]">or login with</p>
<div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
</div>
<div onClick={()=>mutateGoogle()} className={`${icon_style}`}>
    <Icons.Google_Svg/>
    <p>Register with google</p>
</div>
<div className={`${icon_style}`}>
    <Icons.Facebook_Svg/>
<p>Register with facebook</p>
</div>
    </div>
  )
}

export default Register
