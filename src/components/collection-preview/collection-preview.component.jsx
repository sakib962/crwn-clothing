import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';


const CollectionPreview = (props) => {
  const {title, items, routeName, match, history} = props

  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h1>
      <div className='preview'>
        {
          items
            .filter((item, index) => index < 4)
            .map((item) => {
            return <CollectionItem key={item.id} item={item}/>
          })
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview) ;