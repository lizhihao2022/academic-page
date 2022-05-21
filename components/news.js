import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSplotch,faWandMagicSparkles,faMeteor } from '@fortawesome/free-solid-svg-icons'

export default function News({ newsConfig }) {
    return (
        <div className={styles.news}>
            <div className={styles.news_title}><FontAwesomeIcon icon={faWandMagicSparkles} />&nbsp;News</div>
            <div className={styles.news_list}>
                {newsConfig.news.map(({ date,content }) => (
                    <div className={styles.news_item} key="">
                        <FontAwesomeIcon icon={faMeteor} />
                        &nbsp;<b>{date}</b>&nbsp;&nbsp;
                        <div className={styles.news_content} dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                ))}
            </div>
        </div>
    )
}