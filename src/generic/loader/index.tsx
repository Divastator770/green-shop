import { Skeleton } from "antd";

const UseLoader = () => {
  const categories_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => <Skeleton.Input active key={idx} />);
  };
const products_loader=()=>{
    return Array.from({length:6}).map((_,idx)=><div className="flex flex-col gap-2" key={idx}><Skeleton.Image className="!-full !h-[300px]" active />
    <Skeleton.Input active />
    </div>)
}
  return { categories_loader,products_loader };
};

export default UseLoader;
