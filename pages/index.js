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

import Layout from '../components/Layout.js'

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout content={indexPageContent} />
}
