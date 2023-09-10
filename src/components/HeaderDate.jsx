export default function HeaderDate() {
  const today = new Date(Date.now());

  const date = today.getDate();
  const day = today.toLocaleString("default", { weekday: "long" });
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();

  return (
    <div className="flex items-center justify-center gap-2">
      <h4 className="text-5xl font-bold">{date}</h4>
      <div className="flex flex-col font-medium text-sm">
        <div>{day}</div>
        <div>
          {month} {year}
        </div>
      </div>
    </div>
  );
}
