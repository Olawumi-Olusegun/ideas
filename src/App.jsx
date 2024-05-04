
import './App.css'
import { useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NewIdea from './pages/NewIdea';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/new",
    element: <NewIdea />
  }
]);

function App() {
  const {theme} = useTheme();
  return (
    <>
    <div className='flex flex-col items-center p-4 md:p-10 min-h-screen' data-theme={theme ?? "sunset"}>
      <div className="max-w-2xl w-full items-center ">
        <RouterProvider router={router} />
      </div>
    </div>
    </>
  )
}

export default App
