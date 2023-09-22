import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Navbar2 } from "./navbar"
import { Main } from "./Main"



export const App = () => {
   return (
    <>
       <Navbar />
            <Navbar2 />
                <Main />
                    <Footer />
    </>
   )
}