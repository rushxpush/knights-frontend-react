import './App.css'
import { CreateKnight } from './components/CreateKnight/CreateKnight'
import { WeaponsProvider } from './context/WeaponsContext'

function App() {

  return (
    <>
      <WeaponsProvider>
        <CreateKnight />
      </WeaponsProvider>
    </>
  )
}

export default App
