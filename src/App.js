import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebars.jsx'
import { PageProvider } from './context/page';

function App() {
  return (
    <div className="App">
      <PageProvider>
      <Navbar />
      <Sidebar />
      </PageProvider>
    </div>
  );
}

export default App;
