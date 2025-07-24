// src/pages/About.jsx

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">About hookedBlogger</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          hookedBlogger is a passion project created for developers who love to learn, share, and grow. Whether you're a beginner or a pro, this platform brings tech tutorials, code walkthroughs, and developer insights together.
          <br /><br />
          Built using <strong>React, Tailwind CSS, Appwrite</strong> and other modern tools, this blog is fast, responsive, and focused on clean developer experience.
          <br /><br />
          Follow us on GitHub or connect via the contact page for collaborations, feedback, or feature requests.
        </p>
      </div>
    </div>
  );
}
