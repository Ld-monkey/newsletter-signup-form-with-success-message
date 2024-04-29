import { useState } from 'react';
import { useLocation } from 'wouter';

function SubscribePage() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useLocation();

  function handleToggleEmail(str) {
    setEmail(str);
  }

  return (
    <main>
      <section className="flex flex-col">
        <div className="min-h-[284px] bg-signup_mobile bg-cover bg-center sm:bg-signup_desktop" />
        <article className="flex flex-col gap-10 px-6 py-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-dark-slate-grey">
              Stay updated!
            </h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="ml-6 space-y-2.5">
              <li className="list-image-icon-success pl-[11px] ">
                <p className="relative -top-[5.5px]">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="pl-[11px]">
                <p className="relative -top-[5.5px]">
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="pl-[11px]">
                <p className="relative -top-[5px]">And much more!</p>
              </li>
            </ul>
          </div>
          <form>
            <label
              htmlFor="email"
              className="text-xs font-bold text-dark-slate-grey"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 w-full rounded-lg border border-grey px-6 py-4"
              placeholder="email@company.com"
              onChange={(e) => handleToggleEmail(e.target.value)}
            />
            <button
              type="button"
              className="mt-6 h-14 w-full rounded-lg bg-dark-slate-grey text-center font-bold text-white"
              onClick={() =>
                setLocation('/success', { state: { email: email } })
              }
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

export default SubscribePage;
