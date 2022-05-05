import styles from "./styles.module.css"
import Publication from "./publication"

export default function Main({ biography,mainConfig,pubConfig }) {
    return (
        <main className={styles.main}>
            <div className={styles.chapter} id="biography">
                <h1 className={styles.chapter_title}>Biography</h1>
                <div className={styles.md} dangerouslySetInnerHTML={{ __html: biography.contentHtml }} />
            </div>
            <Publication pubConfig={pubConfig} />
        </main>
    )
}
