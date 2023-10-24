import Interests from './components/Interests'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
 
  return (
    <>
      <div className="container mx-auto max-w-xs flex flex-col self-center
      shadow-xl mt-12  mb-12">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  )
}

export default App
