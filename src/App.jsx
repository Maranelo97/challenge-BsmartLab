//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Components
import Main from "./components/Main";
import Details from "./components/Details";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
