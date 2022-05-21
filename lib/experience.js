import experience from "../data/experience"
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function parseExperience() {
    let exp = experience
    for (let index = 0; index < exp.length; index++) {
        const matterResult = matter(exp[index].description)
        const processContent = await remark()
            .use(html)
            .process(matterResult.content)
        exp[index].description = processContent.toString()
    }
    return exp
}