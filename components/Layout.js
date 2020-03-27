// import Header from './header'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//   </div>
// )

// export default Layout

// import Header from './Header';

// Method 1 - Layout as a Higher Order Component

// import Header from './header'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   )
// }

// export default withLayout

// Method 2 - Page content as a prop

// import Header from './header'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.content}
//   </div>
// )

// export default Layout
//-----------------------------------------------------------------------------

import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
