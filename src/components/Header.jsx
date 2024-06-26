import { headerNav } from "@/constants";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__innter">
        <h1 className="header__logo">
          <a href="#">PORTPORIO</a> <em>Next.js</em>
        </h1>
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          role="button"
          aria-label="모바일 메인 메뉴"
          id="header-Toggle"
          className="header__nav__mobile"
          aria-expanded={show ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}
