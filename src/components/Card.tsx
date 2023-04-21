import { FooterData } from "../type/FooterData";
import { svg } from '../api/SvgR';

type Props = {
  data: FooterData,
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className={`footer__${data.group}-card`}>
      <div className={`footer__icon-container footer__icon-container--${data.group}`}>
        {/* <span className={`icon icon--${data.name} footer__icon footer__icon--${data.group}`}></span> */}
        <img 
          src={svg[data.name as keyof typeof svg]}
          alt={`icon ${data.name}`}
          className={`footer__icon footer__icon--${data.group}`}/>
      </div>
    { data.group === 'contact'
      ? <div className={`footer__${data.group}-description`}>
        <a href="#" className="footer__link">
          <p>{data.content[0]} <br /> {data.content[1]}</p>
        </a>
        </div>
      : null
    }
    </div>
  )
}

export default Card;
