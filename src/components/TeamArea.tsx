import classNames from "classnames"
import { png } from "../api/SvgR"
import { teamData } from "../api/teamData"

export const TeamArea = () => {
  return (
    <section className='team'>
      <div className="container">
        <div className="team__content grid">
          {teamData.map(item => (
            <div key={item.id} className={classNames(
              'team__card grid__item',
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
