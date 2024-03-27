import { Link } from 'react-router-dom';

const ProductList = () => {
    // if (!products.length) {
    //     return <h3>No Products Yet</h3>;
    return (
        <div>
            <h3>Our Products:</h3>
            <div>
                <div>
                    <p>Product Description</p>
                </div>
                <Link to="/products/1">
                    {/* <img src={product.image} alt={product.name} /> */}
                </Link>
            </div>
        </div>
      )};
    // return (<div>
        {/* <h3>{productName}</h3>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <div>
                <p>{product.description}</p>
              </div>
              <Link
                to={`/products/${product._id}`}
              >
                
              </Link>
            </div>
          ))} */}

    //   </div>);
// }

export default ProductList;