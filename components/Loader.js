// Loading Spinner
export default function Loader({ show, cN = "" }) {
  return show ? <div className={"loader fade-effect-turbo " + cN}></div> : null;
}
