//**The main landing page of the site. */
import ProductList from "../components/ProductList";
import img1 from "../assets/Prodimg1.png"
import img2 from "../assets/Prodimg2.png"
import img3 from "../assets/Prodimg3.png"
import img4 from "../assets/Prodimg4.png"
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
            <div className = 'banner'>
              <h1>S A L E</h1>
            </div>
            <div className="productGrid">
              <div className = 'prodimg'>
                <img src={img1} alt="" id="grid1"></img>
                <button className="cartbutton">Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img2} alt="" id="grid2"></img>
                <button className="cartbutton">Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img3} alt="" id="grid3"></img>
                <button className="cartbutton">Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img4} alt="" id="grid4"></img>
                <button className="cartbutton">Add to Cart</button>
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
                  <span>Kat ⭐⭐⭐⭐⭐</span><br/> After coding for hours, my skin was dry
                  and tired. Silky Smooth Shea Butter Body Lotion saved the day!
                  It's like a mini spa session, leaving my skin soft and
                  rejuvenated. Love it!
                </li>
                <li className="review"><span>Evan ⭐⭐⭐⭐⭐</span><br/>
Silky Smooth Shea Butter Body Lotion is my go-to after coding marathons. It hydrates and nourishes my skin, making it feel amazing. Highly recommend!</li>
                <li className="review"><span>Nikki ⭐⭐⭐⭐⭐</span><br/>
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
