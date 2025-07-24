// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./Pages/About.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/SignUp.jsx";
import AddPost from "./Pages/AddPost.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Post from "./Pages/Post.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact-us", element: <ContactUs /> },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/blogs",
        element: (
          <AuthLayout>
            <Blogs />
          </AuthLayout>
        ),
      },
      {
        path: "/blogs/:id",
        element: (
          <AuthLayout>
            <Post />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider> {/* ✅ YEH MISSING THA */}
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
