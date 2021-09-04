import './App.css';
import Aboutme from './components/Aboutme';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Service from './components/Service';
import Work from './components/Work';

function App() {
  return (
    <main>

      <Header/>
      <Service/>
      <Work/>
      <Aboutme/>
      <Banner/>
      <Blog/>
      <Contact/>
      <Footer/>
     
      </main>
  );
}

export default App;
