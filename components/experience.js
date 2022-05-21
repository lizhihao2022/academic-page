import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function Experience({ expConfig }) {
    return (
        <div className={styles.chapter} id="experience">
            <h1 className={styles.chapter_title}>Experience</h1>
            <div className={styles.exp_list}>
                {expConfig.experience.map(({ start,end,institute,position,description }) => (
                    <div className={styles.exp_item} key="">
                        <FontAwesomeIcon icon={faBriefcase} />
                        &nbsp;&nbsp;
                        <b>{start}-{end}&nbsp;·&nbsp;
                        {institute}&nbsp;·&nbsp;
                        {position}</b>
                        &nbsp;&nbsp;
                        <div className={styles.exp_des} dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                ))}
            </div>
        </div>
    )
}
