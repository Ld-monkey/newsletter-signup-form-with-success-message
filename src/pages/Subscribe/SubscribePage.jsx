import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

function SubscribePage() {
  /* Navigate hook from react router dom */
  const navigate = useNavigate();

  /* Email states */
  const [email, setEmail] = useState('');
  const [valideEmail, setValideEmail] = useState(false);

  /* Error state */
  const [showError, setShowError] = useState(false);

  function validateEmail(email) {
    if (!email) return false;
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }

  function handleEmail(emailValue) {
    if (emailValue.length >= 0) {
      setValideEmail(false);
      setShowError(false);
    }
    setEmail(emailValue);
  }

  function handleButtonValidation() {
    if (validateEmail(email)) {
      setValideEmail(true);
      setShowError(false);

      navigate('/success', { state: { email } });
    } else {
      setValideEmail(false);
      setShowError(true);
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleButtonValidation();
  }

  return (
    <main className="flex h-screen items-center justify-center bg-dark-slate-grey">
      <section className="m-auto flex h-full w-[375px] max-w-full flex-col bg-white sm:h-[641px] sm:w-[928px] sm:max-w-[90vw] sm:flex-row-reverse sm:justify-between sm:gap-6 sm:rounded-[36px] sm:p-6">
        <div className="min-h-[284px] bg-signup_mobile bg-cover bg-center bg-no-repeat sm:w-[400px] sm:rounded-2xl sm:bg-slate-900 sm:bg-signup_desktop sm:bg-right" />
        <div className="flex flex-col gap-10 px-6 py-10 sm:w-[456px] sm:items-center sm:justify-center md:px-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-dark-slate-grey sm:text-[56px]">
              Stay updated!
            </h1>
            <p className="text-dark-slate-grey">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="ml-6 space-y-2.5 text-dark-slate-grey">
              <li className="list-image-icon-success pl-[11px]">
                <p className="relative -top-[5.5px]">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="list-image-icon-success pl-[11px]">
                <p className="relative -top-[5.5px]">
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="list-image-icon-success pl-[11px]">
                <p className="relative -top-[5px]">And much more!</p>
              </li>
            </ul>
          </div>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className="flex justify-between">
              <label
                htmlFor="email"
                className="text-xs font-bold text-dark-slate-grey"
              >
                Email address
              </label>
              {showError && (
                <span className="text-xs font-bold text-tomato">
                  Valid email required
                </span>
              )}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className={`mb-6 mt-2 w-full rounded-lg border border-grey px-6 py-4  ${showError ? 'border-tomato bg-tomato/15 text-tomato' : ''} text-dark-slate-grey`}
              placeholder="email@company.com"
              onChange={(e) => handleEmail(e.target.value)}
              required
            />
            <Button setNavigation={() => handleButtonValidation}>
              Subscribe to monthly newsletter
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SubscribePage;
