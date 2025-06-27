import { notification } from "antd";

type Notifytype="login_success"|"login_wrong"|"wrong_confirm_password"|406|"register_success"
export const  notificationApi=()=>{
    const notify=(type:Notifytype)=>{
        switch (type) {
            case "login_success":
                return notification.success({message:"Login Successfully"})
                break;
                case "login_wrong":
                    return notification.error({message:"Login wrong"})
                    break;
                    case "wrong_confirm_password":
                        return notification.error({message:"Password and confirm password are not the same"})
                        break;
                        case 406:
                            return notification.error({message:"Email already exists"})
                            break;
                            case "register_success":
                                return notification.success({message:"Register Successfully"})
                                break;
            default:
        }
    }
    return notify
}