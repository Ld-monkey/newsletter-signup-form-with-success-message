import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import IconSuccess from '../../assets/images/icon-success.svg';

function SuccessPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  function handleBtn() {
    navigate('/');
  }

  return (
    <main className="h-screen py-9">
      <section className="m-auto flex h-full w-[90%] max-w-[327px] flex-col">
        <img
          src={IconSuccess}
          alt="The orange icon success"
          className="mb-10 mt-[113px] size-16"
        />

        <h1 className="mb-6 text-[2.5rem] font-bold leading-10 text-dark-slate-grey">
          Thanks for subscribing!
        </h1>
        <p className="flex-1 text-dark-slate-grey">
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
