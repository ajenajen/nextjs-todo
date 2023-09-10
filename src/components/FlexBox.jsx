export default function FlexBox({ children, className }) {
  return (
    <div
      className={`w-full p-6 border-b-2 border-dashed border-gray-200 flex items-center ${className}`}
    >
      {children}
    </div>
  );
}
