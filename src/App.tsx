import './App.css'
import { CreateKnightPage } from './pages/CreateKnightPage.tsx'
import { AttributesProvider } from './context/AttributesContext'
import { WeaponsProvider } from './context/WeaponsContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListKnightPage } from './pages/ListKnightPage.tsx'
import { Navbar } from './components/ui/Navbar.tsx'



function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <WeaponsProvider>
          <AttributesProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<CreateKnightPage />} />
              <Route path="list" element={<ListKnightPage />} />
            </Routes>
          </AttributesProvider>
        </WeaponsProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
