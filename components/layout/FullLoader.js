// Loading Spinner
export default function FullLoader({ show }) {
  return show ? (
    <div className="fixed flex items-center justify-center z-[1000] left-[50%] top-[50%] flex-col fade-effect-fast">
      {" "}
      <div className="loader-full"></div>
      <div className="loader-text fre"></div>
    </div>
  ) : null;
}
