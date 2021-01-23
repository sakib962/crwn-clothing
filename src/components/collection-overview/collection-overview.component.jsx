import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForOverview } from '../../redux/shop/shop.select';

const CollectionOverview = ({collections}) => {
 return (
   <div>
     {collections.map(({id, ...collection}) => {
       return <CollectionPreview key={id} {...collection}/>
     })}
   </div>
 )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForOverview
})
const CollectionOverviewContainer = connect(mapStateToProps)(CollectionOverview);


export default CollectionOverviewContainer;