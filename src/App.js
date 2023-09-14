import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes> {/* Use the Routes component to wrap your routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
