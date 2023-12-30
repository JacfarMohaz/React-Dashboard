import { Route, Router, Routes } from "react-router-dom"
import Dashboard from "./pages/Dahsboard"
import Product from "./pages/Product"
import Services from "./pages/Services"
import Parent from "./pages/Parent"
import Attendance from "./pages/Attendance"
import Help from "./pages/Help"
import SidePar from "./Components/SidePar"

function App() {
  return <SidePar>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="Product" element={<Product />} />
      <Route path="Services" element={<Services />} />
      <Route path="Parent" element={<Parent />} />
      <Route path="Attendance" element={<Attendance />} />
      <Route path="Help" element={<Help />} />
    </Routes>
  </SidePar>
}

export default App