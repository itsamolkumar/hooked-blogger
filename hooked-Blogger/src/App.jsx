  import { Footer,Header,Container,Loader } from './components'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
   {/* <Loader/> */}
   <Header/>
    <main>
        <Outlet />
        </main>
    <Footer/>
    </>
  )
}

export default App
