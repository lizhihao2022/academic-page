import Layout from '../components/layout'
import { parseExperience } from '../lib/experience'
import { parseNews } from '../lib/news'
import { getPostData } from "../lib/posts"
import { parsePublications } from '../lib/publications,js'

export default function Home({ news,biography,publications,experience }) {
  return (
    <Layout news={news} biograph={biography} 
    publications={publications} experience={experience} />
  )
}

export async function getStaticProps() {
  const biography = await getPostData('biography')
  const experience = await parseExperience()
  const news = await parseNews()
  const publications = await parsePublications()
  return {
      props: {
          news,
          biography,
          publications,
          experience
      }
  }
}
