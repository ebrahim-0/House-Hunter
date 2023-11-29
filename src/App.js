import "./App.css";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import Recommendation from "./component/Recommendation";
import Sell from "./component/Sell";
import Review from "./component/Review";
import Tips from "./component/Tips";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Recommendation />
      <Sell />
      <Review />
      <Tips />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
