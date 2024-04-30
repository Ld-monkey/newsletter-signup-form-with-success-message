function Button({ children, setNavigation }) {
  return (
    <button
      type="button"
      className="hover:bg-gradient-button hover:shadow-orange-btn h-14 w-full rounded-lg bg-dark-slate-grey text-center font-bold text-white"
      onClick={setNavigation()}
    >
      {children}
    </button>
  );
}

export default Button;
