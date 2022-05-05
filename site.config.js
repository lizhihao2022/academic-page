import { faGithub,faGoogle,faZhihu,faTwitter,faWeixin,faWeibo,faQq  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const siteConfig = {
    // basic info
    author: "Zhihao LI",
    author_cn: "李志豪",
    domain: "https://lizhihao.me",
    title: "Zhihao LI | Homepage",

    descriptions: [
        "Senior Undergraduate",
        "Harbin Institute of Technology, Shenzhen",
    ],

    // https://fontawesome.com/icons
    socials: [
        {name: "email", url: "mailto:[180110606@stu.hit.edu.cn]", icon: faEnvelope},
        {name: "github", url: "https://github.com/lizhihao2022", icon: faGithub},
        {name: "google", url: "https://scholar.google.com/citations?hl=en&user=hDVWqfYAAAAJ", icon: faGraduationCap}
    ],

    contents: [
        "biography",
        "publications",
    ],
}

module.exports = siteConfig