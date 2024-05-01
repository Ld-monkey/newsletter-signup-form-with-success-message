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
    <main className="flex h-screen items-center justify-center bg-dark-slate-grey">
      <section className="m-auto flex h-full w-[375px] flex-col bg-white px-6 py-9 sm:h-[520px] sm:w-[504px] sm:rounded-[36px] sm:px-16 sm:py-12">
        <img
          src={IconSuccess}
          alt="The orange icon success"
          className="mb-10 mt-[113px] size-16 sm:mt-0"
        />

        <h1 className="mb-6 text-[2.5rem] font-bold leading-10 text-dark-slate-grey sm:text-[3.5rem] sm:leading-[3.5rem]">
          Thanks for subscribing!
        </h1>
        <p className="flex-1 text-dark-slate-grey sm:mb-10 sm:flex-none">
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
