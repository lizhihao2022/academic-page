import news from "../data/news"
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function parseNews() {
    let news_list = []
    for (let index=0; index < news.length; index++) {
        const matterResult = matter(news[index].content)
        const processContent = await remark()
            .use(html)
            .process(matterResult.content)
        const contentHtml = processContent.toString()
        news_list[index] = {
            date: news[index].date,
            content: contentHtml
        }
    }
    return news_list
}