import className from "classnames";
const featuresData = [
  { title: 'Notification Viewing',
    subtitle: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem stand',
    id: 1,
    gridDesctop: 'grid__item--desktop-1-4',
    gridTablet: 'grid__item--tablet-1-3',
    icon: 'alarm',
  },
  { title: 'Creative Design',
    subtitle: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem stand',
    id: 2,
    gridDesctop: 'grid__item--desktop-5-8',
    gridTablet: 'grid__item--tablet-4-6',
    icon: 'light-bulb',
  },
  { title: 'Clean Code',
    subtitle: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem stand',
    id: 3,
    gridDesctop: 'grid__item--desktop-9-12',
    gridTablet: 'grid__item--tablet-1-3',
    icon: 'code',
  },
  { title: 'Full Free Video Call',
    subtitle: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem stand',
    id: 4,
    gridDesctop: 'grid__item--desktop-1-4',
    gridTablet: 'grid__item--tablet-1-3',
    icon: 'ui-video',
  },
  { title: 'Great Support',
    subtitle: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem stand',
    id: 5,
    gridDesctop: 'grid__item--desktop-5-8',
    gridTablet: 'grid__item--tablet-4-6',
    icon: 'ui-head-phone',
  },
  { title: 'Unlimited Features',
    subtitle: 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem stand',
    id: 6,
    gridDesctop: 'grid__item--desktop-9-12',
    gridTablet: 'grid__item--tablet-1-3',
    icon: 'heart',
  },
  
]

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
                <span className={`icon icon--${item.icon} features__icon`}></span>
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
