import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'data')

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}