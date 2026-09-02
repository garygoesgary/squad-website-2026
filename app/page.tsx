export default function Home() {
  return (
    <main className="page-black">
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#">
            <img
              className="logo-lockup"
              src="/images/squad-logo-lockup-1-line.svg"
              alt="Squad — hospitality talent scouts"
            />
          </a>
          <nav className="main-nav">
            <a href="#">what we do</a>
            <a href="#">who we are</a>
            <a href="#">talk to us</a>
          </nav>
          <a className="btn-outline" href="tel:1300491856">
            Lets Talk: 1300 491 856
          </a>
        </div>
      </header>
    </main>
  );
}
