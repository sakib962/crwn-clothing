import "./menu-item.style.scss";
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => {
  const {title, size, imageUrl, linkUrl, history} = props;
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${linkUrl}`) }>
      <div 
        className="background-image" 
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  )
}
export default withRouter(MenuItem);