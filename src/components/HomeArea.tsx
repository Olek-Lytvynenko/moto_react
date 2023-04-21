import { png } from "../api/SvgR";

function HomeArea() {

  return (
    <section className='home'>
      <div className="container">
        <div className="home__content grid">
          <div className="home__imgContainer grid__item grid__item--tablet-1-2 grid__item--desktop-1-7">
            <img 
              src={png.homeImg}
              alt="3d visual"
              className="home__img"
            />
          </div>
          <div className="home__description grid__item grid__item--tablet-3-6 grid__item--desktop-5-12">
            <h1 className="home__title">Moto All Solution Head</h1>
            <h2 className="home__subtitle">Nulla aliquet, erat a egestas lacinia, leo libero dapibus nisl, quis pulvinar dolor justo id turpis. Nulla odio orci.</h2>
          </div>
          <div className="home__info grid__item grid__item--tablet-3-6 grid__item--desktop-5-12">
          </div>
      </div>
      </div>
    </section>
  )
}

export default HomeArea;

