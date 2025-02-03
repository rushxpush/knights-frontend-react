import './App.css'
import { CreateKnight } from './components/CreateKnight/CreateKnight'
import { AttributesProvider } from './context/AttributesContext'
import { WeaponsProvider } from './context/WeaponsContext'

function App() {

  return (
    <>
      <WeaponsProvider>
        <AttributesProvider>
          <CreateKnight />
        </AttributesProvider>
      </WeaponsProvider>
    </>
  )
}

export default App
