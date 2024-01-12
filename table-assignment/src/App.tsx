import GlobalStyles from "./global-styles"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home"

export default function App() {
  

  return (
    <Container>
      <GlobalStyles />
      <ToastContainer position="bottom-right" />

      <Home />
  
    </Container>
  )
}

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
`

