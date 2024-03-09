import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

const RootLayout = () => {
  return (
    <div className="flex flex-col  h-screen bg-stone-100  ">
    <Navbar/>
    <Hero/>
    <main className="flex-1">
        <Outlet/>
    </main>
    <Footer/>
    </div>
 )
}

export default RootLayout