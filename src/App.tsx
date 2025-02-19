import './App.css'
import { CreateKnightPage } from './pages/CreateKnightPage.tsx'
import { AttributesProvider } from './context/AttributesContext'
import { WeaponsProvider } from './context/WeaponsContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShowKnightsPage } from './pages/ShowKnightsPage.tsx'
import { Navbar } from './components/ui/Navbar.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { TestPage } from './pages/TestPage.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
// import { ReactQueryTest } from './pages/ReactQueryTest.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { ProtectedRoute } from './features/auth/ProtectedRoute.tsx'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <WeaponsProvider>
              <AttributesProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={
                    <ProtectedRoute>
                      <CreateKnightPage />
                    </ProtectedRoute>
                    } />
                  <Route path="list" element={
                    <ProtectedRoute>
                      <ShowKnightsPage />
                    </ProtectedRoute>
                    } />
                  {/* <Route path="test" element={<TestPage />} /> */}
                  {/* <Route path="react-query-test" element={<ReactQueryTest />} /> */}
                  <Route path="login" element={<LoginPage />} />
                </Routes>
              </AttributesProvider>
            </WeaponsProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  )
}

export default App
