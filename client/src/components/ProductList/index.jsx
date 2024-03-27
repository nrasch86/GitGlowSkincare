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
                <Link to="/products/product:_id">
                    {/* <img src={product.image} alt={product.name} /> */}
                </Link>
            </div>
        </div>
      )};
   

export default ProductList;