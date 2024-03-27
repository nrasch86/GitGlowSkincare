
import img1 from "../assets/Prodimg1.png"
import img2 from "../assets/Prodimg2.png"


const ProductPage = () => {

    
    return (
        <div>
            <div className = 'prodimg'>
                <img src={img1} alt="" id="grid1"></img>
              </div>
              <div className = 'prodimg'>
                <img src={img2} alt="" id="grid2"></img>
              </div>
        </div>
    )
}
export default ProductPage;