import Head from "next/head"

export default function PageHead({ pageHeadConfig }) {

    return (
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <link rel='icon' href='/favicon.ico' />
            <meta name='description' content='academic homepage'/>
            <meta name='author' content={pageHeadConfig.author} />
            <meta name="google-site-verification" content="azQKssn0P_VEdWOVNjf8ZVrmr98SS34mXrKPEOrDjdU" />
            <title>{pageHeadConfig.title}</title>
        </Head>
    )
}
