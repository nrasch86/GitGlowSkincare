import { Link } from 'react-router-dom';

const ProductList = ({ products, productName }) => {
    if (!products.length) {
        return <h3>No Thoughts Yet</h3>;
      }
    return (<div>
        <h3>{productName}</h3>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <h4>
                {thought.thoughtAuthor} <br />
                <span>
                  had this thought on {product.createdAt}
                </span>
              </h4>
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