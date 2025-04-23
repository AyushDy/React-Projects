import MainLayout from './components/layout/Mainlayout'
import CartPage from './pages/cartpage/CartPage'
import Homepage from './pages/homepage/HomePage'
import  {Navigate, Route, Routes} from "react-router-dom"
import SignUpPage from './pages/authPage/SignUpPage'
import LoginPage from './pages/authPage/LoginPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ProductDetailsPage from './pages/singleProductPage/productDetailsPage'
import Productspage from './pages/productsPage/ProductsPage'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage'


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
          <Route index element={<SearchPage />} />
        </Route>

        <Route path='/product/:id'>
          <Route index element={<ProductDetailsPage />} />
        </Route>

        <Route path='/products'>
          <Route index element={<Productspage />} />
        </Route>

        <Route path='/about' element={<AboutPage />} />

        <Route path='/contact' element={<ContactPage />} />
        
      </Route>
    </Routes>
  )
}

export default App
