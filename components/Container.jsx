export default function Container({ children, wide = false }) {
  return (
    <div className={`mx-auto w-full px-6 md:px-10 ${wide ? "max-w-[1680px]" : "max-w-[1180px]"}`}>
      {children}
    </div>
  );
}
