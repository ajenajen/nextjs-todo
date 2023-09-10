import React from "react";

export default function Select({
  label,
  handleChangeValue,
  name,
  value,
  options,
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
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none w-full">
          <select
            name={name}
            id={name}
            value={options.find((option) => option.value === value)}
            autoComplete={name}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-0 w-full"
            onChange={handleChangeValue}
          >
            {options?.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
