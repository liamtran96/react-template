import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)');

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Routes pages={pages} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}
