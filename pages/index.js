// import Layout from '../components/Layout'

// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   )
// }

// Method 1 - Layout as a Higher Order Component

// import withLayout from '../components/Layout'

// const Page = () => <p>Hello Next.js</p>

// export default withLayout(Page)

// Method 2 - Page content as a prop

// import Layout from '../components/Layout.js'

// const indexPageContent = <p>Hello Next.js</p>

// export default function Index() {
//   return <Layout content={indexPageContent} />
// }
//-----------------------------------------------------------------------------

import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'

export default () => (
  <>
    <Layout>
      <Head>
        <title>Next.js Page Example</title>
      </Head>
      <Container>
        <section className="hero">
          <div className="banner">
            <h1>Hello Pochong</h1>
          </div>
        </section>
        <section className="feature"></section>
        <section className="testimonial"></section>
        <section className="how-to-order"></section>
        <section className="blog"></section>
      </Container>
    </Layout>
  </>
)
