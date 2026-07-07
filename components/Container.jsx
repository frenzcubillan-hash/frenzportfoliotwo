export default function Container({ children }) {
  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10">
      {children}
    </div>
  );
}