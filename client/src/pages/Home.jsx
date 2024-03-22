//**The main landing page of the site. */
import { useQuery } from "@apollo/client";
import ProductList from "../components/ProductList";
import ProductReviews from "../components/ProductReviews";
// import { QUERY_PRODUCTS } from "..utils/queries";
// import { QUERY_REVIEWS } from "..utils/queries";

const Home = () => {
  const loading = false;
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  return (
    <main>
      <div /* className = 'container' */>
        {loading ? (
          <div /* className = skeleton */>Loading...</div>
        ) : (
          <>
            <div /* className = 'banner section styling' */>
              <img></img>
            </div>
            <div /* className = 'hero section' */>
              <div /* className = 'product shot grid' */></div>
              <div /* className = 'product shot grid' */></div>
              <div /* className = 'product shot grid' */></div>
              <div /* className = 'product shot grid' */></div>
            </div>
            <div /* className = 'magazine logos' */>
              <ul>
                <li>
                  <img src="" alt="randomMagazine 1" />
                  <img src="" alt="randomMagazine 2" />
                  <img src="" alt="randomMagazine 3" />
                </li>
              </ul>
            </div>
            <div /* className = 'shop Hero section' */>
              <ProductList />
            </div>
            <div /* className = 'reviews section' */>
              <ProductReviews />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
