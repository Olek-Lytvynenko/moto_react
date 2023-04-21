import classNames from "classnames"
import { png } from "../api/SvgR"
import { teamData } from "../api/teamData"

export const TeamArea = () => {
  return (
    <section className='team'>
      <div className="container">
        <div className="team__content grid">
          <div className="team__info grid__item grid__item--tablet-2-5 grid__item--desktop-4-9">
            <h1 className="team__info-title">Lovely Team Member</h1>
            <h2 className="team__info-subtitle">Lorem Ipsum is slechts een
              proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum
              is de standaard proeftekst in deze bedrijfstak sinds.
            </h2>
          </div>
          {teamData.map(item => (
            <div key={item.id} className={classNames(
              'team__card',
              item.gridTablet,
              item.gridDesctop
            )}>
              <div className='team__img-container'>
                <img 
                  src={png[item.icon as keyof typeof png] }
                  alt={`icon ${item.id}`} 
                  className="team__img"/>
              </div>
              <div className="team__description grid__item">
                <h2 className="team__title">{item.title}</h2>
                <p className="team__subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
