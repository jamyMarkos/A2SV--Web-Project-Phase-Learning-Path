import ArticleList from "@/components/ArticleList";
import Header from "@/components/Header";
import Head from "next/head";

// This is the main home page component
export default function Home({ articles }) {
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
      <ArticleList articles={articles} />
    </div>
  );
}

// Fetch articles using getStaticProps during static site generation
export const getStaticProps = async () => {
  // Fetch articles from the JSON server
  const res = await fetch('http://localhost:5000/posts');
  const articles = await res.json();

  // Return fetched articles as props
  return {
    props: {
      articles
    }
  };
};
