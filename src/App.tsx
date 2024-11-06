import './App.css'
import Root from './Root'
import HeroPage from './page/heroPage/HeroPage'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<HeroPage/>} />

      </Route>
    )
  )

  return (
     <RouterProvider router={router}/>
  )
}

export default App
