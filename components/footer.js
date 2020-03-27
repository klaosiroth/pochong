import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="">
          <h3 className="">Statically Generated with Next.js.</h3>
          <div className="">
            <a href="https://nextjs.org/docs/basic-features/pages" className="">
              Read Documentation
            </a>
            {/* <a
              href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
          </div>
        </div>
      </Container>
      <style jsx>{`
        footer {
          background-color: #fafafa;
          border-top: 1px solid #eaeaea;
        }
      `}</style>
    </footer>
  )
}
