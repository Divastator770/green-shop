import { Modal } from 'antd'
import { useReduxSelector } from '../../../hooks/useRedux'
import { useDispatch } from 'react-redux'
import { setOpenAuthorizationModalVisibility } from '../../../redux/modal-slice'
import Login from './login'
import Register from './register'
import { useState } from 'react'

const AuthorizationModal = () => {
    const{openAuthorizationModalVisibility} =useReduxSelector((state)=>state.modalSice)
    const dispatch=useDispatch()
    const [editpage,setEditpage]=useState("login")
  return (
    <Modal open={openAuthorizationModalVisibility} footer={false} onCancel={()=>dispatch(setOpenAuthorizationModalVisibility())}>


      <div className='p-5 mt-5'>
      <div className=' flex items-center justify-center gap-5'>
            <h3 onClick={()=>setEditpage("login")} className={`cursor-pointer ${editpage==="login" && "text-green-500"}`}>login</h3>
            <h3 >|</h3>
            <h3 onClick={()=>setEditpage("register")} className={`cursor-pointer ${editpage!=="login" && "text-green-500"}`}>Register</h3>
        </div>
 {
    editpage==="login" ?<Login/> :<Register/> 
 }
      </div>
    </Modal>

    
  )
}

export default AuthorizationModal
