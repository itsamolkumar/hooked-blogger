// src/pages/Post.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import service from "../appwrite/cofig";
import parse from "html-react-parser"; // ✅ import parser
import { Loader } from "../components";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      service.getPost(id).then((data) => {
        if (data) {
          setPost(data);
        } else {
          console.log("❌ Post not found.");
        }
      });
    }
  }, [id]);

  if (!post) {
    return <Loader/>
    // return <p className="text-center text-gray-600 p-6">⏳ Loading post...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>

      {/* Meta */}
      <div className="text-sm text-gray-500">
        By <span className="font-medium">{post.author || "Unknown"}</span> ·{" "}
        {new Date(post.$createdAt).toLocaleDateString()}
      </div>

      {/* Image */}
      {post.featuredImage && (
        <img
          src={service.getFileView(post.featuredImage)}
          alt={post.title}
          className="w-full max-h-[500px] object-cover rounded-lg"
        />
      )}

      {/* Parsed HTML content */}
      <div className="prose max-w-none text-gray-700">
        {parse(post.content)} {/* ✅ Use parser here */}
      </div>
    </div>
  );
}
