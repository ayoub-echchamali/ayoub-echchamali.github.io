const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block' }}>
      <time>{YEAR}</time> © Ayoub Ech Chamali.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
