import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Services from './components/Services';
import Team from './components/Team';
import Work from './components/Work';

const App = () => {
  return (
    <div className='relative'>
      <div className='px-6 pt-10 text-gray-800 lg:px-12 font-poppins'>
        <Navbar />
        <Home />
        <Services />
        <Work />
        <Team />
        <Quote />
      </div>
      <Footer />
    </div>
  );
};

export default App;
