import "./menu-item.style.scss";
import { withRouter } from 'react-router-dom';
import { MenuItemContainer } from './menu-item.styles';

const MenuItem = (props) => {
  const {title, size, imageUrl, linkUrl, history} = props;
  return (
    <MenuItemContainer className='menu-item' size={size} onClick={() => history.push(`${linkUrl}`) }>
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
    </MenuItemContainer>
  )
}
export default withRouter(MenuItem);

// const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
//   console.log(match.url, linkUrl)
//   return (
//     <div
//       className={`${size} menu-item`}
//       onClick={() => history.push(`${match.url}${linkUrl}`)}
//     >
//       <div
//         className='background-image'
//         style={{
//           backgroundImage: `url(${imageUrl})`
//         }}
//       />
//       <div className='content'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <span className='subtitle'>SHOP NOW</span>
//       </div>
//     </div>
//   )};

// export default withRouter(MenuItem);