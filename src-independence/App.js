import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Menu from "./components/menu";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import Q5 from "./components/Q5";
import Q6 from "./components/Q6";

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path="/q3" component={Q3} />
          <Route path="/q4" component={Q4} />
          <Route path="/q5" component={Q5} />
          <Route path="/q6" component={Q6} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
