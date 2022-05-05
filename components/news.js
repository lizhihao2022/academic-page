import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSplotch,faWandMagicSparkles,faMeteor } from '@fortawesome/free-solid-svg-icons'
import news from '../data/news'

export default function News() {
    return (
        <div className={styles.news}>
            <div className={styles.news_title}><FontAwesomeIcon icon={faWandMagicSparkles} />&nbsp;News</div>
            <div className={styles.news_list}>
                {news.map(({ date,content }) => (
                    <div className={styles.news_item} key="">
                        <p className={styles.news_content}>
                            <FontAwesomeIcon icon={faMeteor} />
                            &nbsp;<b>{date}</b>&nbsp;&nbsp;
                            {content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}