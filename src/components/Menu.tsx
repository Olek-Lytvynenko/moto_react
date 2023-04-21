import { navList } from '../api/navList';

export const Menu = () => {
  return (
    <nav id="menu" className="page__menu menu">
      <div className="container">
        <div className="menu__content">
          <nav className="nav menu__nav">
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
    </nav>
  )
}
