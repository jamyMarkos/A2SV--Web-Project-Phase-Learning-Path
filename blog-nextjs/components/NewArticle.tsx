import Link from "next/link";
import { useState } from "react";

const NewArticle = () => {
    // State for form fields
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Function to format and set date state
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        setDate(formattedDate);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newArticle = {
            title,
            body,
            date
        };

        try {
            const response = await fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newArticle),
            });

            if (response.ok) {
                const createdArticleData = await response.json();
                setTitle('');
                setBody('');
                setDate('');
            } else {
                console.log('Error creating new article');
            }
        } catch (error) {
            console.error('Error creating new article: ', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="border rounded-lg border-[#000] shadow-lg mx-auto my-5 p-4 w-full">
                <h1 className="text-center text-[20px] my-3 font-bold">Create a New Article</h1>
                {/* Title input */}
                <div>
                    <label htmlFor="title" className="display:block px-3 py-2 text-left my-2 font-medium">Title</label>
                    <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 mb-3 outline-none" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Enter title..." />
                </div>
                {/* Body input */}
                <div>
                    <label htmlFor="body" className="display:block px-3 py-2 text-left my-2 font-medium">Body</label>
                    <textarea className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 outline-none" id="body" value={body} onChange={(e) => setBody(e.target.value)} required placeholder="Enter body..." />
                </div>
                {/* Date input */}
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => formatDate(e.target.value)}
                    />
                </div>
                {/* Submit button */}
                <div>
                    <button className="border rounded-md px-3 py-2 my-2 font-medium bg-[#161437] text-slate-300" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Creating' : 'Create'}
                    </button>
                </div>
            </form>
            {/* Go Back link */}
            <Link href="/">
                <div className="inline-block border rounded-md bg-[#161437] text-slate-300 px-3 py-2">Go Back</div>
            </Link>
        </>
    );
};

export default NewArticle;
