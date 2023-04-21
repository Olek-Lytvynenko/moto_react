import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { png, svg } from "../api/SvgR";
import { navList } from '../api/navList';
import { Menu } from "./Menu";

function Header() {
  const [scroll, setScroll] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      window.onresize = () => {setWindowWidth(window.innerWidth)};
      return () => {window.onresize};
  }, [windowWidth]);

  console.log(windowWidth);
  

  useEffect(() => {
    const onScroll = () => setScroll(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={classNames('header', {'header__dynamic': !scroll})}>
      <div className='container'>
          <div className="header__top-action">
            <a href="#" className="logo">
            <img
              className="logo__img"
              alt="moto logo"
              src={png.logo}
            />
            </a>
            <nav className={classNames("nav header__nav", {"header__nav--min": windowWidth < 768})}>
                <ul className={classNames("nav__list", {"nav__list--min": windowWidth < 768})}>
                  {navList.map(item => (
                    <li className={classNames("nav__item", {"nav__item--min": windowWidth < 768})}>
                      <a 
                        className={classNames("nav__link", {"nav__link--min": windowWidth < 768})}
                        href={item.href}>{item.title}</a>
                    </li>
                  ))}
                </ul>
                <button className={classNames("header__button", {"header__button--min": windowWidth < 768})}>Download</button>
            </nav>
            {windowWidth < 768 
              &&
              <a
                href="#menu"
                className='header__icon-container' 
                onClick={() => {return <Menu />}}>
                <img
                  src={svg.menu}
                  alt=''
                  className="header__img"/>
              </a> }
        </div>
      </div>
    </header>
  )
}

export default Header;
