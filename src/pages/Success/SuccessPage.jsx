import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';

function SuccessPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  function handleBtn() {
    navigate('/');
  }

  return (
    <main>
      <section>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{' '}
          {state && state.email ? (
            <span className="font-bold">{state.email}</span>
          ) : (
            ''
          )}
          . Please open it and click the button inside to confirm your
          subscription
        </p>
        <Button setNavigation={() => handleBtn}>Dismiss message</Button>
      </section>
    </main>
  );
}

export default SuccessPage;
