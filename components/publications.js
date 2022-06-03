import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileCode,faCode, prefix } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"

export default function Publication({ pubConfig }) {
    return (
        <div className={styles.chapter} id="publications">
            <h1 className={styles.chapter_title}>Publications</h1>
            <div className={styles.pub_list}>
                {pubConfig.publications.map(({ prefix,title,authors,description,year,pdf,code }) => (
                    <div className="" key="">
                        <div className={styles.pub_title}>
                            <FontAwesomeIcon icon={faBookmark} />
                            {prefix && <a>[{prefix}]</a>}
                            &nbsp;{title}
                            {pdf && <a href={pdf}><FontAwesomeIcon icon={faFilePdf} /></a>}
                            {code && <a href={code}><FontAwesomeIcon icon={faFileCode} /></a>}
                        </div>
                        <div className={styles.pub_author} dangerouslySetInnerHTML={{ __html: authors }} />
                        <div className={styles.pub_des} dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                ))}
            </div>
        </div>
    )
}