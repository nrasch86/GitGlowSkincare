//**The main landing page of the site. */
import { useQuery } from '@apollo/client'
import ProductList from '../components/ProductViewer'
import { QUERY_PRODUCTS} from '..utils/queries'

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];


  return (
    <main>
      <div /* className = 'container' */>
        {loading ? (
          <div /* className = skeleton */>Loading...</div>
        ) : (
          <>
            <div /* className = 'banner section styling' */></div>
            <div /* className = 'hero section' */></div>
            <div /* className = 'banner section styling' */></div>
            <div /* className = '' */></div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
