import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebars.jsx";
import AddNote from "./components/AddNote/AddNote";
import RenderNotes from "./components/RenderNotes/RenderNotes";
import { PageProvider } from "./context/page";
import { SidebarProvider } from "./context/sidebar";
import { NotesProvider } from "./context/notes-provider";


function App() {
  return (
    <div className="App">
      <PageProvider>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <NotesProvider>
            <AddNote />
            <RenderNotes />
          </NotesProvider>
        </SidebarProvider>
      </PageProvider>
    </div>
  );
}

export default App;
