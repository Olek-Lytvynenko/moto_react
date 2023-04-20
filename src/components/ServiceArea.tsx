import className from "classnames";
const serviceData = [
  { title: 'Easy To Customize',
    subtitle: 'Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de stan.',
    id: 1,
    gridDesctop: 'grid__item--desktop-1-4',
    gridTablet: 'grid__item--tablet-1-3',
  },
  { title: 'Awesome Design',
    subtitle: 'Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de stan.',
    id: 2,
    gridDesctop: 'grid__item--desktop-5-8',
    gridTablet: 'grid__item--tablet-4-6',
  },
  { title: 'Easy To Use',
    subtitle: 'Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de stan.',
    id: 3,
    gridDesctop: 'grid__item--desktop-9-12',
    gridTablet: 'grid__item--tablet-1-3',
  },
]

function ServiceArea() {

  return (
    <section className='service'>
      <div className="container">
        <div className="service__content grid">
          {serviceData.map(item => (
            <div className={className(
              'service__card grid__item',
              item.gridTablet,
              item.gridDesctop
            )}>
              <div className='service__img-container'>
                <img 
                  src={`../../src/image/icon/service-icon-${item.id}.png`}
                  alt="" 
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
