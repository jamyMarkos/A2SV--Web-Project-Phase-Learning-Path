import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Article = ({ article }) => {
    // Initialize states
    const router = useRouter();
    const { id } = router.query;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(article.title);
    const [editedBody, setEditedBody] = useState(article.body);
    const [editedArticle, setEditedArticle] = useState(article);

    // Handle edit button click
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle save button click
    const handleSave = async () => {
        // Create updated article object
        const updatedArticle = {
            ...article,
            title: editedTitle,
            body: editedBody
        };

        // Send PUT request to update article
        const response = await fetch(`http://localhost:5000/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedArticle)
        });

        if (response.ok) {
            setIsEditing(false);
            setEditedArticle(updatedArticle);
        } else {
            console.error('Error Updating article');
        }
    };

    // Handle cancel button click
    const handleCancel = () => {
        setEditedTitle(article.title);
        setEditedBody(article.body);
        setIsEditing(false);
    };

    // Handle delete button click
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE'
        });

        if (res.ok) {
            router.push('/');
        } else {
            console.log('Error deleting article');
        }
    };

    // CSS classes
    const label_style = "display:block px-3 py-2 text-left my-2 font-medium";
    const btn = "text-slate-300 border rounded-md px-3 py-2 my-2 font-medium mx-1 bg-[#161437]";

    return (
        <>
            {isEditing ? (
                // Edit mode
                <>
                    <label htmlFor="title" className={label_style}>Title</label>
                    <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 mb-3 outline-none" type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />

                    <label htmlFor="body" className={label_style}>Body</label>
                    <textarea className="w-full h-40 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 outline-none" value={editedBody} onChange={(e) => setEditedBody(e.target.value)} />
                    <button className={btn} onClick={handleSave}>Save</button>
                    <button className={btn} onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                // View mode
                <>
                    <h1 className="display:inline-block text-left font-bold my-2 text-[20px] capitalize">{editedArticle.title}</h1><h3>{editedArticle.date}</h3>
                    <hr className="text-[black] mb-2" />
                    <p className="text-capitalize text-left font-medium">{editedArticle.body}</p>
                    <br />
                    <button className={btn} onClick={(e) => setIsEditing(true)}>Edit Blog</button>
                    <button className={btn} onClick={handleDelete}>Delete Blog</button>
                </>
            )}
        </>
    );
};

// Fetch article data for the given ID during server-side rendering
export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:5000/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    };
};

export default Article;
