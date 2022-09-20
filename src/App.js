import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 50000, id: 1 },
    { name: 'phone', price: 30000, id: 2 },
    { name: 'tablet', price: 35000, id: 3 },
    { name: 'watch', price: 20000, id: 4 },
    { name: 'laptop', price: 45000, id: 5 },
  ]
  // add a new property to the object which will have unique value and use that property for the key attribute.
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price} key={product.id}></Product>)
      }
      {/* <Product></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
