import { Route, Routes } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import UsersPage from "./pages/UsersPage"

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-700 to-teal-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  )
}
export default App
