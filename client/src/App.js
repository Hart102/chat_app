import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  '../src/css/main.css'
import Index from "./pages/Index";
import Chart from "./pages/Chart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 