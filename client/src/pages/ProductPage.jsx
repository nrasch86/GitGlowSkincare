import React, {useEffect, useState } from 'react'

import img1 from "../assets/Prodimg1.png"
import img2 from "../assets/Prodimg2.png"
import img3 from "../assets/Prodimg3.png"
import img4 from "../assets/Prodimg4.png"
import img5 from "../assets/Prodimg5.png"


const ProductPage = () => {

    
    return (
        <div>
            <div className = 'prodimg'>
                <img src={img1} alt="" id="grid1"></img>
                <button>Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img2} alt="" id="grid2"></img>
                <button>Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img3} alt="" id="grid3"></img>
                <button>Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img4} alt="" id="grid4"></img>
                <button>Add to Cart</button>
              </div>
              <div className = 'prodimg'>
                <img src={img5} alt="" id="grid5"></img>
                <button>Add to Cart</button>
              </div>
        </div>
    )
}
export default ProductPage;