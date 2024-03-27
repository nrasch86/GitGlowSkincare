import { Link } from 'react-router-dom';

const ProductList = ({ products, productName }) => {
    if (!products.length) {
        return <h3>No Products Yet</h3>;
      }
    return (<div>
        <h3>{productName}</h3>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <div>
                <p>{product.description}</p>
              </div>
              <Link
                to={`/thoughts/${product._id}`}
              >
                
              </Link>
            </div>
          ))}

      </div>);
}

export default ProductList;