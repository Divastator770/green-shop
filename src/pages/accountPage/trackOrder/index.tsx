import { Empty } from "antd";
import Cookies from "js-cookie"
import type { AuthType } from "../../../@types";

const TrackOrder = () => {
  const cookies = Cookies.get("user") as string;
const user = cookies ? (JSON.parse(cookies) as Partial<AuthType>) : null;

  console.log(user?.order_list);
  
  return (
    <div>
      {/* {user?.order_list?user.order_list:<Empty description="No order items"/>} */}
      <Empty description="No order items"/>
    </div>
  )
}

export default TrackOrder