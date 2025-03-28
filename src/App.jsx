import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
