// import Layout from '../components/Layout'

// export default function About() {
//   return (
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   )
// }

// Method 1 - Layout as a Higher Order Component

// import withLayout from '../components/Layout'

// const Page = () => <p>This is the about page</p>

// export default withLayout(Page)

// Method 2 - Page content as a prop

// import Layout from '../components/Layout.js'

// const aboutPageContent = <p>This is the about page</p>

// export default function About() {
//   return <Layout content={aboutPageContent} />
// }
//-----------------------------------------------------------------------------
import Layout from '../components/layout'
import Head from 'next/head'

export default () => (
  <>
    <Layout>
      <Head>
        <title>Next.js About Example</title>
      </Head>
      <h1>Hello About Page</h1>
    </Layout>
  </>
)
