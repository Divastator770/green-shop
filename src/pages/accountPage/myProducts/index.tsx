import { Empty } from "antd";
import { useQueryHandler } from "../../../hooks/useQuery";

const Products = () => {
  const { data } = useQueryHandler({
    url: "/user/products",
    pathname: "my-product",
  });

  return (
    <div>
      <p>Products</p>
      {!data?.length && <Empty description={<p>you dont have a products..?</p>} />}
    </div>
  );
};

export default Products;