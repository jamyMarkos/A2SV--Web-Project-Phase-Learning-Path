import { useGetBlogByIdQuery } from "@/redux/hooks/blogHooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Article = () => {
  // Initialize states
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useGetBlogByIdQuery(Number(id));
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data!.title);
  const [editedBody, setEditedBody] = useState(data!.body);
  const [editedArticle, setEditedArticle] = useState(data);

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle save button click
  const handleSave = async () => {
    // Create updated article object
    const updatedArticle = {
      ...data,
      title: editedTitle,
      body: editedBody,
    };
  };

  // Handle cancel button click
  const handleCancel = () => {
    setEditedTitle(data!.title);
    setEditedBody(data!.body);
    setIsEditing(false);
  };

  // Handle delete button click
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/");
    } else {
      console.log("Error deleting article");
    }
  };

  // CSS classes
  const label_style = "display:block px-3 py-2 text-left my-2 font-medium";
  const btn =
    "text-slate-300 border rounded-md px-3 py-2 my-2 font-medium mx-1 bg-[#161437]";

  return (
    <>
      {isEditing ? (
        // Edit mode
        <>
          <label htmlFor="title" className={label_style}>
            Title
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 mb-3 outline-none"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />

          <label htmlFor="body" className={label_style}>
            Body
          </label>
          <textarea
            className="w-full h-40 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 outline-none"
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          />
          <button className={btn} onClick={handleSave}>
            Save
          </button>
          <button className={btn} onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        // View mode
        <>
          <h1 className="display:inline-block text-left font-bold my-2 text-[20px] capitalize">
            {editedArticle!.title}
          </h1>
          <h3>{editedArticle!.date}</h3>
          <hr className="text-[black] mb-2" />
          <p className="text-capitalize text-left font-medium">
            {editedArticle!.body}
          </p>
          <br />
          <button className={btn} onClick={(e) => setIsEditing(true)}>
            Edit Blog
          </button>
          <button className={btn} onClick={handleDelete}>
            Delete Blog
          </button>
        </>
      )}
    </>
  );
};

export default Article;
