import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';


const CollectionPreview = (props) => {
  const {title, items} = props

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
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

export default CollectionPreview;