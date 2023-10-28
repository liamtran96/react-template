import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  console.log("pages", pages);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes pages={pages} />
      </Provider>
    </BrowserRouter>
  );
}
