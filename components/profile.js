import Image from "next/image"
import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Profile({ profileConfig }) {
const descriptions = profileConfig.descriptions.map(description => {
    const content = description
    return {
        content
    }
})

const socials = profileConfig.socials.map(social => {
    const name = social.name
    const url = social.url
    const icon = social.icon

    return {
        name,
        url,
        icon
    }
})

    return (
        <div>
            <div className={styles.profile}>
                <div className={styles.profile_img}>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        height={166}
                        width={166}
                        alt={profileConfig.author}
                    />
                </div>
                <div className={styles.profile_text}>
                    <div className={styles.profile_author}>
                        <a>{profileConfig.author}</a>&nbsp;&nbsp;
                        <a>({profileConfig.author_cn})</a>
                    </div>
                    <div className={styles.profile_description}>
                        {descriptions.map(({ content }) => (
                            <p key="">{content}</p>
                        ))}
                    </div>
                    <div className={styles.profile_social}>
                        {socials.map(({ name, url, icon }) => (
                            <a className={styles.social} key={name} href={url}>
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}