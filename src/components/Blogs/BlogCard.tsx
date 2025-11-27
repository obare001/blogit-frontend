import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import type { BlogProps } from "./types";

const BlogCard = ({blog}: {blog: BlogProps}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={blog.featuredImageUrl}
          alt="blog thumbnail"
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* <Badge variant="outline" className="w-fit">
          {blog.category}
        </Badge> */}

        <h3 className="text-lg font-semibold leading-tight">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
        {blog.synopsis}
        </p>

        {/* Read More */}
        <Link to={`/blog/${blog.id}`}>
        <Button className="mt-2 w-fit">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
