import Layout from './Component/Layout'
import '../index.css'
import './App.css'
import Header from './Component/Header'
import About from './Component/About'
import Card from './Component/Card'
import Skills from './Component/Skills'

function App() {


  return (
    <>
     <Layout>
      <Header/>
      <About/>
      <Card/>
      <Skills/>
      This is Section 

     </Layout>
    </>
  )
}


export default App
