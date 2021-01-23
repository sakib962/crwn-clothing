import './shop.style.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { Route } from 'react-router-dom';
import { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.select';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

  // note: why do we use this ??
  unsubscribeFromSnapshot = null;
 
  // componentDidMount() {
  //   const collectionRef = firestore.collection('collections');
  //   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
  //     const collectionsMap =  convertCollectionsSnapshotToMap(snapShot);
  //     this.props.updateCollections(collectionsMap);
  //     this.setState({isLoading: false})
  //   })
  // }

  componentDidMount() {
    console.log('shop page did mount')
    this.props.fetchCollectionsStartAsync()
  }

  render() {
    const {match, isCollecionsFetching } = this.props;
    return (
      <div className='shop-page'>
          <Route 
            exact 
            path={match.path} 
            render={(props) => (
              <CollectionOverviewWithSpinner isLoading={isCollecionsFetching} {...props} />
            )} 
          />
          <Route 
            path={`${match.path}/:collectionName`}
            render={(props) => <CollectionPageWithSpinner isLoading={isCollecionsFetching} {...props} />}
          />
      </div>
    )
  }
}  

const mapStateToProps = createStructuredSelector({
  isCollecionsFetching: selectIsCollectionsFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);