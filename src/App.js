import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebars.jsx";
import AddNote from "./components/AddNote/AddNote";
import RenderNotes from "./components/RenderNotes/RenderNotes";
import Archived from "./components/Archived/Archived";
import Trash from "./components/Trash/Trash";
import { PageProvider } from "./context/page";
import { SidebarProvider } from "./context/sidebar";
import { NotesProvider } from "./context/notes-provider";
import {Routes , Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <PageProvider>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <div className="main-body">

          <NotesProvider>
            <AddNote />
          <Routes>
            <Route path="/" element={<RenderNotes />} />
            <Route path="/archived" element={<Archived />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
            {/* <RenderNotes /> */}
            {/* <Archived /> */}
          </NotesProvider>
          </div>
        </SidebarProvider>
      </PageProvider>
    </div>
  );
}

export default App;
