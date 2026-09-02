export default function Home() {
  return (
    <main className="page-black">
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#">
            <img className="logo-badge" src="/images/logo-badge.svg" alt="Squad" />
            <span className="logo-tag">hospitality talent scouts</span>
          </a>
          <nav className="main-nav">
            <a href="#">who is Squad</a>
            <a href="#">Job Seekers</a>
            <a href="#">Sectors</a>
            <a href="#">Get in touch</a>
          </nav>
          <a className="btn-outline" href="tel:1300491856">
            Lets Talk: 1300 491 856
          </a>
        </div>
      </header>
    </main>
  );
}
