
import './App.css';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import HomeSection from './Components/HomeSection';
import MainSection from './Components/MainSection';
import NavBar from './Components/NavBar';

import ProjectSection from './Components/ProjectSection';
import ServicesShowcase from './Components/ServicesShowcase';

function App() {
  return (
   <>
   <NavBar/>
   <MainSection/>
   <HomeSection/>
   <ProjectSection/>
   <ServicesShowcase/>
   <ContactForm/>
   <Footer/>
 
   </>
  );
}

export default App;
