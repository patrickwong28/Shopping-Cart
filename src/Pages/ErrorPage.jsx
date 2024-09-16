import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">Return to the home page</Link>
    </div>
  );
}
