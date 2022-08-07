import { ArticleInterface } from "src/app/shared/types/article.interface"

export interface GetFeedInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
