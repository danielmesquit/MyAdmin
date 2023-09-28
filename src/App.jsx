import { useEffect, useState } from "react"
import { AppRoutes } from "./pages/routes"
import { GlobalStyles } from "./Styles/GlobalStyle"

function App() {
 
  return (
    <>
     <AppRoutes />
     <GlobalStyles />
    </>
  )
}

export default App