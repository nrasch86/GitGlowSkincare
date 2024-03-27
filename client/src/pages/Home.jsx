//**The main landing page of the site. */
import { useQuery } from "@apollo/client";
import ProductList from "../components/ProductList";
// import { QUERY_PRODUCTS } from "..utils/queries";
// import { QUERY_REVIEWS } from "..utils/queries";

import "../CSS/Home.css"


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
              <p>SALE</p>
            </div>
            <div className="productGrid">
              <div /* className = 'product shot grid' */>
                <img src="./" alt=""></img>
              </div>
              <div /* className = 'product shot grid' */>
                <img src="./" alt=""></img>
              </div>
              <div /* className = 'product shot grid' */>
                <img src="./" alt=""></img>
              </div>
              <div /* className = 'product shot grid' */>
                <img src="./" alt=""></img>
              </div>
            </div>
            <div className="magazineLogo">
              <ul>
                <li>
                  {/* <img src="./assets/" alt="randomMagazine 1" />
                  <img src="" alt="randomMagazine 2" />
                  <img src="" alt="randomMagazine 3" /> */}
                </li>
              </ul>
            </div>
            <div /* className = 'shop Hero section' */>
              <ProductList />
            </div>
            <div className="reviewSection">
              <ul>
                <li className="review">
                  <span>Kat</span><br/> After coding for hours, my skin was dry
                  and tired. Silky Smooth Shea Butter Body Lotion saved the day!
                  It's like a mini spa session, leaving my skin soft and
                  rejuvenated. Love it!
                </li>
                <li className="review"><span>Evan</span><br/>
Silky Smooth Shea Butter Body Lotion is my go-to after coding marathons. It hydrates and nourishes my skin, making it feel amazing. Highly recommend!</li>
                <li className="review"><span>Nikki</span><br/>
After long coding nights, my tired eyes needed help. Revitalizing Vitamin C Eye Serum is my go-to solution. It banishes dark circles and puffiness, leaving me looking awake and refreshed. A must-have for any coder!</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
