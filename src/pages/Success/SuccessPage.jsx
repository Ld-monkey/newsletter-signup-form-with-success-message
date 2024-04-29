import { useHistoryState } from 'wouter/use-browser-location';

function SuccessPage() {
  const state = useHistoryState();
  return (
    <>
      <div>SuccessPage</div>
      {state.email && <p>{state.email}</p>}
    </>
  );
}

export default SuccessPage;
