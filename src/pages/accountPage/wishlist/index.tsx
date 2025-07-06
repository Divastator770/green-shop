import { Empty } from "antd"
import { useQueryHandler } from "../../../hooks/useQuery";

const Wishlist = () => {
  const { data } = useQueryHandler({
    url: "/user/wishlist",
    pathname: "wishlist",
  });
  return (
    <div>
      <p>Wishlist</p>
      {!data?.length && <Empty description={<p>your wishlist is empty</p>} />}
    </div>
  );

}

export default Wishlist