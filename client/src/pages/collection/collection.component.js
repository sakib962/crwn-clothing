import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.select';
import './collection.styles.scss';


const CollectionPage = ({collection}) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, otherProps) => ({
  collection: selectCollection(otherProps.match.params.collectionName)(state)
})

export default connect(mapStateToProps)(CollectionPage);