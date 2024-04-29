import { Link } from 'wouter';

function SubscribePage() {
  return (
    <>
      <h1>Hello world</h1>
      <Link to="/success" state={{ email: 'a@a.com' }}>
        success
      </Link>
    </>
  );
}

export default SubscribePage;
