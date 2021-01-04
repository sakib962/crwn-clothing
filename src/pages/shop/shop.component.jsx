import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import ShopData from './shop.data'
import './shop.style.scss';

const ShopPage = () => {
 return (
   <div>
     {ShopData.map(({id, ...collection}) => {
       return <CollectionPreview key={id} {...collection}/>
     })}
   </div>
 )
}

export default ShopPage;