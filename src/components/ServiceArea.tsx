import classNames from "classnames";
import { png } from "../api/SvgR";
import { serviceData } from "../api/serviceData";

function ServiceArea() {

  return (
    <section className='service'>
      <div className="container">
        <div className="service__content grid">
          {serviceData.map(item => (
            <div key={item.id} className={classNames(
              'service__card grid__item',
              item.gridTablet,
              item.gridDesctop
            )}>
              <div className='service__img-container'>
                <img 
                  src={png[item.icon as keyof typeof png] }
                  alt={`icon ${item.icon}`} 
                  className="service__img"/>
              </div>
              <div className="service__description grid__item">
                <h2 className="service__title">{item.title}</h2>
                <p className="service__subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceArea;
