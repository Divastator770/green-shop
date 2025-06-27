import { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Heart } from "lucide-react";
import { CommentOutlined } from "@ant-design/icons";
interface Blog {
  _id: string;
  title: string;
  content: string;
  views: number;
  reaction_length: number;
}

const stripHtml = (html: string): string => html.replace(/<[^>]*>?/gm, "");
const truncateText = (text: string, length: number): string =>
  text.length > length ? text.substring(0, length) + "..." : text;
const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    axios .get<{ data: Blog[] }>(
        "https://beckend-n14-soqt.vercel.app/api/user/blog",
        {
          params: {
            access_token: "64bebc1e2c6d3f056a8c85b7",
            search: "",
          },
        }
      )
      .then((res) => setBlogs(res.data.data));
  }, []);

  const handleSelectBlog = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    return (
      <div className="p-6">
        <button
          onClick={handleBack}
          className="mb-4 text-blue-600 underline hover:text-blue-800"
        >
          ← Back to all blogs
        </button>
        <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
        ></div>
      </div>
    );
  }

  return (
 <div className="container">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {blogs.map((blog) => {
        const shortText = truncateText(stripHtml(blog.content), 250);

        return (
          <div
            key={blog._id}
            onClick={() => handleSelectBlog(blog)}
            className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 text-sm">{shortText}</p>

            <div className="flex justify-between mt-4 text-gray-500 text-sm border-t pt-2">
              <span className="text-[20px] flex"><Eye/> {blog.views || 0}</span>
              <span className="text-[20px] flex"><CommentOutlined/> {blog.reaction_length || 0}</span>
              <span className="text-[20px] flex"><Heart/> {blog.reaction_length || 0}</span>
            </div>
          </div>
        );
      })}
    </div>
 </div>
  );
};

export default BlogPage;
