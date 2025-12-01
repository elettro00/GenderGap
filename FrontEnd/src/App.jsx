import Charts from './components/Charts'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Stats from './components/Stats'

function App() {

  window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Charts />
      <Insights />
      <Footer />
    </div>
  )
}

export default App
