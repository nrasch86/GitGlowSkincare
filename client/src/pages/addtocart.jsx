const product = [
    {
      name: "Revitalizing Vitamin C Eye Serum",
      description: "Stay sharp and focused with our Revitalizing Vitamin C Eye Serum. Packed with vitamin C and caffeine, it banishes dark circles and puffiness, ensuring your eyes reflect your coding prowess. Keep your vision clear, your ideas bright, and your eyes ready for the next big breakthrough.",
      image: "../../client/src/assets/blue_vial_product.png",
      price: 29.99
    },
    {
      name: "Balancing Tea Tree & Green Tea Cleanser",
      description: "Streamline your skincare routine with our Balancing Tea Tree & Green Tea Cleanser. Infused with tea tree oil and green tea extract, it clears away impurities and keeps breakouts at bay. Just like your code, keep your skin clean, balanced, and ready to tackle any challenge.",
      image: "../../client/src/assets/blue_dropper_product.png",
      price: 14.99
    },
    {
      name: "Youthful Glow Retinol Night Cream",
      description: "Our Youthful Glow Retinol Night Cream is your secret weapon for radiant skin, even after marathon coding sessions. Powered by retinol and argan oil, it fights fine lines and keeps your skin looking fresh. Let your code shine, and let your skin glow with confidence, night after night.",
      image: "../../client/src/assets/pink_jar_product.png",
      price: 59.99
    },
    {
      name: "Hydro-Boost Hyaluronic Acid Sheet Mask",
      description: "Recharge your skin''s batteries with our Hydro-Boost Hyaluronic Acid Sheet Mask. With hydrating hyaluronic acid and soothing aloe vera extract, it revitalizes tired, stressed skin in just minutes. So take a break, rejuvenate your skin, and come back to your code with renewed focus and energy.",
      image: "../../client/src/assets/orange_dropper_product.png",
      price: 39.99
    },
    {
      name: "Silky Smooth Shea Butter Moisturizer",
      description: "Treat yourself to our Silky Smooth Shea Butter Body Lotion after a long day of coding. With shea butter and coconut oil, it replenishes moisture and soothes tired skin. Because just like your code, your skin deserves to be smooth, efficient, and ready for whatever comes next.",
      image: "../../client/src/assets/blue_jar_product.png",
      price: 25.99
    }
  ]
  

  const cartProduct = [...new Set(product.map((item)=> {
    return item;
  }))]

      let i =0;
    document.getElementById('root').innerHTML = product.map((item) =>{
      var {image, name, price} = item;
   
    return (
            `<div class = 'box'>
                <div class = 'img-box'>
                    <img class = 'images' src = ${image}></img>
                </div>
              <div class = 'bottom'> 
              <p> ${name}</p>
              <h2> ${price}</h2>` +
              "<button onclick = 'addtocart("+(i++)+")'>Add to cart</button>" +
              `</div>
              </div>`
    )
    }).join("")
  

    export default cartProduct;

  //  const cartProduct = ({ products, addToCart }) => {

  
  //   return (
  //     <div id="cartroot">
  //       <div className="products">
  //         {products.map((item, i) => (
  //           <div key={i} className="box">
  //             <div className="img-box">
  //               <img className="images" src={item.image} alt={item.name} />
  //             </div>
  //             <div className="bottom">
  //               <p>{item.name}</p>
  //               <h2>$ {item.price}</h2>
  //               <button onClick={() => addToCart(item)}>Add to cart</button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  
  //  export default cartProduct;