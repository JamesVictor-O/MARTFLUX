import './App.css'
import Root from './Root'
import HeroPage from './page/heroPage/HeroPage'
import CreateAccount from './page/createAccountPage/CreateAccount'

import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<HeroPage/>} />
        <Route path='createAccount' element={<CreateAccount/>}/>

      </Route>
    )
  )

  return (
     <RouterProvider router={router}/>
  )
}

export default App
