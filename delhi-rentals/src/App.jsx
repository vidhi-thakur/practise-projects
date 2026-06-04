import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Title from './components/title/Title'

function App() {

  return (
    <>
      <Header />
      <main>
        <Title />
        <PropertyList />
      </main>
      <Footer />
    </>
  )
}

export default App
