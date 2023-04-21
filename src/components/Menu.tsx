import { navList } from '../api/navList';

export const Menu = () => {
  return (
    <nav className="menu">
      <div className="container">
        <div className="menu__content">
          <nav className="menu__nav">
            <ul className="menu__list">
                  {navList.map(item => (
                    <li className="menu__item">
                      <a 
                        className="menu__link"
                        href={item.href}>{item.title}
                      </a>
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
