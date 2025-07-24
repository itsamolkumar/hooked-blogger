// components/BlogCard.jsx
import { Link } from "react-router-dom";
import service from "../appwrite/cofig";

export default function PostCard({ post }) {
  const url = service.getFileView(post.featuredImage);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-md mx-auto sm:mx-0">
      {/* Thumbnail */}
      <Link to={`/blogs/${post.$id}`}>
        <img
          src={url}
          alt={post.title}
          className="w-full h-48 sm:h-56 object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <Link to={`/blogs/${post.$id}`}>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Meta Info */}
        <div className="text-sm text-gray-500">
          By <span className="font-medium">{post.author}</span> ·{" "}
          {new Date(post.$createdAt).toLocaleDateString()}
        </div>

        {/* Button */}
        <div className="pt-2">
          <Link
            to={`/blogs/${post.$id}`}
            className="text-blue-600 font-semibold text-sm hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
