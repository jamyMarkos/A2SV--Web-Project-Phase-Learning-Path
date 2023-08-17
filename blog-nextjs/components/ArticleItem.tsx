// Import required styles and components
import { Blog } from "@/redux/services/blog_api";
import articleStyles from "@/styles/Article.module.css";
import Link from "next/link";
import React, { useState } from "react";
interface Prop {
  article: Blog;
}
// This component represents an individual article item
const ArticleItem: React.FC<Prop> = ({ article }) => {
  // State to track hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border rounded-md border-black-800 px-2 py-1 shadow-lg ${
        isHovered ? "hover:scale-105" : "hover:-translate-y-1"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Link to the individual article page */}
      <Link
        href="/article/[id]"
        as={`/article/${article.id}`}
        passHref
        legacyBehavior
      >
        <div className="border rounded border-black-400">
          {/* Article title */}
          <h3 className="font-bold text-l text-center capitalize">
            {article.title} &rarr;
          </h3>
          {/* Article excerpt */}
          <p className="m-1 text-[12px]">{article.body.substring(0, 150)}...</p>
          {/* "Read more" link */}
          <Link
            href="/article/[id]"
            as={`/article/${article.id}`}
            passHref
            legacyBehavior
          >
            <span className="border-none text-blue-500 underline text-blue ml-3 mt-2 text-[12px]">
              Read more
            </span>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
