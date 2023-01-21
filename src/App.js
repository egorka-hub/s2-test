import styles from "./index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Solution from "./components/Solution/Solution";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Solution />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
