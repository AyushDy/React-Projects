import MainLayout from './components/layout/Mainlayout'
import CartPage from './pages/cartpage/CartPage'
import Homepage from './pages/homepage/HomePage'
import  {Navigate, Route, Routes} from "react-router-dom"
import SignUpPage from './pages/authPage/SignUpPage'
import LoginPage from './pages/authPage/LoginPage'
import ProductsPage from './pages/productsPage/ProductsPage'


function App() {

  return (
    <Routes>
      <Route path='/' element={ <MainLayout /> } >
        <Route index element = {<Homepage />} />
        <Route path='cart'>
          <Route index element = {<CartPage />} />
        </Route>

        <Route path='auth'>
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
        </Route>

        <Route path='/search/:query'> 
          <Route index element={<ProductsPage />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
