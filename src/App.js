import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import StageFirst from "./views/First/StageFirst"
import StageSecond from "./views/Second/StageSecond"
// import Nav from "./views/components/nav/Nav"
import StageThird from './views/Third/StageThird';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StageFirst />} />
        <Route path="/stage-two" element={<StageSecond />} />
        <Route path="/stage-three" element={<StageThird />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
