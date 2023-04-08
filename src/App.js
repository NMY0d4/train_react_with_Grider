import { Fragment } from 'react';
import Animals from './pages/Animals.pages';
import SearchImages from './pages/SearchImages.pages';

function App() {
  return (
    <Fragment>
      <Animals />
      <hr />
      <SearchImages />
    </Fragment>
  );
}

export default App;
