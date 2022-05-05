import styles from './styles.module.css'

export default function Header({ headerConfig }) {
    const contents = headerConfig.contents.map(content => {
        const title = content
        const mark = "#" + content
        return {
            title,
            mark
        }
    })

    return (
        <header className={styles.header}>
            <div className={styles.header_list}>
                {contents.map(({ title, mark }) => (
                    <div className={styles.header_item} key="">
                        <a href={mark}>{title}</a>
                    </div>
                ))}
            </div>
        </header>
    )
}