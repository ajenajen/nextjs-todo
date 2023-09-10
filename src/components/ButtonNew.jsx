export default function ButtonNew({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 font-semibold hover:text-fuchsia-400 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 stroke stroke-white fill-fuchsia-500 hover:fill-fuchsia-400 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      NEW TASK
    </button>
  );
}
