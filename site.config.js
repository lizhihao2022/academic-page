import { faGithub,faGoogle,faZhihu,faTwitter,faWeixin,faWeibo,faQq  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const siteConfig = {
    // basic info
    author: "Your Name",
    author_cn: "你的名字", // delete if no
    domain: "https://yourdomain",
    title: "Yourname | Homepage",

    descriptions: [
        "Your title",
        "Your institute",
        "Any information"
    ],

    // https://fontawesome.com/icons for more icons
    socials: [
        {name: "email", url: "mailto:[]", icon: faEnvelope},
        {name: "github", url: "https://github.com/lizhihao2022", icon: faGithub},
        {name: "google scholar", url: "", icon: faGraduationCap},
        {name: "twitter", url:"", icon: faTwitter},
        {name: "weixin", url:"", icon: faWeixin},
        {name: "zhihu", url:"", icon: faZhihu},
        {name: "qq", url:"", icon: faQq},
        {name: "weibo", url:"", icon: faWeibo},
    ],

    contents: [
        "biography",
        "publications",
    ],
}

module.exports = siteConfig