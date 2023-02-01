import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { Quiz } from "./pages/Quiz/Quiz";

function App() {
  return (
    <HashRouter>
      <div className="mainApp">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/quiz/:type" element={<Quiz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
