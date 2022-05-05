import Layout from '../components/layout'
import { getPostData } from "../lib/posts"

export default function Home({ biography }) {
  return (
    <Layout biograph={biography} />
  )
}

export async function getStaticProps() {
  const biography = await getPostData('biography')

  return {
      props: {
          biography
      }
  }
}