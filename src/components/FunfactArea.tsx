import { funfactData } from "../api/funfactData";
import { Counter } from "./Counter";

export const FunfactArea = () => {
  return (
    <section className="funfact">
      <div className="container">
        <div className="funfact__container">
        {funfactData.map(n =>
          <div className="funfact__card">
            <div className="funfact__count">
              {<Counter val={n.sum} time={n.time} />}
            </div>
            <div className="funfact__title">
              <span>{n.title}</span>
            </div>            
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
