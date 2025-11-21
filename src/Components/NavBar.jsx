import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">
            Emojipedia <span>📖</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                 Emojis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stickers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Emojis Combiner
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Latest News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
