import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  console.log("pages", pages);

  return (
    <BrowserRouter>
      <Routes pages={pages} />
    </BrowserRouter>
  );
}
