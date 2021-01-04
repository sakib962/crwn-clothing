import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';


const CollectionPreview = (props) => {
  console.log(props)
  const {title, items} = props

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items
            .filter((item, index) => index < 4)
            .map(({id, ...item}) => {
            return <CollectionItem key={id} {...item}/>
          })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;