import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="mainApp">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
