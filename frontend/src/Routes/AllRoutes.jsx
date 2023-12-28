import { Routes,Route } from 'react-router-dom'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <SignUp/> } />
        <Route path='/login' element={ <Login/> } />
    </Routes>
  )
}

export default AllRoutes