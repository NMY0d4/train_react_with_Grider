import Route from './components/navigation/Route';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/Accordion.pages';
import Sidebar from './components/navigation/Sidebar';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
