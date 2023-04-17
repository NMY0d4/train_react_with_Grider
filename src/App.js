import Link from './components/navigation/Link';
import Route from './components/navigation/Route';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/Accordion.pages';

function App() {
  return (
    <div>
      <Link to='/accordion'>Go to accordion</Link>
      <Link to='/dropdown'>Go to dropdown</Link>
      <Route path="/accordion">
        <AccordionPage/>
      </Route>
      <Route path="/dropdown">
        <DropdownPage/>
      </Route>
      
    </div>
  );
}

export default App;
