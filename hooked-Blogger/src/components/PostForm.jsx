import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import service from "../appwrite/cofig";
import { Input, Button } from "../components";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import RTE from "./RTE";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const titleValue = watch("title");

  useEffect(() => {
    if (titleValue && typeof titleValue === "string") {
      const slugVal = titleValue
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      setValue("slug", slugVal);
    }
  }, [titleValue, setValue]);

  const onSubmit = async (data) => {
    const content = editorRef.current?.getContent();
    const file = data.thumbnail?.[0];

    if (!userData || !userData.$id) {
      setError("❌ Please login to submit a blog post.");
      return;
    }

    if (!file) {
      setError("❌ Please select a thumbnail image.");
      return;
    }

    const finalData = {
      ...data,
      content,
      tags: data.tags.split(",").map((tag) => tag.trim()),
      slug: data.slug,
    };

    try {
      setError("");

      const uploadedFile = await service.uploadFile(file);
      const featuredImage = uploadedFile.$id;

      const createdPost = await service.createPost({
        title: data.title,
        slug: data.slug,
        content,
        featuredImage,
        tags: data.tags,
        status: data.status,
        userId: userData.$id,
      });

      navigate("/blogs");
    } catch (err) {
      console.error("❌ Error creating post:", err);
      setError("❌ Failed to create post");
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-xl my-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        ✍️ Add New Blog Post
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <Input
            label="Title"
            placeholder="Enter blog title"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 36, message: "Title too long" },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Slug & Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Input
              label="Slug (optional)"
              placeholder="Auto-generated from title or write manually"
              {...register("slug", {
                maxLength: { value: 36, message: "Slug too long" },
              })}
            />
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">
                {errors.slug.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Tags (comma separated)"
              placeholder="e.g. react,blog,appwrite"
              {...register("tags")}
            />
          </div>
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Thumbnail Image
          </label>

          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            {...register("thumbnail", { required: "Thumbnail is required" })}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer
              file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            onChange={(e) => {
              const fileName = e.target.files[0]?.name || "No file chosen";
              document.getElementById("file-name").textContent = fileName;
            }}
          />
          <span
            id="file-name"
            className="text-sm text-gray-500 mt-1 block"
          >
            No file chosen
          </span>

          {errors.thumbnail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.thumbnail.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            {...register("status")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Rich Text Editor */}
        <div>
          <RTE editorRef={editorRef} />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          🚀 Publish Post
        </Button>
      </form>
    </div>
  );
}
