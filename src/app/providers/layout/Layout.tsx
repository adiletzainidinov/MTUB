import { Outlet } from "react-router"
import Footer from "../../../widgets/footer/ui/Footer"

const Layout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout