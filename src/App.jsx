import Layout from "./Component/Layout";
import "../index.css";
import "./App.css";
import Header from "./Component/Header";
import About from "./Component/About";
import Card from "./Component/Card";
import Project from "./Component/Project";



function App() {
  return (
    <>
      <Layout>
        <Header />
        <About />
        <Card />
        <Project />

      </Layout>
    </>
  );
}

export default App;
