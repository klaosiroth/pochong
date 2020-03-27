import Link from 'next/link'
// import { render } from 'react-dom'

export default class Header extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out')
    M.Sidenav.init(sidenav, {})
  }
  // show-on-large = show me on desktop
  render() {
    return (
      <header className="">
        <nav>
          <div className="nav-wrapper green darken-4">
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <Link href="/">
              <a className="brand-logo center">Logo</a>
            </Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link href="/">
                  <a className="">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="center">
              <Link href="/">
                <a className="brand-logo">Logo</a>
              </Link>
            </div>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="">About</a>
            </Link>
          </li>
        </ul>
      </header>
    )
  }
}
