import articleStyles from "@/styles/Article.module.css";
import ArticleItem from "./ArticleItem";
import { Blog } from "@/redux/services/blog_api";
interface Prop {
  articles: Blog[];
}
const ArticleList: React.FC<Prop> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-[850px]">
      {articles.map((article) => (
        // <h3>{article.title}</h3>
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
