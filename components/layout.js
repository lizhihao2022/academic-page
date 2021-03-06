import Footer from './footer'
import Header from './header'
import Profile from "./profile"
import PageHead from './pagehead'
import Main from './main'
import News from './news'
import siteConfig from "../site.config"
import styles from './styles.module.css'

export default function Layout({ news,biograph,publications,experience }) {
    const mainConfig = {
        author: siteConfig.author,
        description: siteConfig.description
    }

    const profileConfig = {
        author: siteConfig.author,
        author_cn: siteConfig.author_cn,
        descriptions: siteConfig.descriptions,
        socials: siteConfig.socials,
    }
    
    const footerConfig = {
        author: siteConfig.author,
    }
    
    const headerConfig = {
        author: siteConfig.author,
        contents: siteConfig.contents,
    }
    
    const pageHeadConfig = {
        author: siteConfig.author,
        title: siteConfig.title,
    }

    const newsConfig = {
        news: news
    }

    const pubConfig = {
        publications: publications
    }

    const expConfig = {
        experience: experience
    }

    return (
        <div className={styles.container}>
            <PageHead pageHeadConfig={pageHeadConfig}  />
            <Header headerConfig={headerConfig} />
            <Profile profileConfig={profileConfig} />
            <News newsConfig={newsConfig} />
            <Main 
                biography={biograph} 
                mainConfig={mainConfig} 
                pubConfig={pubConfig}
                expConfig={expConfig}
            />
            <Footer footerConfig={footerConfig} />
        </div>
    )
}