import articleStyles from '@/styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-[850px]'>
        {articles.map((article) => (
            // <h3>{article.title}</h3>
            <ArticleItem key={article.id} article={article}/>
        ))}
    </div>
  )
}

export default ArticleList