// src/pages/Home.jsx

import { Button } from "../components/index";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Welcome to <span className="text-black">hookedBlogger</span> 🧠
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8">
          A modern developer blog built with React, Tailwind CSS, and Appwrite.  
          Learn, build, and grow — one hook at a time!
        </p>

        {/* CTA Button */}
        <Button
          className="px-6 py-3 text-white font-medium bg-blue-600 hover:bg-blue-700 transition rounded-lg"
          onClick={() => navigate("/blogs")}
        >
          Explore Blogs
        </Button>

        {/* Future Blog Preview Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Featured Blogs (Coming Soon 🔧)
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg">React Hooks in Depth</h3>
              <p className="text-sm text-gray-500 mt-2">Understanding useState, useEffect and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg">Building with Appwrite</h3>
              <p className="text-sm text-gray-500 mt-2">Authentication, database and deployment basics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg">Tailwind Tips for Devs</h3>
              <p className="text-sm text-gray-500 mt-2">How to make clean UIs super fast.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
