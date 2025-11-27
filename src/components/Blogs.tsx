import { Link } from "react-router-dom";
import { useAuth } from "../context-api/AuthContext";
import useBlogs from "../Hooks/useBlogs";
import Blog from "./BlogCard";
import { BlogCardSkeletion } from "./Skeleton";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const { loading, blogs } = useBlogs();

  if (isLoggedIn) {
    return (
      <div>
        {/* Spacer for fixed navbar */}
        <div className="h-[75px]" />

        {/* Blog List */}
        <div className="pt-10 pb-20 min-h-screen flex flex-col items-center px-4">
          {loading ? (
            <>
              <BlogCardSkeletion />
              <BlogCardSkeletion />
              <BlogCardSkeletion />
              <BlogCardSkeletion />
            </>
          ) : (
            blogs.map((blog, index) => (
              <div key={index} className="w-full max-w-3xl">
                <Blog
                  id={blog.id}
                  firstName={blog.user.firstName}
                  lastName={blog.user.lastName}
                  title={blog.title}
                  description={blog.description}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  // -------------------------
  // PUBLIC HOME PAGE
  // -------------------------

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center gap-10">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-semibold leading-tight">
            Human <br /> Stories & Ideas
          </h1>

          <p className="mt-5 text-xl sm:text-2xl font-light text-gray-700">
            A place to read, write, and deepen your understanding
          </p>

          <Link
            to="/signup"
            className="inline-block mt-6 text-lg sm:text-xl border px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition"
          >
            Get Started
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="medium.webp"
          alt="logo"
          className="w-60 sm:w-72 md:w-96 lg:w-[400px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
