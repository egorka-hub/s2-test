import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import Main from "./modules/Main/Main";
import Solution from "./modules/Solution/Solution";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Solution />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
