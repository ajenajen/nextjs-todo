import { useCallback } from "react";

export default function TodoItem({ data, setTodos }) {
  const bgColor =
    data.status === "done"
      ? "bg-green-600"
      : data.priority === "high"
      ? "bg-orange-600"
      : "bg-sky-500";
  const bgColorHover =
    data.status === "done"
      ? "hover:bg-green-500"
      : data.priority === "high"
      ? "hover:bg-orange-500"
      : "hover:bg-sky-400";

  const handleUpdateStatus = useCallback(
    (data) => {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === data.id
            ? { ...data, status: data.status !== "done" ? "done" : "todo" }
            : item
        )
      );
    },
    [setTodos]
  );

  return (
    <div
      className={`block w-full text-white my-6 p-4 rounded-lg drop-shadow-lg cursor-pointer ${bgColor} ${bgColorHover} transition-all`}
      id={data.id}
      onClick={() => handleUpdateStatus(data)}
    >
      <div className="text-xs font-medium">
        {data.status === "done"
          ? "DONE"
          : data.priority === "high"
          ? "HIGH PRIORITY"
          : "NORMAL PRIORITY"}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium my-0.5">{data.title}</h2>
          <p className="text-sm">{data.desc}</p>
        </div>
        <div className="flex items-center relative">
          <input
            type="checkbox"
            checked={data.status === "done"}
            id={`checked-checkbox-${data.id}`}
            className="w-6 h-6 appearance-none bg-gray-100 border-gray-500 rounded-full cursor-pointer checked:text-green-500"
            readOnly
          />
          {data.status === "done" && <Checked />}
        </div>
      </div>
    </div>
  );
}

function Checked() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8 text-green-600 absolute -left-1 -top-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
