import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Some Store Name</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
