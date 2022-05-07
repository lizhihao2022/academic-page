import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer({ footerConfig }) {
    var date = new Date
    const year = date.getFullYear()

    return (
        <footer className={styles.footer}>
            <p className={styles.footer_name}>
                <FontAwesomeIcon icon={faCopyright} />
                &nbsp;{year} by {footerConfig.author}
            </p>
            <p className={styles.footer_template}>
                Template from <a href='https://github.com/lizhihao2022/academic-page'>Zhihao LI</a>
            </p>
        </footer>
    )
}