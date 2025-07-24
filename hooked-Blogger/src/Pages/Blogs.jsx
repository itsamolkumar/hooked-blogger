import PostCard from "../components/PostCards";
import service from "../appwrite/cofig";
import { useEffect, useState } from "react";
import { Loader } from "../components";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // 🔁 loading state

  useEffect(() => {
    service.getPosts().then((postsData) => {
      if (postsData) {
        setPosts(postsData.documents);
        console.log("✅ Posts:", postsData.documents);
      } else {
        console.log("📭 No posts found.");
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <Loader />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center text-lg mt-8">
          📭 No posts available.
        </p>
      )}
    </div>
  );
}
