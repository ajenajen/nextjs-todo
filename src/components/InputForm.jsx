export default function InputForm({
  label,
  placeholder,
  name,
  value,
  error,
  handleChangeValue,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="my-2">
        <div
          className={`flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none w-full ${
            error ? "ring-2 ring-rose-400" : ""
          }`}
        >
          <input
            type="text"
            name={name}
            id={name}
            value={value}
            autoComplete={name}
            className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0`}
            placeholder={placeholder}
            onChange={handleChangeValue}
          />
        </div>
        {error && <div className="text-rose-500 text-sm">{error}</div>}
      </div>
    </div>
  );
}
