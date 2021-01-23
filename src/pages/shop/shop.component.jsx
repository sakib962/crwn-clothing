import './shop.style.scss';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { Route } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

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
    const {match} = this.props;
    return (
      <div className='shop-page'>
          <Route 
            exact 
            path={match.path} 
            component={CollectionOverviewContainer} 
          />
          <Route 
            path={`${match.path}/:collectionName`}
            component={CollectionPageContainer}
          />
      </div>
    )
  }
}  

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);