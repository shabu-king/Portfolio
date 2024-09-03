import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
const App = () => {
  return (
    <div className="header" display="wrap" contentdisplay="flex">
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
