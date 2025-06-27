import { Button } from "antd";
import Navbar from "../../navbar";

const Blog_navbar = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="blog_showcase flex flex-col items-center text-center py-10">
          <img
            src="https://green-shop-otabek.vercel.app/assets/blog-header-hi2KeX2m.png"
            alt="Blog header"
            className="w-full  h-auto mb-6"
          />
          <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[50px] leading-tight">
            Monetize your content <br />
            with <span className="text-green-500">GreenShop</span>
          </h1>
          <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 mt-4 max-w-3xl">
            GreenShop - a platform for buying and selling, publishing and
            monetizing all types of flowers: articles, notes, video, <br className="hidden sm:block" />
            photos, podcasts or songs.
          </p>
          <Button className="!bg-green-500 !text-white !p-4 sm:!p-5 !rounded-full mt-6">
            Join GreenShop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog_navbar;
