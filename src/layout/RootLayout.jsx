import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

const RootLayout = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default RootLayout