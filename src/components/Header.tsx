import classNames from "classnames";
import { useEffect, useState } from "react";

const navList = [
  {title: 'home', href: '#'},
  {title: 'features', href: '#features'},
  {title: 'pricing', href: '#pricing'},
  {title: 'client', href: '#client'},
  {title: 'team', href: '#team'},
  {title: 'contact', href: '#contact'},
];

function Header() {
  const [scroll, setScroll] = useState<number>(0);

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
              src="../src/image/logo.webp"
            />
            </a>
            <nav className="nav header__nav">
                <ul className="nav__list">
                  {navList.map(item => (
                    <li className="nav__item">
                      <a 
                        className="nav__link"
                        href={item.href}>{item.title}</a>
                    </li>
                  ))}
                </ul>
                <button className='header__button'>Download</button>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
