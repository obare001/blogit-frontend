import { useQuery } from "@tanstack/react-query";
import { blogServices } from "../../services/blogServices/blogs";
import type { BlogProps } from "./types";
import { useParams } from "react-router-dom";



const ViewBlog = () => {
    const params = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog", params.id],
    queryFn: () => blogServices.getBlogById(params.id),
  });
  console.log("Fetched blog data: ", data)

  if (isLoading) {
    return <p className="text-center py-10">Loading blog...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">
        Error loading blog: {(error as Error).message}
      </p>
    );
  }

  // `data` is a single blog object
  const blog: BlogProps = data.blog;

  return (
    <div className="container m-auto">
         <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <img
        src={blog?.featuredImageUrl || "/sports.jpg"}
        alt="sports"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glassy Text Card */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg p-6 rounded-xl max-w-sm shadow-md">
        <h3 className="text-xl font-bold text-white mb-2">
          {blog?.title}
        </h3>
        <p className="text-white text-sm line-clamp-3">
         {new Date(blog?.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
    </div>
  );
};

export default ViewBlog;
