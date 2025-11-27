import BlogCard from "./BlogCard";
import Banner from "../Common/Banner";
import { useQuery } from "@tanstack/react-query";
import { blogServices } from "../../services/blogServices/blogs";
import type { BlogProps } from "./types";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: blogServices.getAllBlogs,
  });

  if (isLoading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">
        Error loading blogs: {(error as Error).message}
      </p>
    );
  }

  const blogsData: BlogProps[] = data?.blogs || [];

  return (
    <div>
      <Banner />
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-2xl text-primary pb-3">
          All Blogs Category
        </h3>
        <Link to="/add-blog">
        <button className="text-sm bg-blue-700 rounded-mdpx-4 py-2 text-white">Add Blog</button>
        </Link>
      </div>
      <div className="container m-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {blogsData.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
