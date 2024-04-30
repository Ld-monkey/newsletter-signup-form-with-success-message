function Button({ children, setLocation }) {
  return (
    <button
      type="button"
      className="hover:bg-gradient-button hover:shadow-orange-btn mt-6 h-14 w-full rounded-lg bg-dark-slate-grey text-center font-bold text-white"
      onClick={setLocation()}
    >
      {children}
    </button>
  );
}

export default Button;
