import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer({ footerConfig }) {
    var date = new Date
    const year = date.getFullYear()

    return (
        <footer className={styles.footer}>
            <div>
                <FontAwesomeIcon icon={faCopyright} />
                &nbsp;{year} by {footerConfig.author}
            </div>
        </footer>
    )
}