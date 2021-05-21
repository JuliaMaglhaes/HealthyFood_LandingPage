import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Banner from './components/Banner';
import Blog from './components/Blog';



function App() {
  return (
    <>
      <Navbar />
        <Header/>
        <Recipes/>
        <Banner/>
        <Blog />
      <GlobalStyle/>
    </>
  );
}

export default App;
