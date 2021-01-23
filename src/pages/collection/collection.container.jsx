import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.select';
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});
// const mapStateToProps = state => ({
//   isLoading: !selectIsCollectionsLoaded(state)
// });

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer;