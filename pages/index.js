import Main from 'src/components/Main'
import Head from 'next/head'
import Image from 'next/image'
import About from 'src/components/About'
import Skills from 'src/components/Skills'
import Projects from 'src/components/Projects'
import Contacts from 'src/components/Contacts'




export default function Home() {
  return (
    <>
      <div>

        <Head >
          <title>Adeosun Oyewale | Full-stack Engineer</title>
          <meta name='Adeosun Oyewale' content='Adeosun Oyewale Oluwapelumi' />
          <link rel='' href='' />
        </Head>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </>
  )
}
