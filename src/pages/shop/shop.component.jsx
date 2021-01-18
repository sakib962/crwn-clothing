import './shop.style.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { Route } from 'react-router-dom';
import { Component } from 'react';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    isLoading: true
  }

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
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapShot => {
      const collectionsMap =  convertCollectionsSnapshotToMap(snapShot);
      this.props.updateCollections(collectionsMap);
      this.setState({isLoading: false})
    })
       
  }

  render() {
    const {match} = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
          <Route 
            exact 
            path={match.path} 
            render={(props) => (
              <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
            )} 
          />
          <Route 
            path={`${match.path}/:collectionName`}
            render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
          />
      </div>
    )
  }
}  

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);