export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-6 md:px-10 xl:px-12">
      {children}
    </div>
  );
}
