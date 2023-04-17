import './index.css';
// import './index-bulma.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BooksProvider } from './context/books.context';
import { NavigationProvider } from './context/navigation.context';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <BooksProvider>
  <NavigationProvider>
    <App />
  </NavigationProvider>
  </BooksProvider>
);
