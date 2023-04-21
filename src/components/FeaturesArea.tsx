import className from "classnames";
import { featuresData } from "../api/featuresData";
import { svg } from '../api/SvgR';

function FeaturesArea() {
  return (
    <section id="features" className='features'>
      <div className="container">
        <div className="features__content grid">
          <div className="features__description grid__item--desktop-1-12 grid__item--tablet-1-6">
            <h1 className="features__title">Best Features</h1>
            <p className="features__subtitle">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds.</p>
          </div>
          {featuresData.map(item => (
            <div className={className('features__card grid__item', item.gridTablet, item.gridDesctop)}>
              <div className='features__icon-container'>
                <img 
                  src={svg[item.icon as keyof typeof svg]} 
                  alt="" 
                  className={`features__icon features__icon--${item.icon}`}
                />
              </div>              
              <div className="features__card-description">
                <h2 className="features__card-title">{item.title}</h2>
                <p className="features__card-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesArea;
