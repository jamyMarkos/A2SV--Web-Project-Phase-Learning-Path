import ArticleList from "@/components/ArticleList";
import Header from "@/components/Header";
import { useGetBlogsQuery } from "@/redux/hooks/blogHooks";
import { Blog } from "@/redux/services/blog_api";
import Head from "next/head";
import React from "react";

// This is the main home page component
export default function Home() {
  const { data, isLoading, error } = useGetBlogsQuery();
  if (isLoading) return <div>Loading</div>;
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  return (
    <div>
      {/* Set metadata for the page */}
      <Head>
        <title>WebDev newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      {/* Render the header component */}
      <Header />
      {/* Pass the fetched articles to the ArticleList component */}
      <ArticleList articles={data!} />
    </div>
  );
}

// Fetch articles using getStaticProps during static site generation
// export const getStaticProps = async () => {
//   // // Fetch articles from the JSON server

//   // const { data, isLoading, error } = useGetBlogsQuery();

//   // // Return fetched articles as props
//   // return {
//   //   props: {
//   //     articles: data,
//   //   },
//   // };
// };
